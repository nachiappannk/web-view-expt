// create the docker file
touch Dockerfile
// Add the follwing lines to Dockerfile
FROM node:alpine
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install --production
COPY src .
CMD ["node", "index.js"]
