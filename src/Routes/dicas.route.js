import { Router } from 'express';
import { getdicas } from '../Controllers/dicas.controller.js';

const router = Router();

router.get('/', getdicas);

export default router;
