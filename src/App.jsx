import "./App.css";
import { NotesList } from "./components/NotesList/NotesList";
import { useNotes } from "./hooks";
function App() {
  /*We declare the custom hook which has the essential handlers to use.
  Then we return the NotesList as I made it the parent component to use.
  ( I need feedback if this is a good structure)
  Finally we pass the given date within props to the internal NotesList components.
  */

  const {
    notes,
    loading,
    handleNewNoteEntry,
    handleDeleteNoteEntry,
    handleUpdateNoteEntry,
  } = useNotes();

  return (
    <>
      <NotesList
        notes={notes}
        loading={loading}
        handleNewNoteEntry={handleNewNoteEntry}
        handleDeleteEntry={handleDeleteNoteEntry}
        handleUpdateNoteEntry={handleUpdateNoteEntry}
      />
    </>
  );
}

export default App;
