# 🧠 United Creative Monorepo

i have 2 main-course in this repository:
- **Backend (`be`)** → API server using NestJS + GraphQL  
- **Frontend (`fe`)** → Web app using Next.js + Apollo Client  

---

## 🧩 Tech Stack

### 🛠 Backend (`be`)
- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)

### 🎨 Frontend (`fe`)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Codegen](https://the-guild.dev/graphql/codegen)

### ⚙️ Tools & Package Manager
- [PNPM](https://pnpm.io/)


---

## ⚙️ How to run this project


### 1. Prepare your device
Make sure these versions are installed:
```
node @22.20.0
pnpm 10.18.2
```


### 2. Clone repository
```bash
git clone https://github.com/eotambunan/unitedcreative-monorepo-evander.git
cd unitedcreative-monorepo-evander
```
### 3. Which OS are you using?
🪟 If you're on Windows

Just run the provided script:
```
run.sh
```


🐧 If you're on Linux / macOS (😒)

You’ll need to start everything manually:

```
cd be
pnpm install
pnpm start:dev
```
Wait until backend is ready, then in another terminal:
```
cd ../fe
pnpm install
pnpm gen
pnpm dev
```

### 4. ✅ Done!
Now Open 
```
Frontend → http://localhost:3000
Backend  → http://localhost:3001/graphql -- sandbox & documentation
```

## 👨 Author
Developed with 💅 by Evander Tambunan



