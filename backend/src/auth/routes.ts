import { Router } from 'express';
import {
  signup,
  login,
  verifyEmail,
  requestPasswordReset,
  resetPassword,
  oauthCallback,
} from './controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify/:token', verifyEmail);
router.post('/password/forgot', requestPasswordReset);
router.post('/password/reset', resetPassword);
router.post('/oauth/:provider/callback', oauthCallback);

export default router;
