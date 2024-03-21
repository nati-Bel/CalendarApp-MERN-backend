/* 
Rutas de Usuarios / Auth
host + /api/auth
*/


const {Router} = require('express');
const router = Router();

const{createUser, loginUser, renewToken} = require('../controllers/auth');


router.post('/register', createUser);
  
router.post('/login', loginUser);

router.get('/renew', renewToken);


module.exports = router;