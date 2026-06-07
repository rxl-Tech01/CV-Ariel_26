#!/bin/bash

set -e

docker rm -f cv-running 2>/dev/null || true

docker build -t cv-ariel .

docker run -d \
-p 8081:80 \
--name cv-running \
cv-ariel

docker ps
