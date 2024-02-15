
# Dockerfile
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Set the PORT environment variable to 8080
ENV PORT=8080

EXPOSE 8080

CMD ["node", "index.js"]
