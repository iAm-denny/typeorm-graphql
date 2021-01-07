# Awesome Project Build with TypeORM

Steps to run this project:

1. Install Lastest Version "npm i typescript@latest ts-node@latest @types/node@latest"
2. Add  "dev": "nodemon --exec ts-node src/index.ts",
      "typeorm": "ts-node ./node_modules/typeorm/cli.js" in package.json scripts
3. Add "esModuleInterop": true in tsconfig.json to run import module
4. Modify logging: false to true in ormconfig.json
<h3>Before run npm </h3>
1.Do npm run typeorm schema:drop
2. npm run typeorm schema:sync
3. and then npm run dev
