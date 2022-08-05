import { Router } from 'express'
import verifyKey from './../middlewares/authRequest.js'
import { 
  findAllStudents,
  findStudent,
  createStudent,
  deleteStudent,
  updateStudent
} from '../controllers/studentController.js'

const router = Router()

router.get('/', (request, response) => {
  response.send('hello world')
})
router.get('/students', findAllStudents)
router.get('/students/:ra', findStudent)

router.post('/students', verifyKey, createStudent)

router.delete('/students/:ra', verifyKey, deleteStudent)

router.put('/students/:ra', verifyKey, updateStudent)

export default router
