import { NavLink } from "react-router-dom";
import Blog1 from "../assests/blog1.jpg";
import Blogger1 from "../assests/blogger1.png";
import B1 from "../../../img/dd1.png";
import B2 from "../../../img/dd2.png";
import B3 from "../../../img/dd3.png";
export const Blogs = () => {
  return (
    <>
      <div className="container ">
        <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
          <div className="col-lg-6 ">
            <img className="w-100" src={Blog1} alt="img" />
          </div>
          <div className="col-lg-6 col-12 my-3 ">
            <h1 className="font-weight-bold my-sm-4">
              <NavLink to="/blog_Detail" className="text-black">
                Lorem, <span>ipsum dolor</span> sit amet consectetur
                <span> adipisicing</span> elit.
              </NavLink>
            </h1>

            <div className="blogdetails">
              <div className="row blogsubinfo col-md-8 my-4 px-0 justify-content-between mx-2">
                <div>
                  <small>Maxlence </small> &nbsp;
                  <small className="blogdate">Oct 19, 2021</small>
                </div>
                <div>
                  <small>5 min read</small>
                </div>
              </div>

              <div className="bloggername d-flex justify-content-start align-items-center">
                <div>
                  <img src={Blogger1} alt="icon" />
                </div>
                <div>
                  <p className="mb-0 mx-2">By Paul Mucho Gracia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogsList />
    </>
  );
};
const BlogsList = () => {
  const BlogCardData = [
    {
      img: B1,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/blog_Detail",
    },
    {
      img: B2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/blog_Detail",
    },
    {
      img: B3,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/blog_Detail",
    },
    {
      img: B1,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/blog_Detail",
    },
    {
      img: B2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/blog_Detail",
    },
  ];
  return (
    <>
      <div className="container mb-4 ">
        <div className="row g-3">
          {BlogCardData.map((val, i) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              key={i}
            >
              <div className="blogcard pb-2">
                <div className="blogimg">
                  <div className="img-gradientgray">
                    <img
                      className="w-100 blog_img"
                      style={{ height: "13rem" }}
                      src={val.img}
                      alt="img"
                    />
                  </div>

                  <div className="bloginfo">
                    <div className="blogtitle">
                      <h5 className="text-white">{val.title}</h5>
                    </div>
                    <div className="row blogsubinfo col-12 my-2 justify-content-between ">
                      <div>
                        <small className="text-white">{val.category}</small>
                        &nbsp;
                        <small className="blogdate text-white">
                          {val.date}
                        </small>
                        &nbsp; &nbsp;
                        <small className="text-white">{val.time} read</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blogmincontent">
                  <p className="p-3">{val.text}</p>
                  <div className="col-12 d-flex justify-content-end ">
                    <NavLink className="cta me-3" to={val.link}>
                      <span className="hover-underline-animation fontpop">
                        Read More
                      </span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </NavLink>
                  </div>
                </div>
                .
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
