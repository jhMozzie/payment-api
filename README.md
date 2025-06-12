🚀 Setup Guide: Payment API with Express, TypeScript & Prisma

This project is a backend API built using Express, TypeScript, and Prisma ORM, with a PostgreSQL database, all managed via pnpm.


# 📦 1. Initialize the project
```bash
pnpm init
tsc --init
```

# ⚙️ 2. Install main dependencies
```bash
pnpm add express dotenv cors morgan
```

# 🧪 3. Install development dependencies
```bash
pnpm add -D typescript ts-node-dev @types/node @types/express @types/cors @types/morgan @types/dotenv
```

# 🔧 4. TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",                                  
    "module": "commonjs",                                
    "rootDir": "./src",                                  
    "moduleResolution": "Node",                     
    "resolveJsonModule": true,                        
    "outDir": "./dist",                                   
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,            
    "strict": true,                                      
    "skipLibCheck": true                                 
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

# 🔌 5. Install Prisma and initialize it
```bash
pnpm add prisma@6.8.0 @prisma/client@6.8.0
pnpm approve-builds
pnpx prisma init
```

# 📜 6. Add useful scripts in package.json
```json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
}
``` 
# 🗂️ Suggested project structure
```bash
payment-api/
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma
├── src/
│   ├── config/            # Prisma client instance
│   ├── customer/          # Customer module (controller, service, route, types)
│   └── index.ts           # Main entry point
├── .env                   # Environment variables
├── docker-compose.yml     # PostgreSQL container config
├── tsconfig.json          # TypeScript configuration
└── package.json
```

# 📜 7. Create migrations
```bash
pnpm prisma migrate dev --name init_customer
```
