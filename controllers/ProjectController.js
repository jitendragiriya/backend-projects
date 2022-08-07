const Project = require("../models/Projects");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhander");

//get all projects
exports.getAllProjects = catchAsyncErrors(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

//get project by id
exports.getProjectById = catchAsyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.query.projectId);
  if (!project) {
    return next(new ErrorHandler("Project Not found!", 404));
  }
  res.status(200).json(project);
});

//create new project
exports.addProject = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(new ErrorHandler("Please Enter Name!", 400));
  }
  const project = await Project.create(req.body);
  res.status(200).json(project);
});

//update project
exports.updateProject = catchAsyncErrors(async (req, res, next) => {
  let project = await Project.findById(req.body.projectId);
  if (!project) {
    return next(new ErrorHandler("Project Not Found!", 404));
  }

  project = await Project.findByIdAndUpdate(req.body.projectId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json(project);
});

//delete projects
exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.body.projectId);
  if (!project) {
    return next(new ErrorHandler("Project not found!", 404));
  }

  await project.remove();
  res.status(200).json({
    message: "Product deleted successfully!",
  });
});
