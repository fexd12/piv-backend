FROM node:12-alpine

WORKDIR /usr/app

COPY . .

RUN npm install && npm install -g pm2

EXPOSE 3000

CMD [ "pm2-runtime", "start", "dist/server.js", "-i", "max" ]

# gcloud builds submit --tag gcr.io/projectid/piv-backend .
# gcloud compute instances update-container name-instane --zone zone-instance --container-image=