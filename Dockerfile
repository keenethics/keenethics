FROM 174235647593.dkr.ecr.eu-central-1.amazonaws.com/keenethics:latest

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install && mv ./node_modules ./react-frontend

WORKDIR /react-frontend

COPY . .
RUN npm rebuild node-sass
RUN npm run build
#RUN npm run start
EXPOSE 3000
