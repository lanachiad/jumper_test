#Docker image
FROM node:10

#Working directory 
WORKDIR /usr/src/app

#Copies both package.json and package-lock.json
COPY package*.json ./

RUN npm install 

#Copies everything to the Docker environment
COPY . . 

EXPOSE 3000

CMD ["npm", "start"] 