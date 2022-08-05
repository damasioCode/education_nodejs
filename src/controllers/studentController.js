import Student from './../models/Student.js'

const findAllStudents = async (request, response) => {

  const students = await Student.findAll({
    raw: true,
    offset: 0, 
    limit: 10,
    order: [
      ['name', 'ASC']
    ] 
  })

  return response.json({
    "count": students.length,
    "data": students
  });
  
}

const findStudent = async (request, response) => {
  const { ra } = request.params
  const student = await Student.findOne({
    where: { ra }
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

const deleteStudent = async (request, response) => {
  const { name, email, cpf, ra } = request.body

  const deleteStudent = await Student.destroy({
    where: {
      name,
      email,
      cpf,
      ra,
    }
  });

  if( deleteStudent ) 
    return response.status(200).json({msg: "Student deleted successfully!"});

}

export {
  findAllStudents,
  findStudent,
  createStudent,
  deleteStudent
}