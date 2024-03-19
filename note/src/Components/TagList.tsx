import React from "react";
import TagItem from "./TagItem";

interface Props {
  tagList: string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function TagList({ tagList, onClick }: Props): React.ReactElement {
  return (
    <>
      {tagList.map((tag, index) => (
        <TagItem key={index} tag={tag} onClick={onClick} />
      ))}
    </>
  );
}

export default TagList;
