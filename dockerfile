# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copiar solo los package.json para evitar recacheo innecesario
COPY package*.json ./

# Instalar todas las dependencias (incluye dev para compilar NestJS)
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Compilar NestJS
RUN npm run build


# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copiar solo dependencias necesarias para producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar la compilación final de NestJS
COPY --from=build /app/dist ./dist

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=8080

# Exponer puerto
EXPOSE 8080

# Comando final
CMD ["node", "dist/main.js"]
