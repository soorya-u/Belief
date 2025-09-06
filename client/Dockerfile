FROM oven/bun:latest AS builder

WORKDIR /app

ARG BACKEND_URL
ENV VITE_BACKEND_URL=${BACKEND_URL}

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:latest
WORKDIR /app

COPY --from=builder /app/dist ./public
COPY server.js ./

EXPOSE 5173

ENTRYPOINT ["bun", "run", "server.js"]