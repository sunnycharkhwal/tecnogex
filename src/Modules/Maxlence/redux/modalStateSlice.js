import { createSlice } from "@reduxjs/toolkit";

const modalStateSlice = createSlice({
  name: "modal",
  initialState: {
    showLoginModal: false,
    showSignUpModal: false,
    showMenuModal: false,
    user: {},
  },
  reducers: {
    setShowLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    setShowSignUpModal: (state) => {
      state.showSignUpModal = !state.showSignUpModal;
    },
    setShowMenuModal: (state) => {
      state.showMenuModal = !state.showMenuModal;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
});

export const {
  setShowLoginModal,
  setShowSignUpModal,
  setShowMenuModal,
  setUser,
  resetUser,
} = modalStateSlice.actions;
export default modalStateSlice.reducer;
