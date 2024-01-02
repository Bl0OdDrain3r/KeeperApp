import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Expand } from "@mui/icons-material";
function CreateArea(props) {
    const [entry, setEntry] = useState({title:"",content:""});
    const [state,setState] = useState(false);
    function handleChange(event){
        const {name,value} = event.target;
        setEntry(preValue=> {return{...preValue, [name]: value};});
        
    } 
   function Expand(){
    setState(true);
   }
    function handleClick(event){
          props.add(entry);
          event.preventDefault();
          setEntry({title:"",content:""});
          setState(false);
      }
  
  return (
    <div>
      <form className="create-note">
        {state?<input onChange={handleChange} name="title" placeholder="Title" value={entry.title} />:null}
        <textarea onChange={handleChange} onClick={Expand} name="content" placeholder="Take a note..." rows={state?"3":"1"} value={entry.content} />
       <Zoom in={state}>
        <Fab onClick={handleClick}>
         <AddIcon />
         </Fab>
       </Zoom>
      </form>
     </div>
  );
}

export default CreateArea ;
