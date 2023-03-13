import { NavLink } from "react-bootstrap";
import Whymaxtemp from "../assests/whymaxtemp.jpg";
export const Careers = () => {
  return (
    <>
      <div class="careerslider1 sliderimgcare bgproperty py-5">
        <div class="row careerslidecontent py-5 justify-content-center">
          <div class="text-center col-md-8 col-10">
            <h4 class="text-white my-3">Search Jobs</h4>
            <div class="career_search w-100">
              <input
                type="search"
                placeholder="Search Here"
                aria-describedby="button-addon1"
                class="form-control rounded-pill fontrale border-0 bg-light"
              />
            </div>
            <div class="applybtn mt-5 text-center">
              <h4 class="text-white mt-5">
                Exceed your potential… come join us!
              </h4>
              <div class="my-4">
                <a href="career_form.html" class="getstartbtn fontpop">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row justify-content-around">
          <div class="whymax col-sm-7 my-3 text-sm-left">
            <div
              class="m-0 p-0 wow animate__ animate__fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h1>
                Why{" "}
                <span>
                  <b> Maxlence ?</b>
                </span>
              </h1>
            </div>

            <div class="row my-1 px-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                accusamus ullam, vero quis quo a cupiditate ipsum autem et, quod
                nemo iste, possimus corporis molestias eaque. Distinctio
                recusandae, mollitia eius, natus fugit minus totam fuga nihil
                reprehenderit nesciunt quidem id sed, maxime temporibus
                voluptatibus doloremque iste et odio amet. Reprehenderit.
              </p>
            </div>
          </div>

          <div
            class="col-sm-5 mt-2 wow animate__ animate__fadeInDown animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <img class="w-100" src={Whymaxtemp} alt="alt" />
          </div>
        </div>
      </div>
    </>
  );
};
