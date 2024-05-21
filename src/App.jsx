import "./App.css";
import { NotesList } from "./components/NotesList/NotesList";
import { useNotes } from "./hooks";
function App() {
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
