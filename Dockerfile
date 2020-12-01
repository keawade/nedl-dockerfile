FROM node:12.20.0

COPY . .
RUN npm ci
RUN npm run build

ENTRYPOINT [ "node", "./dist/index.js" ]
