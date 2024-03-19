import { useAppDispatch, useAppSelector } from "../hooks";
import { tagListSelector, writingNoteSelector } from "../store";
import TagList from "./TagList";
import { setContents, setTitle } from "../store/writingNoteSlice";
import Note from "../models/Note";

interface Props {
  currentNoteId?: string;
}

function NoteForm({ currentNoteId }: Props) {
  const dispatch = useAppDispatch();
  const tagList = useAppSelector(tagListSelector);

  const note = useAppSelector(writingNoteSelector).note;

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setContents(e.target.value));
  };

  return (
    <div className="note-form-container">
      <div className="title-container">
        <input
          type="text"
          placeholder="제목 입력"
          value={note.title}
          onChange={handleTitleInput}
        />
      </div>
      <div className="tag-container">
        {/* <p>선택된 태그들</p> */}
        <button className="tag-select-button">태그 선택하기</button>
      </div>
      <textarea
        name="note"
        id=""
        cols={30}
        rows={20}
        placeholder="내용 입력"
        value={note.contents}
        onChange={handleContentInput}
      ></textarea>
    </div>
  );
}

export default NoteForm;
