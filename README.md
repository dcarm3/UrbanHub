# 🌆 UrbanHub

**UrbanHub** é uma plataforma digital de participação cidadã que permite que usuários comuniquem, visualizem e discutam problemas urbanos, como buracos nas ruas, iluminação pública, lixo acumulado, entre outros. O objetivo é conectar cidadãos e órgãos responsáveis para promover melhorias nas cidades de forma colaborativa.

---

## 📦 Tecnologias Utilizadas

### 🔧 Backend
- **NestJS**
- **MongoDB**
- **Mongoose**
- **TypeScript**
- **Swagger** (Documentação)
- **Docker** (opcional)

### 🎨 Frontend
- **React 18+**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **React Router DOM**

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/urbanhub.git
cd urbanhub
```

### 2. Backend

```bash
cd backend
npm install
npm run start:dev
```

O backend será iniciado em `http://localhost:3000`.

> A API estará documentada em `http://localhost:3000/api`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação será iniciada em `http://localhost:5173`.

---

## 🔁 Exemplo de JSON para criar um usuário

```json
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Maria Silva",
  "email": "maria@example.com",
  "password": "123456"
}
```

---

## 📁 Estrutura de Pastas

```
urbanhub/
├── backend/              # Projeto NestJS
│   ├── src/
│   └── ...
├── frontend/             # Projeto React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   └── ...
└── README.md
```

---

## 👥 Contribuidores

- Daniel C. Martins
- Enzo D Andrey Lavieri Yarid
- Rafael Yuzo Fuzii

---
