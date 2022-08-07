const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Social = require("../models/Social");
const ErrorHandler = require("../utils/errorhander");

//get all social
exports.getAllSocials = catchAsyncErrors(async (req, res) => {
  const social = await Social.find();
  res.status(200).json(social);
});

//get social link by id
exports.getSocialById = catchAsyncErrors(async (req, res, next) => {
  const social = await Social.findById(req.query.socialId);
  if (!social) {
    return next(new ErrorHandler("Social Not found!", 404));
  }
  res.status(200).json(social);
});

//create new social link
exports.addSocial = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(new ErrorHandler("Please Enter Name!", 400));
  }
  const social = await Social.create(req.body);
  res.status(200).json(social);
});

//update social
exports.updateSocial = catchAsyncErrors(async (req, res, next) => {
  const social = await Social.findById(req.body.socialId);
  if (!social) {
    return next(new ErrorHandler("Project Not Found!", 404));
  }

  social = await Social.findByIdAndUpdate(req.body.socialId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json(project);
});

//delete social
exports.deleteSocial = catchAsyncErrors(async (req, res, next) => {
  const social = await Social.findById(req.body.socialId);
  if (!social) {
    return next(new ErrorHandler("Social not found!", 404));
  }

  await social.remove();
  res.status(200).json({
    message: "Social deleted successfully!",
  });
});
