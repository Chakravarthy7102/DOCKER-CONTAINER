FROM node:15
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
# EXPOSE command set the lauching port number for our node application
EXPOSE 3000
# to the run the application in Docker enviorment use the CMD(excectable command)
CMD ["node","app.js"]




