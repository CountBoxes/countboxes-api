<img src="./ModelagemEngSoft.drawio.png">


## Pré-requisitos
- Node.js instalado
- PostgreSQL instralado, configurado e em execução
- Prisma instalado e configurado para conectar com o banco de dados

## Instalação
1. Clone o repositório:
    ```
    git clone https://github.com/usuario/countboxes-api.git
2. Acesse o diretório do projeto:
    ```
    cd countboxes-api
3. Instale as dependências:
   ```
   npm install
4. Configure as variáveis de ambiente:
   - Crie um arquivo .env na raiz do projeto e adicione suas configurações.

   ```
   DATABASE_URL="postgresql://root:root@localhost:5435/mydb?schema=public"
   
   SECRET=MySuperSecretKey123!@#%^&*()_+-={}[]|:;<>,.?/
5. Execute as migrações do Prisma para criar as tabelas no banco de dados:
   ```
    npx prisma migrate dev
6. Inicie o servidor:
   ```
   npm run dev
## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | A solicitação foi bem-sucedida.|
| `201` | A solicitação foi bem-sucedida e, como resultado, um novo recurso foi criado.|
| `400` | O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente. Provavelmente um dado foi passado errado.|
| `500` | O servidor encontrou uma situação que não sabe como lidar.|
