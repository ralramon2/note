import { uiSelector, writingNoteSelector } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeState } from "../store/uiSlice";
import {
  clearWritingNote,
  saveCreatingNote,
  saveEditingNote,
} from "../store/writingNoteSlice";
import { v4 as uuid } from "uuid";

function Header() {
  const dispatch = useAppDispatch();
  const ui = useAppSelector(uiSelector);
  const writingNote = useAppSelector(writingNoteSelector);

  const handleCreateNoteButton = () => {
    dispatch(changeState("create"));
  };

  const handleCreateSubmitButton = () => {
    dispatch(
      saveCreatingNote({ id: uuid(), createdAt: new Date().toString() })
    );
    dispatch(changeState("read"));
    dispatch(clearWritingNote());
  };

  const handleEditSubmitButton = () => {
    dispatch(saveEditingNote(writingNote.note));
    dispatch(changeState("read"));
    dispatch(clearWritingNote());
  };

  return (
    <div className="header">
      {ui.state === "read" ? (
        <p>{ui.category}</p>
      ) : ui.state === "edit" ? (
        <p>노트 수정</p>
      ) : (
        <p>새로운 노트 작성</p>
      )}

      {ui.state === "read" ? (
        <button
          onClick={handleCreateNoteButton}
          className="createButton"
        ></button>
      ) : ui.state === "edit" ? (
        <button onClick={handleEditSubmitButton} className="submitButton">
          수정 완료
        </button>
      ) : (
        <button onClick={handleCreateSubmitButton} className="submitButton">
          생성하기
        </button>
      )}
    </div>
  );
}

export default Header;
