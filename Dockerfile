# Usar uma imagem base do Node.js
FROM node:22-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Expor a porta da aplicação
EXPOSE 3000

# Rodar as migrações antes de iniciar a aplicação
CMD ["sh", "-c", "npx prisma migrate dev && npm run dev"]
