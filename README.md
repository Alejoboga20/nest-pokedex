<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# To run in development

1. Clone Repository
2. Execute

```
yarn install
```

3. Install nest cli (skip it if you already have it)

```
npm i -g @nestjs/cli
```

4. Run DB

```
docker-compose up -d
```

5. Clone **.env.template** file, rename it to **.env** and fill the variables inside

6. Seed DB (only in development)

```
GET http://localhost:3000/api/v2/seed
```

7. Run Application

```
yarn start:dev
```

## Tech Stack

- MongoDB
- Nest

## Notes

To force a Heroku redeploy with no changes:

```
git commit --allow-empty -m "Trigger Heroku Deploy"
git push heroku <branchName>
```
