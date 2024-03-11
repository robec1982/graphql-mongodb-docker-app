FROM node:20

WORKDIR /graphqlapp
COPY package.json .
RUN npm install -g npm@10.5.0
COPY . .
CMD npm start