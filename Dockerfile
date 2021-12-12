FROM node:15
WORKDIR /app
COPY package.json /app/

# to not download not required dependencies in production
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi
COPY . /app/
# EXPOSE command set the lauching port number for our node application in docker env even if i remove this
# line of command it will change nothing because the docker will assign the default port for the node app
# which is 3000
ENV PORT=4000
EXPOSE 3000
# to the run the application in Docker enviorment use the CMD(excectable command)
CMD ["node","app.js"]




