FROM node:14
WORKDIR /usr/src/app
COPY "package*.json" ./
RUN npm install
COPY . .
EXPOSE 3001
RUN npm run build
CMD ["npm", "start"]
# CMD ["node", "server/index.js"]
