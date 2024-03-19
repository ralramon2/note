import React from "react";
import noteIcon from "./../assets/bulb-icon.png";
import archiveIcon from "./../assets/archive-icon.png";
import trashIcon from "./../assets/trash-icon.png";
import TagList from "./TagList";
import { useAppSelector } from "../hooks";
import { tagListSelector, uiSelector } from "../store";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Category({ onClick }: Props) {
  const tagList = useAppSelector(tagListSelector);
  const ui = useAppSelector(uiSelector);

  return (
    <div className="navigator">
      <div className="nav-title">Keep</div>
      <div className="nav-items">
        <div
          className={`nav-item selected ${
            ui.state === "read" ? "selectable" : ""
          }`}
          onClick={onClick}
        >
          <img src={noteIcon} alt="Notes" />
          Notes
        </div>
        {tagList.length > 0 && <TagList tagList={tagList} onClick={onClick} />}
        <div
          className={`nav-item ${ui.state === "read" ? "selectable" : ""}`}
          onClick={onClick}
        >
          <img src={archiveIcon} alt="Archive" />
          Archive
        </div>
        <div
          className={`nav-item ${ui.state === "read" ? "selectable" : ""}`}
          onClick={onClick}
        >
          <img src={trashIcon} alt="Trash" />
          Trash
        </div>
      </div>
    </div>
  );
}

export default Category;
