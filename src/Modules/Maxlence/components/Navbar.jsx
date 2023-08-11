import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { OutlineBtn, BlueBtn } from "../components/Btn";
import HeaderLogo from "../../../img/HeaderLogo.svg";
import Modal from "react-bootstrap/Modal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TextAreaBox } from "../components/form";
import Swal from "sweetalert2";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import ENDPOINT from "../config/ENDPOINT";
import AccountMenu from "./AccountMenu";
import { handleExpiredUser } from "../HelperFunction/Helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowLoginModal,
  setUser,
  resetUser,
} from "../redux/modalStateSlice";
import { setShowSignUpModal } from "../redux/modalStateSlice";
import { setShowMenuModal } from "../redux/modalStateSlice";
import { setShowForgotModal } from "../redux/modalStateSlice";
import { setShowCheckYourEmailModal } from "../redux/modalStateSlice";
import { setShowPasswordResetModal } from "../redux/modalStateSlice";
import { setNewPasswordModal } from "../redux/modalStateSlice";
import { useNavigate } from "react-router-dom";
import { TopNav } from "./TopNav";
import C from "../../../img/c.mp4";
import Ec from "../../../img/ec.gif";
import LogoVido from "../../../img/logo.gif";
import SMM from "../../../img/smm.gif";
import { BsArrowRight } from "react-icons/bs";

//
export const Header = () => {
  const showLoginModal = useSelector((state) => state.state.showLoginModal);
  const showSignUpModal = useSelector((state) => state.state.showSignUpModal);
  const showMenuModal = useSelector((state) => state.state.showMenuModal);
  const showForgotModal = useSelector((state) => state.state.showForgotModal);
  const showCheckYourEmailModal = useSelector(
    (state) => state.state.showCheckYourEmailModal
  );
  const showPasswordResetModal = useSelector(
    (state) => state.state.showPasswordResetModal
  );
  const showNewPasswordModal = useSelector(
    (state) => state.state.showNewPasswordModal
  );

  const user = useSelector((state) => state.state.user);
  const dispatch = useDispatch();

  ////////////////////// Sign Up Modal //////////////////////////////
  let token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token) {
      try {
        axios
          .get(ENDPOINT + "local", {
            headers: {
              "x-access-token": token,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              dispatch(setUser(res.data));
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
            } else if (err.response.status === 405) {
              handleExpiredUser();
              dispatch(resetUser());
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);

  const SignUpmodal = () => {
    const [values, setValues] = useState({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // const templateParams = {
    //   to_name: values.fullname,
    //   from_name: "Maxlence team",
    //   to_email: values.email,
    //   message : "Thanks for registering on our website"
    // };

    // const sendMail = () => {
    //   emailjs
    //     .send(
    //       "service_7j5gb3l",
    //       "template_e1lw4xh",
    //       templateParams,
    //       "N75Wr8f2e4xB17KGn"
    //     )
    //     .then(
    //       (response) => {
    //         console.log("SUCCESS!", response.status, response.text);
    //       },
    //       (err) => {
    //         console.log("FAILED...", err);
    //       }
    //     );
    // };

    const handleCreate = (e) => {
      e.preventDefault();
      try {
        axios
          .post(ENDPOINT + "user/signup", values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "User created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              // sendMail()
              dispatch(setShowLoginModal());
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password doesn't match or Email already exists!",
              });
            } else if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No User created",
              });
            }
          });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server error!",
        });
        console.log("Create error", err);
      }
    };

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({
        ...values,
        [name]: value,
      });
    };

    let user = localStorage.getItem("token");

    return (
      <>
        {/* <AccountMenu /> */}

        {token ? (
          <AccountMenu />
        ) : (
          <div className="nav_login_btn_mobile">
            <OutlineBtn
              title="Log In"
              icon=""
              // onClick={() => setShowLoginModal(true)}
              onClick={() => dispatch(setShowLoginModal())}
            />
          </div>
        )}

        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showSignUpModal}
          onHide={() => dispatch(setShowSignUpModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowSignUpModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Sign Up</h1>
                        </div>
                        <div className="col-md-6">
                          <form onSubmit={handleCreate} method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="text"
                                  label="Full Name"
                                  name="fullname"
                                  value={values.fullname}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Confirm Password"
                                  name="confirmPassword"
                                  value={values.confirmPassword}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-4 mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Submit" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            Already have an account ? &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setShowSignUpModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Login
                            </span>
                          </p>
                          <p>
                            <span>*</span> By clicking "Sign In", you agree to
                            Maxlence Consulting’s Terms of Service and Privacy
                            Policy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Login Modal //////////////////////////////

  const LoginModal = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    const handleCreate = (e) => {
      e.preventDefault();
      try {
        axios
          .post(ENDPOINT + "user/login", values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              dispatch(setShowLoginModal());
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong Password!",
              });
            } else if (err.response.status === 404) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No User found",
              });
            }
          });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server error!",
        });
        console.log("Create error", err);
      }
    };

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleCredentialResponse = async (response) => {
      const token = response.credential;

      var urlencoded = new URLSearchParams();
      urlencoded.append("token", token);

      let headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      try {
        axios({
          url: ENDPOINT + "auth/google/login",
          method: "POST",
          headers,
          data: urlencoded,
        })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              window.location.reload();
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error while creating new User!!",
              });
            } else if (err.response.status === 500) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Server Error!",
              });
            }
          });
      } catch (err) {
        console.log("Error logging in: " + err);
      }
    };

    useEffect(() => {
      window.google?.accounts?.id.initialize({
        client_id:
          "964224499636-4cc1a1pgi20iu1aghba4rk4435m6qfn1.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google?.accounts?.id.renderButton(
        document.querySelector(".googleicon"),
        {
          theme: "outline",
          size: "large",
        }
      );
      if (!token) window.google?.accounts?.id.prompt();
    }, []);

    const handleFbResponse = async (res) => {
      const token = res.data.accessToken;

      var form = new URLSearchParams();
      form.append("token", token);

      let headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      try {
        axios({
          url: ENDPOINT + "auth/facebook/login",
          method: "POST",
          headers,
          data: form,
        })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch(setShowLoginModal());
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error while creating new User!!",
              });
            } else if (err.response.status === 500) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Server Error!",
              });
            }
          });
      } catch (err) {
        console.log("Error logging in: " + err);
      }
    };

    return (
      <>
        <Modal
          className="loginmodal fullwidthmodal"
          show={showLoginModal}
          onHide={() => dispatch(setShowLoginModal())}
        >
          <Modal.Header closeButton>
            <Link to="/home">
              <div className="logo">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 loginleft">
                <div className="contact-info">
                  <h1 className="text-light text-center">
                    Let’s Craft Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 loginright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <form onSubmit={handleCreate} method="post">
                        <div className="row d-flex flex-column justify-content-center align-items-center ">
                          <div className="col-6 my-4 signformstart text-center">
                            <h1 className="signtitle">Log In</h1>
                          </div>
                          <div className="col-md-6">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="col-xxl-4 mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <BlueBtn title="Login" />
                              </div>
                            </div>
                          </div>

                          <div className="text-center popuplink my-2">
                            <p>
                              Don't have an account ? &nbsp;
                              <span
                                onClick={() => {
                                  dispatch(setShowLoginModal());
                                  dispatch(setShowSignUpModal());
                                }}
                              >
                                Sign Up
                              </span>
                            </p>
                            <div className="googleicon d-flex justify-content-center my-2" />
                            <div className="fbicon d-flex justify-content-center my-2">
                              <LoginSocialFacebook
                                isOnlyGetToken
                                appId="3789647204595344"
                                onResolve={handleFbResponse}
                                onReject={(err) => {
                                  console.log(err);
                                }}
                              >
                                <FacebookLoginButton />
                              </LoginSocialFacebook>
                            </div>
                            <p>
                              <span>Forget Password</span>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  //////////////////////  Forgot Modal //////////////////////////////
  const ForgotModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showForgotModal}
          onHide={() => dispatch(setShowForgotModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowForgotModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Forgot Password?</h1>
                          <p>No worries, we’ll send you reset instructions.</p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn
                                  onClick={() => {
                                    dispatch(setShowForgotModal());
                                    dispatch(setShowCheckYourEmailModal());
                                  }}
                                  type="submit"
                                  title="Reset Password"
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setShowForgotModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Check Your Email Modal //////////////////////////////
  const CheckYourEmailModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showCheckYourEmailModal}
          onHide={() => dispatch(setShowCheckYourEmailModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowCheckYourEmailModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Check your email</h1>
                          <p>
                            We sent a password reset link to
                            akhilesh@maxlence.com.au
                          </p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn
                                  onClick={() => {
                                    dispatch(setShowCheckYourEmailModal());
                                    dispatch(setNewPasswordModal());
                                  }}
                                  type="submit"
                                  title="Open Email"
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            Didn't receive the email?
                            <span
                              onClick={() => {
                                dispatch(setShowCheckYourEmailModal());
                                dispatch(setShowPasswordResetModal());
                              }}
                            >
                              Resend
                            </span>
                            <br />
                            <span
                              onClick={() => {
                                dispatch(setShowCheckYourEmailModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Password Reset Modal //////////////////////////////
  const PasswordResetModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showPasswordResetModal}
          onHide={() => dispatch(setShowPasswordResetModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowPasswordResetModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Password Reset</h1>
                          <p className="mb-0">
                            Your password has been successfully reset.
                          </p>
                          <p>Click below to login.</p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Open Email" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            <span
                              onClick={() => {
                                dispatch(setShowPasswordResetModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  //////////////////////  Set New Password Modal //////////////////////////////
  const SetNewPasswordModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showNewPasswordModal}
          onHide={() => dispatch(setNewPasswordModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setNewPasswordModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Set New Password</h1>
                          <p>
                            We sent a password reset link to
                            akhilesh@maxlence.com.au
                          </p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Confirm Password"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Reset Password" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setNewPasswordModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Menu Modal //////////////////////////////
  const MenuModal = () => {
    const navigate = useNavigate();
    return (
      <>
        <HiOutlineMenuAlt2
          className="mx-2"
          style={{ width: "2rem", cursor: "pointer" }}
          onClick={() => dispatch(setShowMenuModal())}
        />
        <Modal
          className=" fullwidthmodal"
          show={showMenuModal}
          onHide={() => dispatch(setShowMenuModal())}
        >
          <Modal.Body className="p-0 nav_munu_div">
            <Modal.Header closeButton className=" header"></Modal.Header>
            <div className="nav_menu_div">
              <div className="nav_menu_1">
                <div className="nav_menu_1_inner">
                  <ul>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/design_inspiration");
                        }}
                      >
                        Design inspiration
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/brochure");
                        }}
                      >
                        brochure
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/case-study");
                        }}
                      >
                        case study
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/blogs");
                        }}
                      >
                        blogs
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/about_us");
                        }}
                      >
                        About Us
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/testimonial");
                        }}
                      >
                        Testimonials
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/careers");
                        }}
                      >
                        Careers
                      </p>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/support");
                        }}
                      >
                        support
                      </p>
                    </li>
                  </ul>
                  <div className="nav_menu_1_inner_div">
                    <p
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/getintouch");
                      }}
                    >
                      get in touch
                    </p>
                    <p
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/privacy_policy");
                      }}
                    >
                      privacy policy
                    </p>
                    <p
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/refund_policy");
                      }}
                    >
                      refund policy
                    </p>
                    <p
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/terms_conditions");
                      }}
                    >
                      terms conditions
                    </p>
                  </div>
                  <div className="nav_menu_1_bottom">
                    <a
                      href="https://www.facebook.com/people/TecnoGex/100091787680738/"
                      target="new"
                    >
                      facebook
                    </a>
                    <a
                      href="https://www.instagram.com/tecnogexofficial/?igshid=YmMyMTA2M2Y%3D"
                      target="new"
                    >
                      Instagram
                    </a>
                    <a href="https://twitter.com/tecnogex_" target="new">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="nav_menu_2">
                <div className="nav_menu_inner_2">
                  <h3>
                    We’d love to be <br /> your partner
                  </h3>
                  <button
                    onClick={() => {
                      dispatch(setShowMenuModal());
                      navigate("/getintouch");
                    }}
                  >
                    Get In Touch <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  const navigate = useNavigate();
  //
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <TopNav />
      <Container
        fluid
        bg="light"
        className="navbarmain  px-xl-5  px-lg-3 px-md-5 "
      >
        <Navbar expand="lg">
          <Navbar.Brand className=" col-md-2 col-5 col-sm-2 col-md-3 col-lg-2 col-xl-2 m-0 ">
            <NavLink to="/">
              <img width="100%" src={HeaderLogo} alt="companylogo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="new_nav_div" navbarScroll>
              <li class="nav-item dropdown new_nav_li_one">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                  onClick={() => navigate("/creation")}
                >
                  Creation
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new creation_dropDown">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/website/6")}
                        >
                          <p>Website Design</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/website_redesign")}
                        >
                          <p>Website Re-Design</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/maintenance")}
                        >
                          <p>Maintenance</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/hosting")}
                        >
                          <p>hosting</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <video
                      loop
                      autoPlay
                      muted
                      src={C}
                      alt="dasboard agency"
                      className="drop_gif_mar"
                      type="video/mp4"
                    />
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                  onClick={() => navigate("/growth")}
                >
                  growth
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new drop_menu_div_growth">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/google_ads")}
                        >
                          <p>Google Ads</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/cro")}
                        >
                          <p>cro</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/social_media_marketing")}
                        >
                          <p>Social Media</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/seo")}
                        >
                          <p>seo</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/gmb")}
                        >
                          <p>gmb</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/video_marketing")}
                        >
                          <p>Video Marketing</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/email_marketing")}
                        >
                          <p>Email Marketing</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <img src={SMM} alt="img" />
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                  onClick={() => navigate("/design")}
                >
                  design
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new drop_menu_div_design">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/design")}
                        >
                          <p>logo</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/business-essentials")}
                        >
                          <p>Business Essentials</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/marketing")}
                        >
                          <p>Marketing</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/Social_Media_Design")}
                        >
                          <p>Social Media</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/landing_page")}
                        >
                          <p>Landing Page</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/website_templates")}
                        >
                          <p>Website Templates</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <img src={LogoVido} alt="gif" />
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                >
                  Business
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new drop_menu_div_business">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/business1")}
                        >
                          <p>business 1</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/business2")}
                        >
                          <p>business 2</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <img src={Ec} alt="gif" />
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                >
                  Enterprise
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new enterprise_dropDown">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/Seo_service")}
                        >
                          <p>SEO Service</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/google_ads_service")}
                        >
                          <p>Google Ads Service</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/social_media_service")}
                        >
                          <p> Social Media Service</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/mobile_app")}
                        >
                          <p>mobile app</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/saas")}
                        >
                          <p>SaaS</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <video
                      loop
                      autoPlay
                      muted
                      src={C}
                      alt="dasboard agency"
                      className="drop_gif_mar"
                      type="video/mp4"
                    />
                  </div>
                </div>
              </li>
              <Nav.Link
                className="new_nav_li_shop"
                onClick={() => navigate("/shop")}
              >
                Shop
              </Nav.Link>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle nav_drop_title"
                  data-bs-toggle="dropdown"
                >
                  Solutions
                </p>
                <div className="dropdown-menu fade-up drop_menu_div_new resources_dropDown">
                  <div className="drop_menu_inner_div drop_menu_div">
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/api_integration")}
                        >
                          <p>API Integration</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/form_tracker")}
                        >
                          <p>Form Tracker</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/review_tracker")}
                        >
                          <p>Review Tracker</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="drop_link_div_ul">
                      <li className="drop_link_div">
                        <div
                          className="inner_div"
                          onClick={() => navigate("/agencies")}
                        >
                          <p>Agencies</p>
                          <span>
                            Discover all the ways you can create and design your
                            website on tecnogex.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="drop_video_div">
                    <video
                      loop
                      autoPlay
                      muted
                      src={C}
                      alt="dasboard agency"
                      className="drop_gif_mar"
                      type="video/mp4"
                    />
                  </div>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
          <Nav className="d-flex flex-row align-items-center justify-content-around">
            <SignUpmodal />
            <MenuModal />
            <LoginModal />
            <ForgotModal />
            <CheckYourEmailModal />
            <PasswordResetModal />
            <SetNewPasswordModal />
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};
