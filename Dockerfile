FROM node:12
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install --only=production
COPY . ./
CMD [ "npm", "start" ]
