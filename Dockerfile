FROM node:15
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
# EXPOSE command set the lauching port number for our node application in docker env even if i remove this
# line of command it will change nothing because the docker will assign the default port for the node app
# which is 3000
EXPOSE 3000
# to the run the application in Docker enviorment use the CMD(excectable command)
CMD ["node","app.js"]




