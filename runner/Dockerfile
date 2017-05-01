FROM alpine:3.5

RUN apk update && apk add --no-cache libstdc++ libgcc

RUN mkdir /app/

COPY app.bin /app/

CMD [ "/app/app.bin" ]
