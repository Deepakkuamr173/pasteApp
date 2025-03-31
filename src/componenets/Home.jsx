import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { addtoPastes } from '../redux/createSlice'; // ✅ Adjust path if needed
// import { useDispatch } from 'react-redux';



const Home = () => {
  const [title, setTitle] = useState("");
  const [value,setvalue]=useState("");
  const [sreachparams,setsreachparams]=useSearchParams();
  const pasted= sreachparams.get("pasted");

  const dispatch=useDispatch();


  function createPaste() {
    const paste = {
      title: title,
      // content: content,
      content: value,  // ✅ FIXED: Now using the correct state variable

      _id: pasted || Date.now().toString(36), // ✅ Generates unique ID if not provided
      createdAt: new Date().toISOString(), // ✅ Fixes incorrect syntax
    };
    // //after creation and  updation clean the value

    if (pasted) {
      dispatch(updatetopastes(paste)); // ✅ Update if paste exists
    } else {
      dispatch(addtoPastes(paste)); // ✅ Create new paste
    }
  
    // ✅ Clear input fields after creation/update
    setTitle("");
    setvalue("");
    setsreachparams({});
  }


  return (
    <div>
      <h1>🏡 Home Page</h1>
      <input
        type="text"
        placeholder="Enter to search..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPaste}>
        {
          pasted ? "Update My Past": "Create my Paste"
        }
      </button>
      <div>
        <textarea
         placeholder="Enter contenent here"
         value={value}
         onChange={(e)=>setvalue(e.target.value)}
         rows={20}
        
        />
        
      </div>


    </div>
  );
};

export default Home;

//another program
