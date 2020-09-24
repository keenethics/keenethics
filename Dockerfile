FROM 174235647593.dkr.ecr.eu-central-1.amazonaws.com/keenethics:node
#RUN echo ${{ secrets.SECURITY_SHEET_FILE }} > park-8794500e15f6.json
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000
CMD npm run start
