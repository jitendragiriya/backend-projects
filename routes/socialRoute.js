const express = require("express");
const {
  getAllSocials,
  addSocial,
  updateSocial,
  deleteSocial,
  getSocialById,
} = require("../controllers/SocialController");
const router = express.Router();

//projects routes
router.get("/socials", getAllSocials);
router.get("/social?socialId=:socialId", getSocialById);
router.post("/social/add", addSocial);
router.put("/social/update", updateSocial);
router.delete("/social/delete", deleteSocial);

module.exports = router;
