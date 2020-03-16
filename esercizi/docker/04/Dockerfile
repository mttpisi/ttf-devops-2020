FROM alpine
RUN apk add nodejs
ARG message
CMD if [ "$message" = "" ] ; then node /app/index.js ; else node /app/indexjs $message ; fi


COPY index.js /app/