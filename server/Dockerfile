FROM node:22-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .  

RUN npm run build 

EXPOSE 3000

CMD [ "npm" ,"start" ]