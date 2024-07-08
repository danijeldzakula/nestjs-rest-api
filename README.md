<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Before the installation

```bash
# create .env file (includes)

$ DATABASE_URL="postgresql://user:<YOUR-PASSWORD>@localhost:5432/<YOUR-DATABASE-NAME>?schema=public"

$ JWT_ACCESS_SECRET
$ JWT_REFRESH_SECRET
$ JWT_ACCESS_EXPIRATION_TIME
$ JWT_REFRESH_EXPIRATION_TIME

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# start docker
$ docker-compose up

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the Prisma

```bash
# generate prisma migrate
$ npx prisma migrate dev --create-only

# run prisma generate
$ npx prisma generate

# prisma db push
$ npx prisma db push

# run prisma studio
$ npx prisma studio
```

## Stop the app

```bash
# stop docker
$ docker-compose down
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Create new routes

```bash
# all installation of users entity
$ nest g resource users

# instal by type
$ npx nest g controller -YOUR-COTROLLER-NAME-
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
