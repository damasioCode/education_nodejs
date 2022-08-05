import { Router } from 'express'
import 
{ 
  findAllStudents,
  findStudent,
  createStudent
} from '../controllers/studentController.js'

const router = Router()

router.get('/', (request, response) => {
  response.send('hello world')
})
router.get('/student', findAllStudents)
router.get('/student/:id', findStudent)

router.post('/student', createStudent)

export default router
