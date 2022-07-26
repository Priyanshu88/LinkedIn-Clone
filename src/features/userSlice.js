import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice ({
  name: "user",
  initialState: {
    value: null,
  },

  reducers: {
    login : (state, action) => {
      state.user = action.payload;
    },



    logout: (state) => {
      state.user = null;
    },
  },
});





export const {login, logout} = userSlice.actions;





// selectors allows to pull the information

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;








