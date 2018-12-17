import * as attendacneController from '../controllers/attendance_controller';
import express from 'express';
const router = express.Router();

router.route('/add-student')
      .post(attendacneController.addStudent)

export default router;
