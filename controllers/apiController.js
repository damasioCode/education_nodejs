const data = require('./data');

const getAllStudents = (request, response) => {
  return response.status(200).json(data)
}

const getStudent = (request, response) => {
  try {
    const { id } = request.params
    const filterStudent = data.filter( student => student.id == id )
    
    if(filterStudent.length == 0){
      throw "Student not found!"
    }

    return response.status(200).json(filterStudent)
  } catch(error) {
    return response.status(404).json({msg: error});
  }
}

module.exports = {
  getAllStudents,
  getStudent
}