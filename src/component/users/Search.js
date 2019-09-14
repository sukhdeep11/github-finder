import React, { useState } from "react";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      this.props.setAlert("Please Enter Something...", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit.bind(this)}>
        <input
          name='text'
          type='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
