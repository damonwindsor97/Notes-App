import './note.css';
import { FaRegSave } from "react-icons/fa";

function CreateNote({inputText, setInputText, handleSave}) {

  const char = 255;
  const charLimit = char - inputText.length;

  return (
    <div className="note">
        <textarea
        cols={10}
        rows={6}
        placeholder="Type Note..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={255}>

        </textarea>
        <div className="note_footer">
            <span className="label">{charLimit} Left</span>
            <FaRegSave size="1.5em" className="note_save" onClick={handleSave}>Save</FaRegSave>
        </div>
    </div>
  )
}

export default CreateNote