import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send("Olá Dev!")
});

router.post('/cidades', CidadesController.createBodyValidation, CidadesController.Create)

export { router }