import Whitetriangle from "../assests/whitetriangle.png";
import Timelinefadeline from "../assests/timelinefadeline.png";
import Slider from "react-slick";
import { GoPrimitiveDot } from "react-icons/go";
import Clientmv2 from "../assests/clientmv/clientmv2.jpg";
import Clientmv1 from "../assests/clientmv/clientmv1.jpg";
import Identity1 from "../assests/identity1.png";
import Identity2 from "../assests/identity2.png";
import Identity3 from "../assests/identity3.png";
import Dawkinslogo from "../assests/partners/dawkinslogo.png";

import Eurotechlogo from "../assests/partners/eurotechlogo.png";
import Gasonelogo from "../assests/partners/gasonelogo.png";
import Levelheadlogo from "../assests/partners/Levelheadlogo.png";
import Melblagerslogo from "../assests/partners/melblagerslogo.png";
import Melblogo from "../assests/partners/melblogo.png";
import Pstylinglogo from "../assests/partners/pstylinglogo.png";
import Tylerlogo from "../assests/partners/tylerlogo.png";
import Logo1 from "../assests/partners/logo 1.png";
import LogoGekko11 from "../assests/partners/logo_gekko-1 1.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Baysidelogo from "../assests/partners/baysidelogo.png";
import { AiOutlineLeft } from "react-icons/ai";
import ArrowDown from "../../../img/down.svg";
import ArrowUp from "../../../img/up.svg";
import OwlCarousel from "react-owl-carousel2";
import Carousel, { consts } from "react-elastic-carousel";
export const AboutUs = () => {
  return (
    <>
      <div className="container-fluid p-sm-5 abouthero new1">
        <div className="container py-sm-5 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-end">
            <div className="col-12 text-center">
              <h1 className="font-weight-bold text-white my-4">
                Video Sample Here
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" container">
        <div className=" my-5">
          <AboutPageSlider />
        </div>
      </div>

      <div className="ceosection container-fluid bg-light  ">
        <div className="container mb-sm-4 py-sm-3 py-4 ">
          <div className="ceotitle text-center my-sm-4 py-sm-4 py-3  wow animate__animated animate__fadeInDown">
            <h1>
              <span>
                <b>CEO </b>
              </span>
              Speaks
            </h1>
          </div>
          <div className="row justify-content-around ">
            <div className="col-sm-4 wow animate__animated animate__fadeInUp">
              <img className="w-100 my-3" src={Clientmv2} alt="f" />
            </div>
            <div className="col-sm-6  wow animate__animated animate__fadeInUp">
              <p>
                Imagine a world where boundaries are shattered and the
                unimaginable becomes reality. At Tecnogex, we are trailblazers,
                relentlessly pushing the limits of technology. But our success
                story is not just about cutting-edge solutions; it's about the
                people behind them. Our team is a tapestry of brilliant minds,
                driven by a shared passion for making a difference. We rely on
                both experience and knowledge and always encourage fresh and
                unorthodox ideas. We strive to be the kingpin of digital
                marketing and IT software on an international level. Last but
                not least, we embody the spirit of collaboration, harnessing our
                collective expertise to solve complex challenges.
              </p>

              <p>
                <span>Our mission:</span>To bring value to the customers at an
                affordable cost & to help businesses expand by increasing their
                sales and recognition. We help organizations to reach their true
                potential by leveraging the power of creativity and technology
                and we leave them with a lasting impression.
              </p>
              <p>
                <span>Our vision:</span> To make AI embedded alternatives for
                all working sectors, these automated services will help humans
                balance their work and life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="identities container my-sm-4 py-sm-5 py-0 my-3">
        <div className="identitestitle text-center my-3 py-3 wow animate__animated animate__fadeInDown">
          <h1>
            We at
            <span>
              <b> Tecnogex encourage</b>
            </span>
          </h1>
        </div>
        <div className="row justify-content-around align-items-center">
          <div className="col-sm-4 text-center wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity1} alt="e" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Integrity</b>
              </h4>
              <small>
                We as a team firmly believe in practicing transparency, building
                trust with our workforce and clients. Our commitment to honesty
                and confidence empowers us to take on any challenging project
                that comes our way.
              </small>
            </div>
          </div>

          <div className="col-sm-4 text-center wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity2} alt="d" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Professionalism</b>
              </h4>
              <small>
                Each member of our team upholds a strong sense of
                accountability, responsibility, and a pursuit of excellence. Our
                ethical conduct serves as a solid foundation for delivering
                exceptional results.
              </small>
            </div>
          </div>

          <div className="col-sm-4 text-center  wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity3} alt="d" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Teamwork</b>
              </h4>
              <small>
                By harnessing the collective experience and expertise of our
                team, we are able to overcome obstacles and achieve
                extraordinary outcomes. Together, we are a unified force capable
                of achieving greatness.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="teamsection container-fluid "
        style={{ background: "#0A76E5" }}
      >
        <div className="container py-5">
          <div className="row justify-content-around">
            <div className="col-sm-4 text-light text-sm-start text-center wow animate__animated animate__fadeInDown">
              <h1>
                <span style={{ color: "#AAD4FF" }}>
                  <b> People Behind </b>
                </span>
                Progress
              </h1>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 homepartners">
        <div className="partnershead text-center wow animate__animated animate__fadeInDown ">
          <h1>
            Our <span>Partners</span>
          </h1>
        </div>
        <div className="row text-center align-items-center ">
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Baysidelogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Dawkinslogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp s">
            <img src={Eurotechlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Gasonelogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Levelheadlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Melblagerslogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Melblogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Pstylinglogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Tylerlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Velaqualogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Logo1} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={LogoGekko11} alt="d" />
          </div>
        </div>
      </div>
    </>
  );
};

const HomeSlider = () => {
  const options = {
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 600,
    // animateOut: "slideOutUp",
    // animateIn: "slideInUp",
  };
  const SliderData = [
    {
      years: "2017",
      blueTile: "The Birth of a ",
      title: "Dream",
      text: "In 2017, Maxlence Consulting was founded as a side hustle, igniting a journey fueled by passion and ambition. In the same year, the team achieved a significant milestone by securing their very first website building contract from D-Celebrations. This early triumph set the stage for what was to come. ",
    },
    {
      years: "2018",
      blueTile: "New",
      title: "Horizons",
      text: "With unwavering dedication, Maxlence team moved into our first office, expanding our operations and delivering five impactful digital marketing projects, solidifying our reputation as a reliable and results-driven partner. ",
    },
    {
      years: "2019",
      blueTile: "Rising to ",
      title: "Excellence",
      text: "We unveiled our own website, showcased our expertise and completed an impressive array of 35 projects, encompassing digital marketing and website building. In August, we received the prestigious 'The Clutch Award, Top 10 Australian Companies'. ",
    },
    {
      years: "2020",
      blueTile: "Testimonials of  ",
      title: "Success",
      text: "We soared to new heights by winning Service Seeking's Top Businesses award for 2020, with an impressive 52 glowing reviews on Google and Facebook while our team embraced innovation in a new corporate building.",
    },
    {
      years: "2021",
      blueTile: "A Year of",
      title: "Victories",
      text: "We rocked the industry with our first-ever SaaS application for a mover company, while securing our second consecutive Techbehemoths Award for Aftercare. Our dedication and expertise propelled us to revolutionize the digital landscape and meet the evolving needs of our clients. ",
    },
    {
      years: "2022",
      blueTile: "Trust and Expertise ",
      title: "Recognized",
      text: "In 2022, our team achieved yet another remarkable milestone by becoming a Google Partner and completed 80+ projects. This recognition affirmed our expertise in digital marketing and our commitment to providing top-notch services. ",
    },
    {
      years: "2023",
      blueTile: "Elevate Your Business",
      title: "with Tecnogex",
      text: "Formerly known as Maxlence Consulting, we've undergone an exhilarating rebranding journey. Our brand-new website is your gateway to a world of multiple services, accompanied by our revolutionary client dashboard solutions to experience the power of real-time data-driven decision-making like never before! ",
    },
  ];
  return (
    <>
      <OwlCarousel options={options}>
        {SliderData.map((item, i) => (
          <div key={i}>
            <div className="About_slaider_topdiav">
              <div className="About_slaider_years">{item.years}</div>
              <div className="About_slaider_inner">
                <h3>
                  <span>{item.blueTile}</span> {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};
const AboutPageSlider = () => {
  const settings = {
    verticalMode: true,
    enableAutoPlay: false,
    autoPlaySpeed: 1500,
    showArrows: true,
    infinite: true,
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? "{ 1 }" : "{ 2 }";
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  return (
    <>
      <div className="About_slaider_topdiav_main">
        <Carousel {...settings} renderArrow={myArrow} pagination={false}>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2017</div>
            <div className="About_slaider_inner">
              <h3>
                <span>The Birth of a</span> Dream
              </h3>
              <p>
                In 2017, Maxlence Consulting was founded as a side hustle,
                igniting a journey fueled by passion and ambition. In the same
                year, the team achieved a significant milestone by securing
                their very first website building contract from D-Celebrations.
                This early triumph set the stage for what was to come.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2017</div>
            <div className="About_slaider_inner">
              <h3>
                <span>The Birth of a</span> Dream
              </h3>
              <p>
                In 2017, Maxlence Consulting was founded as a side hustle,
                igniting a journey fueled by passion and ambition. In the same
                year, the team achieved a significant milestone by securing
                their very first website building contract from D-Celebrations.
                This early triumph set the stage for what was to come.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2017</div>
            <div className="About_slaider_inner">
              <h3>
                <span>The Birth of a</span> Dream
              </h3>
              <p>
                In 2017, Maxlence Consulting was founded as a side hustle,
                igniting a journey fueled by passion and ambition. In the same
                year, the team achieved a significant milestone by securing
                their very first website building contract from D-Celebrations.
                This early triumph set the stage for what was to come.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2017</div>
            <div className="About_slaider_inner">
              <h3>
                <span>The Birth of a</span> Dream
              </h3>
              <p>
                In 2017, Maxlence Consulting was founded as a side hustle,
                igniting a journey fueled by passion and ambition. In the same
                year, the team achieved a significant milestone by securing
                their very first website building contract from D-Celebrations.
                This early triumph set the stage for what was to come.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2017</div>
            <div className="About_slaider_inner">
              <h3>
                <span>The Birth of a</span> Dream
              </h3>
              <p>
                In 2017, Maxlence Consulting was founded as a side hustle,
                igniting a journey fueled by passion and ambition. In the same
                year, the team achieved a significant milestone by securing
                their very first website building contract from D-Celebrations.
                This early triumph set the stage for what was to come.
              </p>
            </div>
          </div>
          {/* <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2018</div>
            <div className="About_slaider_inner About_slaider_inner_18">
              <h3>
                <span>New</span> Horizons
              </h3>
              <p>
                With unwavering dedication, Maxlence team moved into our first
                office, expanding our operations and delivering five impactful
                digital marketing projects, solidifying our reputation as a
                reliable and results-driven partner.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2019</div>
            <div className="About_slaider_inner About_slaider_inner_19">
              <h3>
                <span>Rising to</span> Excellence
              </h3>
              <p>
                We unveiled our own website, showcased our expertise and
                completed an impressive array of 35 projects, encompassing
                digital marketing and website building. In August, we received
                the prestigious 'The Clutch Award, Top 10 Australian Companies'.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2020</div>
            <div className="About_slaider_inner About_slaider_inner_20">
              <h3>
                <span>Testimonials of</span> Success
              </h3>
              <p>
                We soared to new heights by winning Service Seeking's Top
                Businesses award for 2020, with an impressive 52 glowing reviews
                on Google and Facebook while our team embraced innovation in a
                new corporate building."
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2021</div>
            <div className="About_slaider_inner About_slaider_inner_21">
              <h3>
                <span>A Year of</span> Victories
              </h3>
              <p>
                We rocked the industry with our first-ever SaaS application for
                a mover company, while securing our second consecutive
                Techbehemoths Award for Aftercare. Our dedication and expertise
                propelled us to revolutionize the digital landscape and meet the
                evolving needs of our clients.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2022</div>
            <div className="About_slaider_inner">
              <h3>
                <span>Trust and Expertise</span> Recognized
              </h3>
              <p>
                In 2022, our team achieved yet another remarkable milestone by
                becoming a Google Partner and completed 80+ projects. This
                recognition affirmed our expertise in digital marketing and our
                commitment to providing top-notch services.
              </p>
            </div>
          </div>
          <div className="About_slaider_topdiav">
            <div className="About_slaider_years">2023</div>
            <div className="About_slaider_inner About_slaider_inner_23">
              <h3>
                <span>Elevate Your Business</span> with Tecnogex
              </h3>
              <p>
                Formerly known as Maxlence Consulting, we've undergone an
                exhilarating rebranding journey. Our brand-new website is your
                gateway to a world of multiple services, accompanied by our
                revolutionary client dashboard solutions to experience the power
                of real-time data-driven decision-making like never before!
              </p>
            </div>
          </div> */}
        </Carousel>
      </div>
    </>
  );
};
