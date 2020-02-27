FROM node:13.8-alpine AS builder
WORKDIR /apollon

COPY package.json package.json
RUN npm i

COPY . .
RUN npm run build

FROM node:13.8-alpine
WORKDIR /apollon

COPY --from=builder /apollon/dist /apollon

RUN npm ci
ENV APOLLON_ENV production
ENTRYPOINT ["node", "index.js"]
