FROM node:14

WORKDIR /graphqlapp
COPY package.json .
RUN npm install
COPY . .
CMD npm start