import { Faqs } from "../components/Faqs";
import { DrawerLeft } from "../components/DrawerLeft";
import { FooterContact } from "../components/FooterContact";
import { NavLink } from "react-router-dom";
import Homehero1 from "../assests/homehero1.png";
import Slider from "react-slick";
import Mobileappcrossplat2 from "../assests/mobileapp_crossplat2.png";
import Mobileappcrossplat1 from "../assests/mobileapp_crossplat1.png";
import Mobileapp_craveui from "../assests/mobileapp_craveui.png";

import User1 from "../assests/user 1.png";
import Vectoralt1 from "../assests/vector-alt 1.png";
import Layoutfluid1 from "../assests/layout-fluid 1.png";
import Commentcode1 from "../assests/comment-code 1.png";
import Charttree1 from "../assests/chart-tree 1.png";

export const MobileApp = () => {
  return (
    <>
      <div className="container services_modal_page_div">
        <div className="services_modal_page_inner" style={{ left: "0" }}>
          <DrawerLeft data="creation_page" />
        </div>
        <div className="row  justify-content-around align-items-center">
          <div className="col-12 col-md-12 col-lg-7 my-3  text-sm-start ">
            <h6>WEBSITE CREATION SERVICES</h6>
            <h1 className="my-4">
              It’s not about how great our app is, but the effect it has on your
              organization
            </h1>
            <div className="py-4">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn fontrale my-5"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
            <img className="w-100" src={Homehero1} alt="s" />
          </div>
        </div>
      </div>
      <div class="container my-5 homepartners">
        <div class="row text-center align-items-center ">
          <div class="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/melblogo.png"
              alt="d"
            />
          </div>
          <div class="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/plumbing_gas.png"
              alt="d"
            />
          </div>
          <div class="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/tylerlogo.png"
              alt="d"
            />
          </div>
          <div class="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/partners/velaqualogo.png"
              alt="d"
            />
          </div>
        </div>
      </div>
      <div
        class="container-fluid py-3 crtwebsec1"
        style={{ background: "#E2F0FF" }}
      >
        <div class="container">
          <div class="row py-3">
            <div class="col-md-6">
              <h2 class="">For native and cross-platform applications</h2>
              <br />
              <p>
                Our experience across multiple industries allows us to build
                brilliant mobile products and guide a strategy that will ensure
                your mobile app succeeds.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                dolore odit laborum dolorum officia repellat? Velit placeat
                libero, reprehenderit, mollitia nisi eligendi aspernatur magni
                aut sequi nam incidunt, numquam explicabo unde eos asperiores
                nobis. Aut modi, laborum repellat debitis neque ab itaque libero
                necessitatibus maiores dolore explicabo omnis cumque molestias?
              </p>
            </div>
            <div class="col-lg-3 d-md-block d-none">
              <img class="w-100" src={Mobileappcrossplat2} alt="f" />
            </div>
            <div class="col-lg-3 d-md-block d-none">
              <img class="w-100" src={Mobileappcrossplat1} alt="fd" />
            </div>
          </div>
        </div>
      </div>
      <div class="container mmdash">
        <div class="row justify-content-between my-3 py-4">
          <div class="col-lg-4 my-3">
            <h2>
              How We <span>Carve App UI/UX Differently?</span>
            </h2>
            <img class="w-100 my-5" src={Mobileapp_craveui} alt="f" />
          </div>
          <div class="col-lg-7 my-3">
            <div class="mmdashbullet my-3">
              <div class="row my-3 justify-content-around align-content-start">
                <div class="col-2">
                  <div>
                    <h1>1</h1>
                  </div>
                </div>
                <div class="col-10">
                  <h3>
                    <b>Product Design Research</b>
                  </h3>
                  <p>
                    Our designers know the right techniques to research visuals
                    and experience that works for your industry. With in-depth
                    research, we design a scalable UI/UX to distinguish your
                    products from the competition.
                  </p>
                </div>
              </div>
            </div>
            <div class="mmdashbullet my-3">
              <div class="row my-3 justify-content-around align-content-start">
                <div class="col-2">
                  <div>
                    <h1>2</h1>
                  </div>
                </div>
                <div class="col-10">
                  <h3>
                    <b>User-first Design</b>
                  </h3>
                  <p>
                    We make app designs for end users, be it a consumer of an
                    e-commerce app or a corporate user. Our team keeps your user
                    preference first, learned through the best tools and years
                    of experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="mmdashbullet my-3">
              <div class="row my-3 justify-content-around align-content-start">
                <div class="col-2">
                  <div>
                    <h1>3</h1>
                  </div>
                </div>
                <div class="col-10">
                  <h3>
                    <b>Experience for Conversions</b>
                  </h3>
                  <p>
                    We have a very defined process for designing innovative yet
                    engaging user experience. Our team emphasizes tricks to
                    minimize steps, funnel users, simplifies process and lot
                    more to deliver user experience optimized for conversions.
                  </p>
                </div>
              </div>
            </div>

            <div class="mmdashbullet my-3">
              <div class="row my-3 justify-content-around align-content-start">
                <div class="col-2">
                  <div>
                    <h1>4</h1>
                  </div>
                </div>
                <div class="col-10">
                  <h3>
                    <b>Innovate with Trends</b>
                  </h3>
                  <p>
                    Our app designers love to innovate with the app design
                    trends. We build out-of-the-box mobile app designs, which
                    are attractive to eyes and set the standard for designers.
                  </p>
                </div>
              </div>
            </div>

            <div class="mmdashbullet my-3">
              <div class="row my-3 justify-content-around align-content-start">
                <div class="col-2">
                  <div>
                    <h1>5</h1>
                  </div>
                </div>
                <div class="col-10">
                  <h3>
                    <b>Design Guidelines</b>
                  </h3>
                  <p>
                    Our designers strictly follow the Human Interface Design and
                    Material Design guidelines shared by Apple and Android. As
                    an app design agency, we keep checking on rules and carve
                    apps with beautiful designs.
                  </p>

                  <div class="py-4">
                    <NavLink
                      to="/Questionare_Page"
                      className="getstartbtn  fontrale my-5 "
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-3 " style={{ backgroundColor: "#0A76E5" }}>
        <div class="container">
          <div class="row justify-content-around align-items-center ">
            <div class="col-lg-4">
              <div>
                <h2 class="text-white">Ideal Process of App UI/UX Design</h2>
                <p
                  class="mb-0 mt-3"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  We take each work as unique and custom, keeping the process
                  very personalized for the product. However, in most scenarios,
                  our mobile app design process includes.
                </p>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="threewaysteps appsteps my-5 ">
                <SliderBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
const SliderBottom = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="slidebluearrows  my_slick_slider3 py-2" {...settings}>
        <div class="mobileapp_process px-3 py-2 m-2 " style={{ width: "auto" }}>
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img
                class="w-50"
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/briefcase.svg"
                alt="s"
              />
            </div>
            <div class="my-3">
              <h6>Understand the target audience and the nature of business</h6>
            </div>
            <div>
              <p>1/6</p>
            </div>
          </div>
        </div>
        <div class="mobileapp_process px-3 py-2 m-2 ">
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img class="w-50" src={User1} alt="s" />
            </div>
            <div class="my-3">
              <h6>Create storyboard according to user case, define them</h6>
            </div>
            <div>
              <p>2/6</p>
            </div>
          </div>
        </div>
        <div class="mobileapp_process px-3 py-2 m-2 ">
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img class="w-50" src={Vectoralt1} alt="s" />
            </div>
            <div class="my-3">
              <h6>UnderSketching user experience for different scenarios</h6>
            </div>
            <div>
              <p>3/6</p>
            </div>
          </div>
        </div>
        <div class="mobileapp_process px-3 py-2 m-2 ">
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img class="w-50" src={Layoutfluid1} alt="s" />
            </div>
            <div class="my-3">
              <h6>Wireframing screens to visualize experience</h6>
            </div>
            <div>
              <p>4/6</p>
            </div>
          </div>
        </div>
        <div class="mobileapp_process px-3 py-2 m-2 ">
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img class="w-50" src={Commentcode1} alt="s" />
            </div>
            <div class="my-3">
              <h6>Building a prototype to understand design</h6>
            </div>
            <div>
              <p>5/6</p>
            </div>
          </div>
        </div>
        <div class="mobileapp_process px-3 py-2 m-2 ">
          <div class="text-center py-4">
            <div class="bluedisc m-auto">
              <img class="w-50" src={Charttree1} alt="ds" />
            </div>
            <div class="my-3">
              <h6>Creating final designs and improvising</h6>
            </div>
            <div>
              <p>6/6</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};
