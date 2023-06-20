import { NavLink } from "react-router-dom";
//
import GoogleAdsIcon from "../../../img/GoogleAdsIcon.svg";
import EmailMarketingIcon from "../../../img/EmailMarketingIcon.svg";
import VideoMarketingIcon from "../../../img/VideoMarketingIcon.svg";
import GMBIcon from "../../../img/gmba.svg";
import SEOIcon from "../../../img/SEOIcon.svg";
import SocialMediaIcon from "../../../img/SocialMediaIcon.svg";
import CROIcon from "../../../img/CROIcon.svg";
import Photo1 from "../../../img/gmb.png";
import Photo2 from "../../../img/gmbIcon0.svg";
import Photo3 from "../../../img/gmbIcon1.svg";
import Photo4 from "../../../img/gmbIcon2.svg";
import Photo5 from "../../../img/gmb2.png";
import Photo6 from "../../../img/gmb3.png";
import Photo7 from "../../../img/gmb4.png";
import Photo8 from "../../../img/gmb8.svg";
import Photo9 from "../../../img/gmb9.svg";
import Photo10 from "../../../img/gmb10.svg";
import { Faqs } from "../components/Faqs";
import { BlueLinkBtn } from "../components/Btn";
//
const TopLinkData = [
  {
    linkName: "Google Ads",
    linkIcon: GoogleAdsIcon,
    link: "/google_ads",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "CRO",
    linkIcon: CROIcon,
    link: "/cro",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: SocialMediaIcon,
    link: "/social_media_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "SEO",
    linkIcon: SEOIcon,
    link: "/seo",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "GMB",
    linkIcon: GMBIcon,
    link: "/gmb",
    activeNav: "block",
    linkNameColor: "black",
  },
  {
    linkName: "Video Marketing",
    linkIcon: VideoMarketingIcon,
    link: "/video_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Email Marketing",
    linkIcon: EmailMarketingIcon,
    link: "/email_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
];
export const Gmb = () => {
  const BenefitsData = [
    {
      title: "Local SEO Boost",
      img: Photo2,
    },
    {
      title: "Improve visibility on Google Maps",
      img: Photo3,
    },
    {
      title: "Increase Credibility and Trust with business reviews ",
      img: Photo4,
    },
  ];
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
        <div className=" container">
          <div className="growth_top_div">
            {TopLinkData.map((val, i) => (
              <div key={i} className=" creation_and_growth_col_div">
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}
                  </span>
                </NavLink>
                <div
                  style={{ display: val.activeNav }}
                  className="creation_and_growth_activ"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mb-5 maintenance_hero_top">
        <div className=" container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_hero_titlt_div cro_img_title_div">
                <h1 className="all_h1_title">
                  Get Noticed on Google Maps and
                  <span> Search with GMB </span>
                </h1>
                <p className="all_h1_title_p">
                  Explore the potential of your storefront or service area by
                  optimizing your Google Business Profile with engaging photos,
                  enticing offers, informative posts, and more.
                </p>
                <div className=" mt-3">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="gmb_top_img"
                style={{ backgroundImage: `url(${Photo1})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>
              <span>Benefits</span> of having better <span>GMB</span>
            </h3>
          </div>
        </div>
        <div className="row g-3">
          {BenefitsData.map((val, i) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
              key={i}
            >
              <div className="gmb_benefits_div">
                <img src={val.img} alt="icon" />
                <p>{val.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="maintenance_development_top mb-5"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="container">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_development_title">
                <h3 className=" text-black">
                  How did we meet your <span>expectations?</span>
                </h3>
                <p className=" text-black mb-2">
                  With the pivotal first month, our SEO Analysis Team delves
                  deep into the world of keywords, handpicking the perfect ones
                  to align with your business goals. Meanwhile, we fine-tune
                  your GMB profile, ensuring it shines with optimized product
                  details, service offerings, and location information. But
                  that's not all!
                </p>
                <p className=" text-black mb-2">
                  We're determined to skyrocket your online credibility,
                  employing strategic link-building to earn recommendations from
                  renowned websites, skyrocketing your authority in the eyes of
                  Google.
                </p>
                <p className=" text-black mb-2">
                  With detailed reports, we keep you in the loop, discussing
                  projections, campaign expectations, and the progress we've
                  made. Brace yourself for a dazzling ride as we navigate
                  through the intricacies of digital success together!
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-content-center">
              <div
                className="gmb_expectations_img"
                style={{ backgroundImage: `url(${Photo5})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>
              Relax and <span>Let Us Manage Your GMB</span> Profile
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="gmb_Manage_img"
              style={{ backgroundImage: `url(${Photo6})` }}
            ></div>
          </div>
          <div className="col-12">
            <div className="gmb_Manage_text">
              <p>
                Rest easy knowing that your Google My Business profile is in
                capable hands. Our team at Tecnogex enhances your Google
                Business Directory listing increases visibility, facilitating
                customer engagement. Classified ads expand your reach, raising
                awareness and connecting you to a wider audience. Social
                bookmarking shares links, attracting visitors and boosting your
                online presence. Forum posting builds connections, showcasing
                expertise and credibility.
              </p>
              <p>
                These strategies collectively enhance visibility, foster
                connections, and drive growth. By strategically connecting these
                dots, you create a strong foundation for your business, reaching
                more potential customers, and positioning yourself for long-term
                success.
              </p>
              <div className=" mt-4 text-center">
                <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="maintenance_development_top mb-5 gmb_impression_top_div"
        style={{ backgroundColor: "#FFF5E2" }}
      >
        <div className="container">
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div
                className="gmb_impression_img"
                style={{ backgroundImage: `url(${Photo7})` }}
              ></div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="maintenance_development_title">
                <h3 className=" text-black">
                  Make a lasting first <span>impression</span>
                </h3>
                <p className=" text-black mb-2">
                  Our team empowers you to create a captivating presence that
                  captivates customers, elevates credibility, and accelerates
                  growth. Leave a lasting impression with our customized
                  solutions for your Google My Business profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>What makes our services stand out</h3>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="gmb_img_left_title">
              <h3>
                <span>Boost local rankings</span>
              </h3>
              <p>
                Harness the power of GMB engagement signals like customer
                reviews and Google's Q&A to catapult your online reputation,
                dominate local search rankings, and drive substantial sales
                growth. Discover the game-changing strategy that propels your
                business to new heights.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="gmb_rankings_img" src={Photo8} alt="img" />
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="gmb_rankings_img" src={Photo9} alt="img" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="gmb_img_left_title">
              <h3>
                <span>Expert GMB optimization </span>
              </h3>
              <p>
                Our team will optimize your GMB listing to perfection,
                leveraging its full potential and crafting a tailored strategy.
                Join forces with Tecnogex to surpass local competitors,
                streamline marketing efforts, and attract ready-to-buy customers
                to your doorstep.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="gmb_img_left_title">
              <h3>
                <span>Advanced performance reporting </span>
              </h3>
              <p>
                Get real-time visibility into the impact of your optimized GMB
                listing through our comprehensive reports and user-friendly
                dashboard. Discover key insights on your rankings, website
                traffic, and phone call conversions.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 hosting_img_left_col">
            <div>
              <img className="gmb_rankings_img" src={Photo10} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Faqs catId={2} />
    </>
  );
};
