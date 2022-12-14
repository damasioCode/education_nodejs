import Student from './../models/Student.js'

const findAllStudents = async (request, response) => {
  try {
    const count = await Student.count()
    const students = await Student.findAll({
      raw: true,
      offset: 0, 
      limit: 10,
      order: [
        ['id', 'ASC']
      ] 
    })
  
    if( students.length == 0 ) throw "No students found!"
    
    return response.status(200).json({
      count,
      results: students
    })
    
  } catch(error) {
    return response.status(404).json({
      message: error || "Unexpected error!"
    })
  }
}

const findStudent = async (request, response) => {
  try {
    const { ra } = request.params
    const student = await Student.findOne({
      where: { ra }
    })

    if( !student ) throw "Student not found!"

    return response.status(200).json(student)

  } catch (error) {
    return response.status(404).json({
      message: error || "Unexpected error!"
    })
  }
}

const createStudent = async (request, response) => {
  try {
    const { name, email, cpf, ra } = request.body
  
    if( !name || !email || !cpf || !ra )
      throw "Fill in all fields!"

    const verifyIfExistsStudent = await Student.findOne({
      where: { ra }
    })

    if( verifyIfExistsStudent )
      throw "The student already exists!"
    
    const createNewStudent = await Student.create({
      id: null,
      name,
      email,
      cpf,
      ra,
    })
  
    if( createNewStudent ) 
      return response.status(200).json({
        message: "Student created successfully!"
      })

  } catch ( error ) {
    return response.status(404).json({
      message: error || "Unexpected error!"
    })
  }

}

const deleteStudent = async (request, response) => {
  try {
    const { ra } = request.params
  
    const deleteStudent = await Student.destroy({
      where: { ra }
    })
  
    if( !deleteStudent ) throw "Student not found!"
      return response.status(200).json({
        message: "Student deleted successfully!"
      })

  } catch ( error ) {
    return response.status(404).json({
      message: error || "Unexpected error!"
    })
  } 
}

const updateStudent = async (request, response) => {
  try {
    const { ra } = request.params
    const { name, email } = request.body

    if( !name || !email )
      throw "Fill in all fields!"
  
    const getStudent = await Student.findOne({
      where: { ra }
    })
    
    await getStudent.update({ name, email })
  
    await getStudent.save()
  
    return response.status(200).json({
      message: "Student successfully updated!"
    })
  } catch ( error ) {
    return response.status(404).json({
      message: error || "Unexpected error!"
    })
  }
}

export {
  findAllStudents,
  findStudent,
  createStudent,
  deleteStudent,
  updateStudent
}