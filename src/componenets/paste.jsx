

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removefrompastes } from '../redux/createSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const [pastes, setPastes] = useState([]);
  const [searchterm, setsearchterm] = useState('');
  const dispatch = useDispatch(); // Initialize dispatch


  useEffect(() => {
    const storedPastes = JSON.parse(localStorage.getItem('pastes')) || [];
    setPastes(storedPastes);
  }, []);

  const filterdata = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchterm.toLowerCase())
  );



  function handleDelete(pasteId) {
    dispatch(removefrompastes(pasteId)); 

  }



  return (
    <div>
      <input
        type="search"
        placeholder="Search here..."
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
      />

      <div className="filterdata">
        {filterdata.length > 0 &&
          filterdata.map((paste) => {
            return (
              <div key={paste.id}>
                <div>
                  <h3><h2>Title :</h2>{paste.title}</h3>
                </div>
                <div>
                  <p><h2>Content : </h2>{paste.content}</p>
                </div>

                <div className='allbutton'>
                  <button>
                    Edit
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                      Delete
                  </button>
                  <button onClick={()=>{
                     navigator.clipboard.writeText(paste?.content)
                     toast.success("copied to clipboard")
                  }}>
                    Copy
                  </button>
                  <button>
                    Share
                  </button>
                  <div>
                  {new Date(paste.createdAt).toLocaleString()}
                  </div>
                
                </div>

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;

