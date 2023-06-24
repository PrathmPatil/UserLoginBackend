import User from '../models/user.model';

//get all users
// export const loginUser = async (body) => {
  
//     const data = await User.findOne({email:body.email});
//    if(data){
//         if(data.password==body.password ){
//           return data;
//         }else if(body.password==''){
//           throw new Error("enter password")
//         }else{
//           throw new Error("invalid password")
//         }
//    }else{
//       throw new Error("invalid email")
//    }
// };

//create new user
// export const registrationUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

//read data
// export const readAllData=async(body)=>{
//   const data=await User.find();
//   return data;
// }

// //update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
