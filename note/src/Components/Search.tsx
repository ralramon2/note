import React, { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={searchInput}
      onChange={handleSearchInputChange}
      placeholder="노트의 제목을 입력해주세요."
    />
  );
}

export default Search;
