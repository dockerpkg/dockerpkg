FROM node:7.9-alpine

RUN apk update && apk add --no-cache git

RUN npm install -g pkg

CMD ["/usr/local/bin/pkg", "-t", "node7-alpine-x64", "/app/", "-o", "/app/app.bin"]
