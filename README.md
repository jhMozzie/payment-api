# Steps
```bash
pnpm init
tsc --init

```

# Install Some Packages
```bash
pnpm add express dotenv cors morgan
```

# Install Dependecies
```bash
pnpm add express dotenv cors morgan
```

# Install DevDepencies
```bash
pnpm add -D typescript ts-node-dev @types/node @types/express @types/cors @types/morgan @types/dotenv
```

# Tsconfig content
```js
{
  "compilerOptions": {
    "target": "ES2020",       
    "module": "ESNext",
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

