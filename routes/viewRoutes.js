const express = require('express');

const router = express.Router();
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');

// const CSP = 'Content-Security-Policy';
// const POLICY =
//   "default-src 'self' https://*.mapbox.com ;" +
//   "base-uri 'self';" +
//   "font-src 'self' https: data:;" +
//   "frame-ancestors 'self';" +
//   "img-src http://localhost:3000 'self' blob: data:;" +
//   "object-src 'none';" +
//   "script-src https: cdn.jsdelivr.net cdnjs.cloudflare.com api.mapbox.com 'self' blob: ;" +
//   "script-src-attr 'none';" +
//   "connect-src 'self' http://127.0.0.1 api.mapbox.com;" +
//   "style-src 'self' https: 'unsafe-inline';" +
//   'upgrade-insecure-requests;';

// router.use((req, res, next) => {
//   res.setHeader(CSP, POLICY);
//   next();
// });

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignUpForm);

router.get('/me', authController.protect, viewsController.getAccount);

module.exports = router;
