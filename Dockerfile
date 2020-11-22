FROM node:alpine

# dir of project
ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# install depend
COPY package*.json ./
RUN npm install

# copy all dir
COPY . .

# app listen port
EXPOSE 3000

# command run app
CMD ["npm", "start"]