import * as attendacneController from '../controllers/attendance_controller';
import express from 'express';
const router = express.Router();

router.route('/add-student')
      .post(attendacneController.addStudent)

router.route('/list-students')
      .get(attendacneController.listStudent)

router.route('/take-attendance')
      .post(attendacneController.takeAttendance)

export default router;
