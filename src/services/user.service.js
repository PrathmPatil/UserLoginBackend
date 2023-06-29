import User from '../models/user.model';
import bcrypt from 'bcrypt';


//get all users
export const loginUser = async (body) => {
  
    const data = await User.findOne({email:body.email});
   if(data){
        if(bcrypt.compareSync(body.password,data.password)){
          return data;
        }else{
          throw new Error("invalid password")
        }
   }else{
      throw new Error("invalid email")
   }
};

//create new user
export const registrationUser = async (body) => {
  //check email is allready used or not.
 if(await User.findOne({email:body.email})){
  throw new Error("Email Already used in")
 }
 else{
  const saltRounds=10;
  const hashedPasswordByAwit= await bcrypt.hash(body.password,saltRounds)
  // const hashedPassword=bcrypt.hashSync(body.password,saltRounds)
  body.password=hashedPasswordByAwit;
  const data = await User.create(body);
  return data;
 }
};

