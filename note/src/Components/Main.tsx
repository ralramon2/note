import { uiSelector, notesSelector } from "../store";
import { useAppSelector } from "../hooks";
import Search from "./Search";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

function Main() {
  const ui = useAppSelector(uiSelector);
  const noteList = useAppSelector(notesSelector);

  return (
    <div className="main">
      {ui.category === "Notes" && ui.state === "read" && <Search />}
      {ui.state === "read" && <NoteList noteList={noteList.noteList} />}
      {ui.state === "create" && <NoteForm />}
      {ui.state === "edit" && <NoteForm currentNoteId={ui.noteId} />}
    </div>
  );
}

export default Main;
