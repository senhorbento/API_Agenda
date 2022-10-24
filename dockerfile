FROM node:latest

WORKDIR /app

COPY src/package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 3000

CMD ["node", "src/index.js"]