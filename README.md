# Migration Commands

Create a new migration file

```bash
npx knex migrate:make <migration-name> --migrations-directory db/migrations
```

Run the migration

```bash
npx knex migrate:latest --knexfile db/knexfile.js
```

Create a seed file

```bash
npx knex seed:make <seed-name> --cwd db
```

Run the seed

```bash
npx knex seed:run --knexfile db/knexfile.js
```
