const {
  getAllUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetOneUser,
} = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/', getAllUser)
router.post('/', CreateUser)
router.get("/:id",GetOneUser)
router.delete('/:id', DeleteUser)
router.patch('/:id', UpdateUser)

module.exports = router
