import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./Createarea";
import Note from "./Note";


function App(){
   const [item,addItem]= useState([]);
   function onAdd(entry){
      addItem(preValue => {return ([...preValue,entry])});
   }
   function del(id){
      addItem(preValue =>{ return preValue.filter((noteItem,index) =>{ return index!==id })});
   }
   return (
          <div>
          <Header /> 
          <CreateArea add={onAdd}/>
          {item.map((noteItem,index) => { 
             return <Note key= {index} id= {index} title= {noteItem.title} content = {noteItem.content} click={del}/>;})}
          <Footer />
          </div>);
}
export default App;