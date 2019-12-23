#-----STAGE DEVELOPER -----

# FROM node:lts-alpine as gestao-recursos
# RUN mkdir source && \
#     chmod -R 777 source
# WORKDIR /source
# COPY ./source  .
# RUN npm install
# EXPOSE 8080
# CMD npm run serve

#-----STAGE PRODUCTION-----
FROM node:lts-alpine
RUN mkdir source && \
     chmod -R 777 source
WORKDIR /source
COPY ./source .
RUN chmod -R 777 /source
RUN npm install 