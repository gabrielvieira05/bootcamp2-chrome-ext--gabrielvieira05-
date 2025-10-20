FROM mcr.microsoft.com/playwright:v1.56.1-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN node scripts/build-extension.mjs
CMD ["npm", "run", "test:e2e"]
