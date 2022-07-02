FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=80

EXPOSE 80

CMD ["yarn","dev"]