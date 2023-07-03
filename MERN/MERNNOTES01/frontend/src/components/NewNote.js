import React, { useState } from "react";

function NewNote() {
  const [text, setText] = useState("");

  const noteTxtChangeHandler = (e) => {
    setText(e.target.value);
  };

  const addNoteHandler = async (req, res) => {
    try {
      const Text = { text };
      console.log(Text);
      const response = await fetch("http://localhost:5000/newnote", {
        method: "POST",
        body: JSON.stringify(Text),
        headers: {
          "Content-Type": "application/JSON",
        },
      });
      if (response.ok) {
        setText("");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note......"
        value={text}
        onChange={noteTxtChangeHandler}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <form onSubmit={addNoteHandler}>
          <button className="save" type="submit">
            save
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewNote;
