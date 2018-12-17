import Student from '../models/students';

export const addStudent = async (req, res, next)=>{
     const student = new Student({
         email: req.body['email'],
         phone: req.body['phone'],
         roll_no: 1,
         branch: req.body['branch']
     });
     const data = await student.save();
     res.send({
         data: data
     })
}

// email: req.body['email'],
// phone: req.body['phone'],
// branch: req.body['branch']
