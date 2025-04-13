const express = require('express');
const authController = require('../controller/authController');
const ReviewController = require('../controller/reviewController');

const reviewRouter = express.Router();

reviewRouter.get('/tour/:tourId', ReviewController.getReviewByTour);
reviewRouter.get('/user/:userId', ReviewController.getReviewByUser);
reviewRouter.get('/', ReviewController.getAllReviews);
reviewRouter.get('/:id', ReviewController.getReview);
reviewRouter.post(
  '/',
  authController.protect,
  authController.restrictTo('user'),
  ReviewController.createReview,
);

module.exports = reviewRouter;
