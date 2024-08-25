import { Router } from 'express';
import AuthController from '../../controllers/Auth';

const authRoutes = new Router();

authRoutes.post('/login', AuthController.login);

export default authRoutes;
