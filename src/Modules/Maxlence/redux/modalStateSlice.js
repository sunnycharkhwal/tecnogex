import { createSlice } from "@reduxjs/toolkit";

const modalStateSlice = createSlice({
  name: "modal",
  initialState: {
    showLoginModal : false,
    showSignUpModal : false,
    showMenuModal : false,
  },
  reducers: {
    setShowLoginModal : (state)=> {
        state.showLoginModal = !state.showLoginModal;
    },
    setShowSignUpModal : (state)=> {
        state.showSignUpModal = !state.showSignUpModal
    },
    setShowMenuModal : (state)=> {
        state.showMenuModal = !state.showMenuModal
    },
  },
});

export const { setShowLoginModal, setShowSignUpModal, setShowMenuModal } = modalStateSlice.actions;
export default modalStateSlice.reducer;