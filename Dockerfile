FROM node:10.16.0-alpine

WORKDIR /data

CMD ["node", "/data/lib/index.js"]
