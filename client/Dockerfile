FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


RUN npm install
RUN npm install -g serve

COPY . .