FROM node:alpine

RUN mkdir -p /data
WORKDIR /data

COPY . /data

RUN npm install

RUN npm run build
EXPOSE 3000
CMD npm run start
