FROM node:21.7.2-slim
WORKDIR  /app
COPY package*.json /app
COPY yarn.lock /app
RUN npm install --silent
RUN yarn install
RUN npm install -g http-server pnpm
COPY . /app
EXPOSE 8081
CMD [ "yarn", "start" ]
