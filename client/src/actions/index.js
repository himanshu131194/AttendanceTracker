//import {AUTH_USERS, AUTH_ERROR, CREATE_USERS, CREATE_RESUME, LOGOUT_USERS} from './types'
import {ADD_STUDENT, LIST_STUDENT, TAKE_ATTENDANCE} from './types';
import axios from 'axios'

export const addStudent = ({name, email, phone, branch}, callback)=>{
       return async (dispatch)=>{
             try {
                const request = await axios.post('http://localhost:4000/api/add-student',{
                      name, email, phone, branch
                })
                dispatch({
                      type: ADD_STUDENT,
                      payload: request.data
                });
                callback();
             }catch(error) {
                dispatch({
                    type: ADD_STUDENT,
                    payload: error
                })
             }
       }
}


export const listStudent = (callback)=>{
       return async (dispatch)=>{
             try {
                const request = await axios.get('http://localhost:4000/api/list-students');
                console.log(request);
                dispatch({
                      type: LIST_STUDENT,
                      payload: request.data.data
                });
                callback();
             }catch(error) {
                dispatch({
                    type: LIST_STUDENT,
                    payload: error
                })
             }
       }
}

export const takeAttendance = (ids, callback)=>{
       const presenceList = [];
       if(typeof ids == "object")
          ids.map((id)=> presenceList.push({students_id: id, presence: true}));
       else
          presenceList.push({students_id: ids, presence: true});
       return async (dispatch)=>{
             try {
                const request = await axios.post('http://localhost:4000/api/take-attendance', {
                     presence: presenceList
                });
                dispatch({
                      type: TAKE_ATTENDANCE,
                      payload: request.data.data
                });
                callback();
             }catch(error) {
                dispatch({
                    type: TAKE_ATTENDANCE,
                    payload: error
                })
             }
       }
}

// export const signin = ({email, password}, callback)=>{
//     return async (dispatch)=>{
//        try{
//          const request = await axios.post('http://localhost:3000/api/signin', {
//                email: email,
//                password: password
//          });
//          dispatch({
//              type: AUTH_USERS,
//              payload: request.data.data
//          })
//          callback();
//        }catch(error){
//          dispatch({
//              type: AUTH_ERROR,
//              payload: error
//          })
//        }
//     }
// }
//
// export const signup = ({email, password}, callback)=>{
//     return async (dispatch)=>{
//         try{
//           const request = await axios.post('http://localhost:3000/api/users', {
//                 email: email,
//                 password: password
//           });
//           dispatch({
//               type: CREATE_USERS,
//               payload: request.data.data
//           })
//           callback();
//           console.log(request);
//         }catch(error) {
//
//         }
//     }
// }
//
// export const verifyOTP = (email, otp, callback)=>{
//     return async (dispatch)=>{
//        try {
//          const request = await axios.post('http://localhost:3000/api/verify-otp', {email, otp});
//          dispatch({
//              type: AUTH_USERS,
//              payload: request.data.data
//          })
//          callback();
//        }catch(error){
//          dispatch({
//              type: AUTH_ERROR,
//              payload: error
//          })
//        }
//     }
// }
//
// export const logoutUser = ()=>{
//    return (dispatch)=>{
//        dispatch({
//          type: LOGOUT_USERS,
//          payload: false
//        });
//    }
// }
//
//
// export const createResume = (userData, callback)=>{
//       return async (dispatch)=>{
//           try{
//             const request = await axios.post('http://localhost:3000/api/create-resume');
//             dispatch({
//                 type: CREATE_RESUME,
//                 payload: request.data
//             })
//             callback();
//           }catch(error){
//             dispatch({
//                 type: CREATE_RESUME,
//                 payload: error
//             })
//           }
//       }
// }


// export function authUsers(){
//    const url = `https://jsonplaceholder.typicode.com/comments`;
//    const response = axios.get(url);
//    return{
//       type: AUTH_USERS,
//       payload: response
//    }
// }
