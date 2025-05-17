const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //get tour data from collection
  const tours = await Tour.find();
  //build template

  //render that template using tour data
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
    isHome: true,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  //get data for the requested tour (including reviews and tour guide)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  if (!tour) return next(new AppError('There is no tour with that name.', 404));

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
});

exports.getSignUpForm = catchAsync(async (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Sign Up',
  });
});

exports.getAccount = catchAsync(async (req, res, next) => {
  console.log({ u: res.user });
  res.status(200).render('account', {
    title: 'Your Account',
  });
});
