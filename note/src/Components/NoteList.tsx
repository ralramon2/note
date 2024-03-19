import NoteItem from "./NoteItem";
import Note from "../models/Note";

function NoteList({ noteList }: { noteList: Note[] }) {
  return (
    <div className="note-item-container">
      {noteList.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
