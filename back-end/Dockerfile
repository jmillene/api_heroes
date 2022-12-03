FROM node:16.14-alpine

WORKDIR /back-end

EXPOSE 3001

COPY package* ./

RUN npm install

COPY . .

CMD ["npm", "start"] 