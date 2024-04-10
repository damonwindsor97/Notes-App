import './note.css'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Note({id, text, date, handleEdit, handleDelete}) {
  return (

        <div className="note">
            <div className="note-body">
                {text}
            </div>

            <div className="note_footer" >
                <span className="label" style={{fontSize: '12px'}}>{date}</span>
                <div>
                    <MdDeleteForever size="1.5em" className="note_delete" onClick={() => handleDelete(id)}>Delete</MdDeleteForever >
                    {/* Create arrow function so it doesnt contantly call */}
                    <FaEdit size="1.5em" className="note_edit" onClick={() => handleEdit(id, text)}>Edit</FaEdit>
                </div>
            </div>
        </div>

    
  )
}

export default Note