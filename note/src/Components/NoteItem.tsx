import { useAppDispatch } from "../hooks";
import Note from "../models/Note";
import { changeState, selectNote } from "../store/uiSlice";
import { setNote } from "../store/writingNoteSlice";

function NoteItem({ note }: { note: Note }) {
  const dispatch = useAppDispatch();

  const formatter = new Intl.DateTimeFormat("en", {
    dateStyle: "short",
    timeStyle: "short",
  });

  // 포맷에 맞게 변환한 날짜 및 시간을 문자열로 출력
  const formattedDate = formatter.format(Date.parse(note.createdAt));

  const handleNoteClick = () => {
    dispatch(changeState("edit"));
    dispatch(selectNote(note.id));
    dispatch(setNote(note));
  };

  return (
    <div className="note-item" onClick={handleNoteClick}>
      <div className="note-item-header">
        <p className="note-item-title">{note.title}</p>
        <div className={`note-item-priority ${note.priority}`}></div>
        {note.isPinned ? (
          <button className="note-item-pin-button pinned">pinned</button>
        ) : (
          <button className="note-item-pin-button"></button>
        )}
      </div>
      <div className="note-item-contents">
        <p>{note.contents}</p>
      </div>
      <div className="note-item-tag-container">
        <p>exercise</p>
      </div>
      <div className="note-item-footer">
        <span className="note-item-createdAt">{formattedDate}</span>
        <button className="note-edit-button"></button>
        <button className="note-archive-button"></button>
        <button className="note-remove-button"></button>
      </div>
    </div>
  );
}

export default NoteItem;
