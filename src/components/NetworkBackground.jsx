import React, { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    let animationFrameId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes = [];
    let pulses = [];
    let lastTimestamp = 0;
    let pulseSpawnTimer = 0;

    const pointer = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

    const getDeviceProfile = () => {
      const cores = navigator.hardwareConcurrency || 4;
      const isCoarse = coarsePointerQuery.matches || window.innerWidth < 768;
      const isLowPower = cores <= 4 || isCoarse;
      const maxDpr = isLowPower ? 1.25 : 1.75;
      const area = window.innerWidth * window.innerHeight;
      const baseDensity = isLowPower ? 36000 : 24000;
      const maxNodes = isLowPower ? 24 : 46;
      const minNodes = isLowPower ? 12 : 20;
      const count = Math.max(minNodes, Math.min(maxNodes, Math.floor(area / baseDensity)));
      const linkDistance = isLowPower ? 115 : 145;

      return { isCoarse, isLowPower, maxDpr, count, linkDistance };
    };

    let profile = getDeviceProfile();

    const initNodes = () => {
      profile = getDeviceProfile();
      dpr = Math.min(window.devicePixelRatio || 1, profile.maxDpr);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: profile.count }, (_, idx) => {
        const isCyan = idx % 3 !== 0;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: isCyan ? 1.5 : 1.8,
          color: isCyan ? "32, 211, 238" : "59, 130, 246",
          alpha: 0.2 + Math.random() * 0.22,
        };
      });

      pulses = [];
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const maxDistSq = profile.linkDistance * profile.linkDistance;
      for (let attempt = 0; attempt < 10; attempt++) {
        const i = Math.floor(Math.random() * nodes.length);
        const a = nodes[i];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 2500 && distSq < maxDistSq) {
            pulses.push({
              from: a,
              to: b,
              progress: 0,
              speed: 0.00055 + Math.random() * 0.00035,
            });
            return;
          }
        }
      }
    };

    const drawFrame = (dt) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient radial depth at top-right and bottom-left
      const topGlow = ctx.createRadialGradient(
        width * 0.82,
        height * 0.14,
        10,
        width * 0.82,
        height * 0.14,
        Math.max(width, height) * 0.45
      );
      topGlow.addColorStop(0, "rgba(32, 211, 238, 0.035)");
      topGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.015)");
      topGlow.addColorStop(1, "rgba(9, 11, 19, 0)");
      ctx.fillStyle = topGlow;
      ctx.fillRect(0, 0, width, height);

      // Smooth desktop cursor ambient glow
      if (!profile.isCoarse && pointer.active) {
        pointer.x += (pointer.targetX - pointer.x) * Math.min(1, dt * 0.008);
        pointer.y += (pointer.targetY - pointer.y) * Math.min(1, dt * 0.008);

        const cursorGlow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          4,
          pointer.x,
          pointer.y,
          240
        );
        cursorGlow.addColorStop(0, "rgba(32, 211, 238, 0.05)");
        cursorGlow.addColorStop(0.45, "rgba(59, 130, 246, 0.022)");
        cursorGlow.addColorStop(1, "rgba(9, 11, 19, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      const stepFactor = Math.min(dt, 48) / 16.67;
      const linkDist = profile.linkDistance;
      const linkDistSq = linkDist * linkDist;

      // Update node positions when motion is enabled
      if (!reducedMotionQuery.matches && dt > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx * stepFactor;
          n.y += n.vy * stepFactor;

          if (n.x < -20) n.x = width + 20;
          else if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          else if (n.y > height + 20) n.y = -20;

          // Subtle cursor reaction on desktop
          if (!profile.isCoarse && pointer.active) {
            const cdx = n.x - pointer.x;
            const cdy = n.y - pointer.y;
            const cDistSq = cdx * cdx + cdy * cdy;
            if (cDistSq > 100 && cDistSq < 19600) {
              const cDist = Math.sqrt(cDistSq);
              const push = (1 - cDist / 140) * 0.14 * stepFactor;
              n.x += (cdx / cDist) * push;
              n.y += (cdy / cDist) * push;
            }
          }
        }
      }

      // Draw connection lines between nearby nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDistSq) {
            const ratio = 1 - Math.sqrt(distSq) / linkDist;
            const alpha = ratio * 0.11;
            ctx.strokeStyle = `rgba(32, 211, 238, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Subtle connection lines to desktop cursor
        if (!profile.isCoarse && pointer.active) {
          const cdx = pointer.x - a.x;
          const cdy = pointer.y - a.y;
          const cDistSq = cdx * cdx + cdy * cdy;
          if (cDistSq < 22500) {
            const cRatio = 1 - Math.sqrt(cDistSq) / 150;
            const cAlpha = cRatio * 0.16;
            ctx.strokeStyle = `rgba(59, 130, 246, ${cAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }

      // Update & draw signal pulses along edges
      if (!reducedMotionQuery.matches && dt > 0) {
        pulseSpawnTimer += dt;
        const spawnInterval = profile.isLowPower ? 2400 : 1400;
        if (pulseSpawnTimer >= spawnInterval && pulses.length < (profile.isLowPower ? 2 : 4)) {
          pulseSpawnTimer = 0;
          spawnPulse();
        }

        for (let i = pulses.length - 1; i >= 0; i--) {
          const p = pulses[i];
          p.progress += p.speed * dt;
          const dx = p.to.x - p.from.x;
          const dy = p.to.y - p.from.y;
          const distSq = dx * dx + dy * dy;

          if (p.progress >= 1 || distSq > linkDistSq * 1.35) {
            pulses.splice(i, 1);
            continue;
          }

          const px = p.from.x + dx * p.progress;
          const py = p.from.y + dy * p.progress;

          ctx.fillStyle = "rgba(32, 211, 238, 0.72)";
          ctx.beginPath();
          ctx.arc(px, py, 1.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.fillStyle = `rgba(${n.color}, ${n.alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const dt = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      drawFrame(dt);
      animationFrameId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      lastTimestamp = 0;
      if (reducedMotionQuery.matches || document.hidden) {
        drawFrame(0);
        return;
      }
      animationFrameId = window.requestAnimationFrame(tick);
    };

    let resizeTimeout = null;
    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        initNodes();
        drawFrame(0);
      }, 150);
    };

    const handleMouseMove = (e) => {
      if (profile.isCoarse) return;
      if (!pointer.active) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        pointer.active = true;
      }
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        startLoop();
      }
    };

    initNodes();
    startLoop();

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-0 z-0"
    />
  );
}
