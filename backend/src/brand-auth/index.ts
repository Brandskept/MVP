import { Router } from 'express';
import { otpRouter } from './otp';
import { oauthRouter } from './oauth';
import { ssoRouter } from './sso';
import { brandAuthConfig } from './config';

export const brandAuthRouter = Router();

// Mount OTP endpoints
if (brandAuthConfig.strategies.otp) {
  brandAuthRouter.use('/otp', otpRouter);
}

// Mount OAuth endpoints
if (brandAuthConfig.strategies.oauth) {
  brandAuthRouter.use('/oauth', oauthRouter);
}

// Mount SSO endpoints (outline only)
if (brandAuthConfig.strategies.sso) {
  brandAuthRouter.use('/sso', ssoRouter);
}
