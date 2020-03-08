FROM node:lts-alpine

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.* ./
USER node
RUN npm i

COPY --chown=node:node . .

EXPOSE 4444

CMD ["npm", "start"]

