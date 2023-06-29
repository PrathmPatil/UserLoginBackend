import Note from '../models/note.model';


//get  note by title
export const getNote = async (id) => {
  
    const data = await Note.findById(id);
   if(data){
          return data;
        }else{
          throw new Error("invalid id")
        }
};

//get all notes
export const getAllNote=async()=>{
  const data=await Note.find();
  if(data){
    return data;
  }else{
    throw new Error("No Notes Here")
  }
}

//create new note
export const newNote = async (body) => {
  const data = await Note.create(body);
  return data;
};

//update note
export const updateNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
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
export const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id)
  return '';
};

