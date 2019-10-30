FROM node:10
# Create directory for node modules directory and make it owned by non root user node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
#The user node should run npm install
USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD [ "npm", "start" ]