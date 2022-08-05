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
    
    return response.json({
      count,
      "results": students
    });
    
  } catch(error) {
    return response.status(404).json({
      msg: error
    });
  }
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
  const { ra } = request.params

  const deleteStudent = await Student.destroy({
    where: {
      ra,
    }
  });

  if( deleteStudent ) 
    return response.status(200).json({msg: "Student deleted successfully!"});

}

const updateStudent = async (request, response) => {
  const { ra } = request.params;
  const { name, email } = request.body;

  const getStudent = await Student.findOne({
    where: { ra }
  });
  
  await getStudent.update({
    name,
    email
  })

  await getStudent.save()

  return response.status(200).json({msg: "Student updated successfully!"})
}

export {
  findAllStudents,
  findStudent,
  createStudent,
  deleteStudent,
  updateStudent
}