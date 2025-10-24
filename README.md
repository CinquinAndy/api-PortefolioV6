# 🚀 Getting started with Strapi

## 📦 Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Docker](https://docs.docker.com/get-docker/)
- [Minio](https://docs.min.io/docs/minio-docker-quickstart-guide.html)
- [Caprover](https://caprover.com/docs/get-started.html)
- [Docker Hub](https://hub.docker.com/)
- [Postgres Docker](https://hub.docker.com/_/postgres)

## 🧰 Development

Start your Strapi application with autoReload
enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
yarn develop
```

## 🔄 ISR Automatic Revalidation

This Strapi instance is configured with **automatic ISR (Incremental Static Regeneration) revalidation** for Next.js.

When you create, update, or delete content in Strapi, the Next.js frontend is automatically revalidated in real-time.

**Configured Content Types:**
- Articles
- Realisations (Portfolio projects)
- Courses
- Lessons
- Content Website (Global content)

**Documentation:** See [ISR_STRAPI_SETUP.md](./ISR_STRAPI_SETUP.md) for complete setup instructions and troubleshooting.

**Quick Setup:**
1. Generate a secret: `openssl rand -base64 32`
2. Add to `.env`:
   ```bash
   NEXT_PUBLIC_URL=https://your-domain.com
   REVALIDATION_SECRET=your-generated-secret
   ENABLE_ISR_REVALIDATION=true
   ```
3. Use the same `REVALIDATION_SECRET` in your Next.js `.env`

## ⚙️ Deployment

### CI / CD environments variables

| Variable          | Description         |
| ----------------- | ------------------- |
| `APP_URL`         | Caprover app url    |
| `APP_NAME`        | Caprover app name   |
| `APP_TOKEN`       | Caprover app token  |
| `DOCKER_USERNAME` | Docker hub username |
| `DOCKER_PASSWORD` | Docker hub password |
| `APP_IMAGE`       | Docker image name   |
| `S3_ENDPOINT`     | Minio endpoint      |
| `S3_PORT`         | Minio port          |
| `S3_SSL`          | Minio ssl enable    |

### Docker environments variables

| Variable            | Description                                   |
| ------------------- | --------------------------------------------- |
| `HOST`              | Straip host listener                          |
| `PORT`              | Straip port listener                          |
| `APP_KEY`           | Set the application key                       |
| `API_TOKEN_SALT`    | Set the API token salt                        |
| `ADMIN_JWT_SECRET`  | Set the admin JWT secret                      |
| `DB_CLIENT`         | Set the database client ( postgres / sqlite ) |
| `DATABASE_HOST`     | Set the database host                         |
| `DATABASE_PORT`     | Set the database port                         |
| `DATABASE_NAME`     | Set the database name                         |
| `DATABASE_USERNAME` | Set the database username                     |
| `DATABASE_PASSWORD` | Set the database password                     |
| `S3_ENDPOINT`       | Minio endpoint                                |
| `S3_PORT`           | Minio port                                    |
| `S3_SSL`            | Minio ssl enable                              |
| `S3_BUCKET`         | Minio bucket name                             |
| `S3_ACCESS_KEY_ID`  | Minio access key id                           |
| `S3_ACCESS_SECRET`  | Minio access secret                           |
