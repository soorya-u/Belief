FROM node:20.10-slim

WORKDIR /app

RUN npm i --global pnpm

COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i

COPY . .

EXPOSE 5173

ENTRYPOINT [ "pnpm", "dev" ]
CMD [ "--host", "0.0.0.0" ]