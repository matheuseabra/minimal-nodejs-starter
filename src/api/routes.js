const routes = require('express').Router();

const AuthController = require('./shared/auth.controller');
const UserController = require('./user/user.controller');

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'The API is up' });
});

routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('*', (req, res) => {
  return res.status(404).json({ error: '404 Not Found' });
});

module.exports = routes;
