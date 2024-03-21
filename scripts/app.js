const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000/api/v1/notes';

// List all notes
async function listNotes() {
  try {
    const response = await axios.get(API_BASE_URL);
    console.log('All Notes:', response.data);
  } catch (error) {
    console.error('Error listing notes:', error);
  }
}

// Create a new note
async function createNote() {
  const newNote = {
    title: 'New Note',
    content: 'This is the content of a new note.',
  };

  try {
    const response = await axios.post(API_BASE_URL, newNote);
    console.log('New Note Created:', response.data);
  } catch (error) {
    console.error('Error creating note:', error);
  }
}

// Update an existing note
async function updateNote(noteId) {
  const updatedNote = {
    title: 'Updated Note',
    content: 'This is the updated content of the note.',
  };

  try {
    const response = await axios.put(`${API_BASE_URL}/${noteId}`, updatedNote);
    console.log('Note Updated:', response.data);
  } catch (error) {
    console.error('Error updating note:', error);
  }
}

listNotes();
createNote();
updateNote(1);
