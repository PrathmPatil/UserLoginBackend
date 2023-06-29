import { number } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const signInData = new Schema(
  {
    firstName: {
      type: String
    },
    lastName:{
      type:String
    },
    email:{
      type:String
    },
    password:{
      type:String
    },
  },
  {
    timestamps: true
  }
);

export default model('User', signInData);
