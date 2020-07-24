FROM node:10
RUN echo ${{ secrets.SECURITY_SHEET_FILE }} > ./park-8794500e15f6.json
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000
CMD npm run start
