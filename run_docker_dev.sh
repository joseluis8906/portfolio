#!/usr/bin/bash
docker run -it \
    --name portfolio \
    -p 4200:4200 \
    -w /app \
    -v $(pwd):/app \
    -d node:10.15.3-stretch