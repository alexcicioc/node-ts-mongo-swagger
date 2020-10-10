import express from 'express';
import createMiddleware from 'swagger-express-middleware';
import { specPath } from './config';
import menus from './controllers/menus';
import routes from './routes';
import requestLog from './middlewares/request-log';
import { syncDB } from './migrations';

const app = express();

createMiddleware(specPath, app, (err, middleware) => {
  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.files(),
    middleware.parseRequest(),
    middleware.validateRequest(),
  );
  app.use(requestLog);
  app.use('/v1/menus', menus);
  app.use('/v1', routes);

  app.listen(8000, () => {
    console.log('App running at http://localhost:8000');
  });
});

syncDB();
