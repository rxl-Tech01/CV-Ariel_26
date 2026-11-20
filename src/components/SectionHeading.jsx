import React from "react";

export default function SectionHeading({ label, title, note, children }) {
  return (
    <div>
      {label && (
        <span className="font-mono-tech mb-2.5 inline-block text-xs font-semibold tracking-wider text-[#20d3ee] uppercase">
          {label}
        </span>
      )}
      <h2 className="mb-2 text-[1.35rem] font-semibold tracking-tight text-[#f3f4f6]">
        {title}
      </h2>
      {note && <p className="text-sm text-[#9ca3af]">{note}</p>}
      {children}
    </div>
  );
}
