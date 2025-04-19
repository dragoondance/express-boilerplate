const express = require('express');
const { protect, restrictTo } = require('../controller/authController');
const reviewController = require('../controller/reviewController');

const reviewRouter = express.Router({ mergeParams: true });

reviewRouter.use(protect);

reviewRouter
  .route('/')
  .get(reviewController.setTourIdFilter, reviewController.getAllReviews)
  .post(
    restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview,
  );

reviewRouter
  .route('/:id')
  .get(reviewController.getReview)
  .delete(restrictTo('user', 'admin'), reviewController.deleteReview)
  .patch(restrictTo('user', 'admin'), reviewController.updateReview);

module.exports = reviewRouter;
