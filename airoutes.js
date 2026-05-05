const router = require("express").Router();
const { predictCareer, generateRoadmap } = require("../controllers/aiController");

router.post("/predict", predictCareer);
router.post("/roadmap", generateRoadmap);

module.exports = router;
