import Student from './../models/Student.js'

const findAllStudents = async (request, response) => {
  const students = await Student.findAll()
  return response.json(students);
}

const findStudent = async (request, response) => {
  const { id } = request.params
  const student = await Student.findOne({
    where: { id }
  })
  if( student ) return response.status(200).json(student);
  return response.status(404).json({msg: "student not found!"});
}

const createStudent = async (request, response) => {
  const { name, email, cpf, ra } = request.body

  const newStudent = await Student.create({
    id: null,
    name,
    email,
    cpf,
    ra,
  });

  if( newStudent ) 
    return response.status(200).json({msg: "Student created successfully!"});
    
}

export {
  findAllStudents,
  findStudent,
  createStudent
}