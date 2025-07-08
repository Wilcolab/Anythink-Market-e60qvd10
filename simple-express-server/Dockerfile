FROM node:14

WORKDIR /app

COPY package*.json /app
RUN yarn install

# Copy all source files (including routes and src)
COPY . .

EXPOSE 8001

CMD ["yarn", "start"]
