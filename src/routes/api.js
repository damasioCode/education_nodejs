import { Router } from 'express'
import verifyKey from './../middlewares/authRequest.js'
import { 
  findAllStudents,
  findStudent,
  createStudent,
  deleteStudent
} from '../controllers/studentController.js'

const router = Router()

router.get('/', (request, response) => {
  response.send('hello world')
})
router.get('/student', findAllStudents)
router.get('/student/:ra', findStudent)

router.post('/student', verifyKey, createStudent)

router.delete('/student', verifyKey, deleteStudent)

export default router
