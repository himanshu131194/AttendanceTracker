import Student from '../models/students';
import Attendance from '../models/attendance';

export const addStudent = async (req, res, next)=>{
     console.log(req.body);
     const student = new Student({
         name: req.body['name'],
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


export const listStudent = async (req, res, next)=>{
       try {
         const studentList = await Student.find({});
         res.send({
             data: studentList
         })
       }catch(e) {
         res.send({
             error: e.message
         })
       }
}

export const takeAttendance = async (req, res, next)=>{
       let data="";
       try {
         if(typeof req.body['presence'] == "object"){
            data = await Attendance.insertMany(req.body['presence']);
         }else{
            data = new Attendance({
                presence: true,
                students_id: req.body['presence']
            });
            data = await data.save();
         }
         res.send({ data});
       }catch(e) {
         res.send({
             error: e.message
         })
       }
}
