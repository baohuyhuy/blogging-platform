# Blogging Platform API

A RESTful API for a personal blogging platform with full CRUD operations.

> Project requirements: [roadmap.sh/projects/blogging-platform-api](https://roadmap.sh/projects/blogging-platform-api)

## Tech Stack

- Node.js + Express 5
- PostgreSQL + Knex.js
- Zod for validation

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/blogging_platform
PORT=3000
```

3. Run migrations:

```bash
npm run migrate
```

4. Start server:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint     | Description                              |
| ------ | ------------ | ---------------------------------------- |
| POST   | `/posts`     | Create a blog post                       |
| GET    | `/posts`     | Get all posts (optional: `?term=search`) |
| GET    | `/posts/:id` | Get a single post                        |
| PUT    | `/posts/:id` | Update a post                            |
| DELETE | `/posts/:id` | Delete a post                            |

## Request/Response Examples

**Create Post:**

```json
POST /posts
{
  "title": "My First Blog Post",
  "content": "This is the content...",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

**Response (201):**

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content...",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

## Database Commands

```bash
# Create a new migration
npx knex migrate:make <migration-name> --migrations-directory db/migrations

# Run migrations
npm run migrate

# Create a seed file
npx knex seed:make <seed-name> --cwd db

# Run seeds
npm run seed
```
