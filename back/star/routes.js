const { Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/', controller.getStars);
router.post('/', controller.addStar);
// router.get('/:id', controller.getStarById);
router.put('/:id', controller.updateStar);
router.delete('/:id', controller.removeStar);

module.exports = router;