import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';

// /**
//  * Controller to get all users available
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
//For User Login

export const getNote = async (req, res, next) => {
  try {
    const data = await noteService.getNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'Note Data Here.'
    });
  } catch (error) {
      next(error);
  }
};

//get all note
export const getAllNote=async(req,res,next)=>{
  try{
   const data=await noteService.getAllNote();
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:data,
      message:"All Notesfetched successfully."
    })
  }catch(error){
    next(error)
  }
}
// /**
//  * Controller to create a new user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const newNote = async (req, res, next) => {
  try {
    const data = await noteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to delete a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteNote = async (req, res, next) => {
  try {
    await noteService.deleteNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Note deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to update a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const updateNote = async (req, res, next) => {
  try {
    const data = await noteService.updateNote(req.params._id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
          code: HttpStatus.ACCEPTED,
          data: data,
          message: 'Note updated successfully'
        });
  } catch (error) {
    next(error);
  }
};
