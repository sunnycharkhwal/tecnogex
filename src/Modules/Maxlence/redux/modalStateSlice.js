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
<<<<<<< Updated upstream
=======

    user: {},
    token: "",
    userEmail: "",
>>>>>>> Stashed changes
  },
  reducers: {
    setShowLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    setShowLoginModalTrue: (state, action) => {
      state.showLoginModal = action.payload;
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
<<<<<<< Updated upstream
=======
    setNewPasswordModalTrue: (state, action) => {
      state.showNewPasswordModal = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {};
    },
>>>>>>> Stashed changes
  },
});

export const {
  setShowLoginModal,
  setShowLoginModalTrue,
  setShowSignUpModal,
  setShowMenuModal,
  setShowForgotModal,
  setShowCheckYourEmailModal,
  setShowPasswordResetModal,
  setNewPasswordModal,
<<<<<<< Updated upstream
=======
  setNewPasswordModalTrue,
  setToken,
  setUserEmail,
  setUser,
  resetUser,
>>>>>>> Stashed changes
} = modalStateSlice.actions;
export default modalStateSlice.reducer;
