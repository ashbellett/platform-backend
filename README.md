# platform-backend
A backend capable of CRUD operations using GraphQL, Apollo and MongoDB.

## Dependencies
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

## Instructions
Ensure a MongoDB and Redis store are running.  
Install dependencies.
```
npm i
```
### Development
Copy environment variables.
```
cp sample.env .env
```
Lint code.
```
npm run lint
```
Run in development mode.
```
npm run dev
```
### Production
Transpile Typescript to Javascript.
```
npm run build
```
Run in production mode (requires previous build step).
```
npm run start
```

## Defaults
- Accessible on http://localhost:4000/graphql.
- MongoDB connection URI is mongodb://localhost:27017/test.
- Apollo playground accessible in development mode only.
