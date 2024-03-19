import "./App.css";
import Main from "./Components/Main";
import Category from "./Components/Category";
import Header from "./Components/Header";
import { useAppDispatch, useAppSelector } from "./hooks";
import { changeState, selectCategory } from "./store/uiSlice";
import { setNoteList } from "./store/noteSlice";
import storage from "./utils/storage";
import Note from "./models/Note";
import { uiSelector } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const ui = useAppSelector(uiSelector);

  useEffect(() => {
    // localStorage에 저장되어 있는 noteList를 가져온다.
    const noteList = storage.get<Note[]>("noteList") || [];
    dispatch(setNoteList(noteList));
  }, [ui.state]);

  // localStorage에 저장되어 있는 noteList를 가져온다.
  const noteList = storage.get<Note[]>("noteList") || [];

  const onCategoryClick = (e: React.MouseEvent) => {
    if (ui.state === "create" || ui.state === "edit") {
      dispatch(changeState("read"));
    }

    const eventTarget = e.target as HTMLElement;

    // 선택한 카테고리 저장
    dispatch(selectCategory(eventTarget.innerText));

    // 선택한 카테고리의 목록 가져오기
    if (eventTarget.innerText === "Notes") {
      dispatch(setNoteList(noteList));
    } else {
      dispatch(
        setNoteList(
          noteList.filter((note) => note.tag.includes(eventTarget.innerText))
        )
      );
    }

    setTimeout(() => {
      // 선택한 카테고리에만 selected 클래스 추가
      eventTarget.parentNode?.childNodes.forEach((node) => {
        const nodeEl = node as HTMLElement;
        if (nodeEl.innerText === eventTarget.innerText) {
          nodeEl.classList.add("selected");
        } else {
          nodeEl.classList.remove("selected");
        }
      });
    }, 10);
  };

  return (
    <div className="app-container">
      <Category onClick={onCategoryClick} />
      <div className="main-section">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
