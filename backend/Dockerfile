FROM node:alpine AS BeTheHero-API

WORKDIR /usr/app

COPY ./src/package*.json ./

RUN npm i

COPY . .

RUN npm start