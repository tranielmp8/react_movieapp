import React from "react";

function SearchBox(props) {
  return (
    <div className="col col-sm-4 mt-2">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search here"
      />
    </div>
  );
}

export default SearchBox;
