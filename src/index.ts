import express from 'express';
import mongoose from 'mongoose';
import createMiddleware from 'swagger-express-middleware';
import mongoSanitize from 'express-mongo-sanitize';
import { mongoConnection, specPath } from './config';
import menu from './controllers/menu';
import requestLog from './middlewares/request-log';

const app = express();
mongoose.connect(
  `mongodb://${mongoConnection.username}:${mongoConnection.password}@${mongoConnection.host}:${mongoConnection.port}`,
  { useNewUrlParser: true },
);

createMiddleware(specPath, app, (err, middleware) => {
  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.files(),
    middleware.parseRequest(),
    middleware.validateRequest(),
  );
  app.use(mongoSanitize);
  app.use(requestLog);
  app.use('/v1/menus', menu);

  app.listen(8000, () => {
    console.log('The PetStore sample is now running at http://localhost:8000');
  });
});
