import { Router } from 'express'
import * as wordCtrl from '../controllers/words.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()
console.log("words router")
/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, wordCtrl.index)
router.get('/:id', checkAuth, wordCtrl.show)
router.post('/', checkAuth, wordCtrl.create)
router.put('/:id', checkAuth, wordCtrl.update)
router.delete('/:id', checkAuth, wordCtrl.delete)

export { router }