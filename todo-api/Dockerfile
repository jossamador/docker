# Etapa 1: construir la aplicación
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: configurar el contenedor
FROM node:14
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]

FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Añadir permisos de ejecución
RUN chmod +x ./node_modules/.bin/tsc

COPY . .
RUN npm run build
