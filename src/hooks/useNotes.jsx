//Hook made with no use of AI, inspired in previous frontend projects...
import { useEffect, useState } from "react";
import notesService from "../services/notes/notesService";
export const useNotes = () => {
  //Notes array and loader
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  //Handle the setter of the notes array
  const handleNewNotesValue = (newValue) => {
    setNotes(newValue);
  };
  //Within the execution of the custom hook... Obtain the notes
  useEffect(() => {
    const getAllNotesHandler = async () => {
      notesService
        .getAllNotes()
        .then((data) => handleNewNotesValue(data.notes))
        .catch((error) => console.error("Error obtaining the notes:", error))
        .finally(() => {
          setLoading(false);
        });
    };
    getAllNotesHandler();
  }, []);
  //Handle the newNote entry then again get the array with the new notes
  const handleNewNoteEntry = async (noteValues) => {
    setLoading(true);
    try {
      await notesService.addNewNoteEntry(noteValues);
      const data = await notesService.getAllNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("❌Error:", error);
    } finally {
      setLoading(false);
    }
  };
  //Handle the update of the given noteEntry then again get the new array of updated notes
  const handleUpdateNoteEntry = async (id, noteValues) => {
    setLoading(true);
    try {
      await notesService.updateNoteEntry(id, noteValues);
      const data = await notesService.getAllNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("❌Error:", error);
    } finally {
      setLoading(false);
    }
  };
  //Handle the delte of the given noteEntry then again get the new array of actual notes
  const handleDeleteNoteEntry = async (id) => {
    setLoading(true);
    try {
      await notesService.deleteNoteEntry(id);
      const data = await notesService.getAllNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("❌Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    notes,
    handleNewNotesValue,
    loading,
    handleNewNoteEntry,
    handleDeleteNoteEntry,
    handleUpdateNoteEntry,
  };
};
