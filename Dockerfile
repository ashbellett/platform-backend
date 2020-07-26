FROM node:14.6.0
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "./build/index.js" ]
