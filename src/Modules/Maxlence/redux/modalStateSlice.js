import { createSlice } from "@reduxjs/toolkit";

const modalStateSlice = createSlice({
  name: "modal",
  initialState: {
    showLoginModal: false,
    showSignUpModal: false,
    showMenuModal: false,
    showForgotModal: false,
    showCheckYourEmailModal: false,
    showPasswordResetModal: false,
    showNewPasswordModal: false,
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
    setShowForgotModal: (state) => {
      state.showForgotModal = !state.showForgotModal;
    },
    setShowCheckYourEmailModal: (state) => {
      state.showCheckYourEmailModal = !state.showCheckYourEmailModal;
    },
    setShowPasswordResetModal: (state) => {
      state.showPasswordResetModal = !state.showPasswordResetModal;
    },
    setNewPasswordModal: (state) => {
      state.showNewPasswordModal = !state.showNewPasswordModal;
    },
  },
});

export const {
  setShowLoginModal,
  setShowSignUpModal,
  setShowMenuModal,
  setShowForgotModal,
  setShowCheckYourEmailModal,
  setShowPasswordResetModal,
  setNewPasswordModal,
} = modalStateSlice.actions;
export default modalStateSlice.reducer;
