import React, { useState } from "react";

function NewNote() {
  const [noteTxt, setNoteTxt] = useState("");
  const [charLimit, setCharLimit] = useState(200);

  const noteTxtChangeHandler = (e) => {
    setCharLimit(charLimit - 1);
    setNoteTxt(e.target.value);
  };

  const addNoteHandler = async (req, res) => {
    try {
      const response = await fetch("http://localhost/5000/addnew", {
        method: "POST",
        body: JSON.stringify(noteTxt),
        headers: {
          "Content-Type": "application/JSON",
        },
      });
      if (response.ok) {
        setNoteTxt("");
        res.end();
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
        value={noteTxt}
        onChange={noteTxtChangeHandler}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save" onClick={addNoteHandler}>
          save
        </button>
      </div>
    </div>
  );
}

export default NewNote;
