FROM node:17-alpine3.12 AS develop

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
