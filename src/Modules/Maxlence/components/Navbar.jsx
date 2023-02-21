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
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import AccountMenu from "./AccountMenu";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../redux/modalStateSlice";
import { setShowSignUpModal } from "../redux/modalStateSlice";
import { setShowMenuModal } from "../redux/modalStateSlice";
import { handleExpiredUser } from "../HelperFunction/Helpers";

export const Header = () => {
  const showLoginModal = useSelector((state) => state.state.showLoginModal);
  const showSignUpModal = useSelector((state) => state.state.showSignUpModal);
  const showMenuModal = useSelector((state) => state.state.showMenuModal);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  
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
              console.log("Success!");
              setUser(res.data);
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              console.log("Token required!");
              
            }
            else if(err.response.status === 405) {
              handleExpiredUser();
              setUser({})
              console.log("Token expired!");
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  },[token]);

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
    return (
      <>
        {token ? (
          <AccountMenu user={user} setUser={setUser} />
        ) : (
          <OutlineBtn
            title="Log In"
            icon=""
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

  // const Example = () => {
  //   const values = [
  //     true,
  //     "sm-down",
  //     "md-down",
  //     "lg-down",
  //     "xl-down",
  //     "xxl-down",
  //   ];

  //   const [fullscreen, setFullscreen] = useState(true);
  //   const [show, setShow] = useState(false);

  //   function handleShow(breakpoint) {
  //     setFullscreen(breakpoint);
  //     setShow(true);
  //   }

  //   return (
  //     <>
  //       <OutlineBtn
  //         title="Sign up"
  //         icon=""
  //         onClick={() => setShowSignUpModal(true)}onClick={() => handleShow(v)
  //       />
  //       <Modal
  //         show={show}
  //         fullscreen={fullscreen}
  //         onHide={() => setShow(false)}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Modal body content</Modal.Body>
  //       </Modal>
  //     </>
  //   );
  // };

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
              localStorage.setItem("token", (res.data.token));
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
              localStorage.setItem("token", (res.data.token));
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
      <Navbar expand="lg" className="">
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
        </Nav>
      </Navbar>
    </Container>
  );
};
