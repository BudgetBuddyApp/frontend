FROM node:20.10.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . /app

RUN npm run build
FROM nginx:1.27.0-alpine
COPY ./config/default.conf /etc/nginx/conf.d/deafult.conf
COPY --from=builder /app/dist/money-tracker/browser/ /usr/share/nginx/html


