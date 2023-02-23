import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { OutlineBtn, OutlineLinkBtn, BlueBtn } from "../components/Btn";
import logo from "../assests/maxlogodark.png";
import Modal from "react-bootstrap/Modal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TextAreaBox } from "../components/form";
import Swal from "sweetalert2";
import ENDPOINT from "../config/ENDPOINT";
import OAuth2Login from "react-simple-oauth2-login";
import AccountMenu from "./AccountMenu";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../redux/modalStateSlice";
import { setShowSignUpModal } from "../redux/modalStateSlice";
import { setShowMenuModal } from "../redux/modalStateSlice";
import { setShowForgotModal } from "../redux/modalStateSlice";
import { setShowCheckYourEmailModal } from "../redux/modalStateSlice";
import { setShowPasswordResetModal } from "../redux/modalStateSlice";
import { setNewPasswordModal } from "../redux/modalStateSlice";

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

  const dispatch = useDispatch();

  ////////////////////// Sign Up Modal //////////////////////////////

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
        <AccountMenu />
        {user ? (
          <AccountMenu />
        ) : (
          <OutlineBtn
            title="Log In"
            icon=""
            // onClick={() => setShowLoginModal(true)}
            onClick={() => dispatch(setShowLoginModal())}
          />
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
                <img width="100" src={logo} alt="companylogo" />
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
              localStorage.setItem("token", JSON.stringify(res.data.token));
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
        await fetch(ENDPOINT + "auth/google/login", {
          method: "POST",
          headers,
          body: urlencoded,
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location.reload();
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
      let user = localStorage.getItem("token");
      if (!user) window.google?.accounts?.id.prompt();
    }, []);

    const onSuccess = (response) => console.log(response);
    const onFailure = (response) => console.error(response);

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
                <img width="100" src={logo} alt="companylogo" />
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

                            <div className="googleicon d-flex justify-content-center my-2">
                              <OAuth2Login
                                buttonText="Log in with Facebook"
                                authorizationUrl="https://www.facebook.com/dialog/oauth"
                                responseType="token"
                                clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                                redirectUri={ENDPOINT}
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                              />
                            </div>
                            <p>
                              <span
                                onClick={() => {
                                  dispatch(setShowLoginModal());
                                  dispatch(setShowForgotModal());
                                }}
                              >
                                Forget Password
                              </span>
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
                <img width="100" src={logo} alt="companylogo" />
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
                <img width="100" src={logo} alt="companylogo" />
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
                            Didn't receive the email?{" "}
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
                <img width="100" src={logo} alt="companylogo" />
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
                <img width="100" src={logo} alt="companylogo" />
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
    return (
      <>
        <HiOutlineMenuAlt2
          className="mx-2"
          style={{ width: "2rem" }}
          onClick={() => dispatch(setShowMenuModal())}
        />
        <Modal
          className="menumodal fullwidthmodal"
          show={showMenuModal}
          onHide={() => dispatch(setShowMenuModal())}
        >
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100 align-items-center">
              <div className="col-md-6 menuleft">
                <div className="menulinks">
                  <Nav
                    className="ms-auto my-2 my-lg-0 align-items-center"
                    navbarScroll
                  >
                    <Nav.Link href="/creation">Creation</Nav.Link>
                    <Nav.Link href="/growth">Growth</Nav.Link>
                    <Nav.Link href="/design">Design</Nav.Link>
                    <NavDropdown title="Business" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">Business1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Business 2</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">
                        Design Inspiration
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Brochure</NavDropdown.Item>
                      <NavDropdown.Item href="#">Case Study</NavDropdown.Item>
                      <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Enterprise"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="#">SEO Service</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Google Ads Service
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Social Media Service
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">
                        API Integration
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Form Tracker</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Review Tracker
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Agencies</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
              </div>

              <div className="col-md-6 menuright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="">We’d love to be your partner</h1>
                        </div>
                        <div className="col-4">
                          <OutlineLinkBtn
                            title="Get In Touch"
                            to="getintouchform"
                          />
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
  return (
    <Container fluid bg="light" className="navbarmain px-md-5 ">
      <Navbar expand="lg">
        <Navbar.Brand
          className=" col-md-2 col-5 col-sm-2 col-md-3 col-lg-2 col-xl-2 "
          href="/"
        >
          <img width="100%" src={logo} alt="companylogo" />
        </Navbar.Brand>
        {/* <div className="d-lg-none d-sm-block">
          <HiOutlineMenuAlt1 />
        </div> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-3 w-100 justify-content-around my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/creation">Creation</Nav.Link>
            <Nav.Link href="/growth">Growth</Nav.Link>
            <Nav.Link href="/design">Design</Nav.Link>
            <NavDropdown title="Business" id="navbarScrollingDropdown">
              <NavDropdown.Item href="business1">Business1</NavDropdown.Item>
              <NavDropdown.Item href="#">Business 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Design Inspiration</NavDropdown.Item>
              <NavDropdown.Item href="#">Brochure</NavDropdown.Item>
              <NavDropdown.Item href="#">Case Study</NavDropdown.Item>
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Enterprise" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">SEO Service</NavDropdown.Item>
              <NavDropdown.Item href="#">Google Ads Service</NavDropdown.Item>
              <NavDropdown.Item href="#">Social Media Service</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <NavDropdown title="Solutions" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">API Integration</NavDropdown.Item>
              <NavDropdown.Item href="#">Form Tracker</NavDropdown.Item>
              <NavDropdown.Item href="#">Review Tracker</NavDropdown.Item>
              <NavDropdown.Item href="#">Agencies</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
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
  );
};
