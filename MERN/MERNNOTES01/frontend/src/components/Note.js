import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  const deleteNote = async (id) => {
    console.log(id);
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const result = response.json();
    console.log(result);
  };

  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => {
            deleteNote(props.id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
