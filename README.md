## 💬 DreamSquad Chat — Front-end (React + Vite)

Interface moderna para um agente conversacional usando React, Vite e integração com um backend FastAPI.
Possui modo claro/escuro, design clean e mensagens com estilo inspirado no ChatGPT.

## 🚀 Tecnologias utilizadas no projeto

React.js

Vite

JavaScript (ES6+)

CSS puro (estilização customizada)

Integração com FastAPI via fetch

## 🖥️ Funcionalidades

✔ Envio e exibição de mensagens
✔ Modo claro e escuro
✔ Animação de "digitando..." com três pontinhos
✔ Layout responsivo
✔ Interface tipo ChatGPT, centralizada e com efeito glass
✔ Comunicação direta com o backend local (http://127.0.0.1:8000/chat)

## 📦 Prompt para rodar o projeto
npm install (Utilize esse código para instalar a dependência do projeto)
npm run dev (Utilize esse código para rodar o projeto)


Acesse no navegador:

http://localhost:5173

## 🔗 Backend necessário

Este front-end depende de um backend rodando localmente:

POST http://127.0.0.1:8000/chat


Com corpo:

{
  "message": "texto do usuário"
}

## 📁 Estrutura principal

```text
src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 └── index.css
public/
index.html

```
🤝 Autor

Projeto desenvolvido por Wanderson Jafé.
