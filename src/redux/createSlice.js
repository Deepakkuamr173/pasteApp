// import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast';


// const initialState = {
//   pastes: localStorage.getItem("pastes") 
//     ? JSON.parse(localStorage.getItem("pastes")) 
//     : []
// };


// export const pastesSlice = createSlice({
//   name: 'paste',
//   initialState,
//   reducers: {
//     addtoPastes: (state, action) => {
//       const paste = action.payload;
//       state.pastes.push(paste);

//       // ✅ Update localStorage
//       localStorage.setItem("pastes", JSON.stringify(state.pastes));

//       // ✅ Show success message
//       toast.success("Paste created successfully!");
//     },

//     updatetopastes: (state,action) => {
//       // state.value -= 1
//     },
//     // : PayloadAction<number>
//     resetallpastes: (state, action) => {
//     },   
//     removefrompastes: (state, action) => {

//     }, 

//   },
// })

// // Action creators are generated for each case reducer function
// export const { addtoPastes, updatetopastes, resetallpastes,removefrompastes } = pastesSlice.actions

// export default pastesSlice.reducer





import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes") 
    ? JSON.parse(localStorage.getItem("pastes")) 
    : []
};

export const pastesSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtoPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);

      // ✅ Update localStorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      // ✅ Show success message
      toast.success("Paste created successfully!");
    },

    updatetopastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(paste => paste._id === updatedPaste._id);

      if (index !== -1) {
        state.pastes[index] = updatedPaste;

        //  Update localStorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste updated successfully!");
      } else {
        toast.error("Paste not found!");
      }
    },

    // removefrompastes: (state, action) => {
    //   const pasteId = action.payload;
    //   state.pastes = state.pastes.filter(paste => paste._id !== pasteId);

    //   localStorage.setItem("pastes", JSON.stringify(state.pastes));

    //   toast.success("Paste deleted successfully!");

    removefrompastes: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter(paste => paste._id !== pasteId);
      // Update local storage
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast.success("Paste deleted successfully!");
    },

    

    resetallpastes: (state) => {
      state.pastes = []; //  Clear all pastes

      //  Clear localStorage
      localStorage.removeItem("pastes");

      toast.success("All pastes cleared!");
    }
  },
});

//  Export actions
export const { addtoPastes, updatetopastes, resetallpastes, removefrompastes } = pastesSlice.actions;

//  Export reducer
export default pastesSlice.reducer;
