FROM node:11-alpine

WORKDIR /node-app

COPY src/package.json .

RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 3000
EXPOSE 27017

CMD ["node", "src/index.js"]