const express = require('express');
const router = express.Router();

const { 
  getAllStudents, 
  getStudent 
} = require('./../controllers/apiController');

router.get('/', (request, response) => {
  return response.status(200).json({msg: "Hello World"});
})
router.get('/student', getAllStudents);

router.get('/student/:id', getStudent)

module.exports = router;