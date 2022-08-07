const express = require("express");
const {
  addProject,
  getAllProjects,
  updateProject,
  deleteProject,
  getProjectById,
} = require("../controllers/ProjectController");
const router = express.Router();

//projects routes
router.get("/projects", getAllProjects);
router.get("/project", getProjectById);
router.post("/project/add", addProject);
router.put("/project/update", updateProject);
router.delete("/project/delete", deleteProject);

module.exports = router;
