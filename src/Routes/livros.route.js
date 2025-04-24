import { Router } from 'express';
import { getlivros } from '../Controllers/livros.controller.js';

const router = Router();

router.get('/', getlivros);

export default router;
