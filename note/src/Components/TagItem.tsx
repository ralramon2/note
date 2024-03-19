import React from "react";
import tagIcon from "./../assets/tag-icon.png";
import { useAppSelector } from "../hooks";
import { uiSelector } from "../store";

interface Props {
  tag: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function TagItem({ tag, onClick }: Props) {
  const ui = useAppSelector(uiSelector);

  return (
    <div
      className={`nav-item ${ui.state === "read" ? "selectable" : ""}`}
      onClick={onClick}
    >
      <img src={tagIcon} alt="Tag" />
      {tag}
    </div>
  );
}

export default TagItem;
