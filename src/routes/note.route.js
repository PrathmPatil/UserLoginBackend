import express from 'express';
import * as noteController from '../controllers/note.controller';
import { createNote } from '../validators/note.validator';

const router = express.Router();

router.get('',noteController.getAllNote)
//route to get note by title
router.get('/:_id', noteController.getNote);

//route to create a new note
router.post('',createNote, noteController.newNote);
//addnote

//route to delete note by title
router.delete('/:_id', noteController.deleteNote);

//route to update note by id
router.put('/:_id', noteController.updateNote);


export default router;
