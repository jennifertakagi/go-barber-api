import { Router } from 'express';

import ForgotController from '../controllers/ForgotController';
import ResetController from '../controllers/ResetController';

const passwordRouter = Router();
const forgotController = new ForgotController();
const resetController = new ResetController();

passwordRouter.post('/forgot', forgotController.create);
passwordRouter.post('/reset', resetController.create);

export default passwordRouter;
