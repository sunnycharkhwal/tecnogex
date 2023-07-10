import { NavLink } from "react-router-dom";
//
import GoogleAdsIcon from "../../../img/GoogleAdsIcon.svg";
import EmailMarketingIcon from "../../../img/EmailMarketingIcon.svg";
import VideoMarketingIcon from "../../../img/VideoMarketingIcon.svg";
import GMBIcon from "../../../img/GMBIcon.svg";
import SEOIcon from "../../../img/SEOIcon.svg";
import SocialMediaIcon from "../../../img/SocialMediaIcon.svg";
import CROIcon from "../../../img/croa.svg";
import Photo1 from "../../../img/cro1.svg";
import Photo2 from "../../../img/cro2.png";
import Photo3 from "../../../img/cro4.svg";
import { BsDot } from "react-icons/bs";
import { BlueLinkBtn } from "../components/Btn";
import { Faqs } from "../components/Faqs";
import { FooterContact } from "../components/FooterContact";
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
    activeNav: "block",
    linkNameColor: "black",
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
    activeNav: "none",
    linkNameColor: "",
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
export const Cro = () => {
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
                  Get a Conversion Rate Optimization program with
                  <span> proven results</span>
                </h1>
                <p className="all_h1_title_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  leo amet mauris amet, nulla auctor ipsum. Cursus in arcu
                  integer pellentesque sed in mattis.
                </p>
                <div className=" mt-3">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div
                className="cro_img"
                style={{ backgroundImage: `url(${Photo1})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>We don’t do experimentation;We are experimentation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus ipsum elementum
              magna odio. Mauris nibh venenatis massa quis nulla at porta urna
              varius. Elementum vulputate mi quis senectus. Feugiat et fusce
              placerat nibh suspendisse ornare nunc. Vel ac fringilla purus
              libero dui volutpat nunc et. Et interdum nisi consequat semper
              blandit faucibus hac aliquam. Et lacinia sed diam ultrices turpis
              mi vitae. Enim suspendisse posuere sed tincidunt imperdiet massa
              auctor. Tempus turpis nunc aliquet sem nibh nisl. Ullamcorper amet
              sit.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12">
            <div>
              <img src={Photo2} alt="img" className="we_do_img" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12">
            <div className="maintenance_provide_text_div">
              <h3 className="all_h1_title">What we do</h3>
              <p className="all_h1_title_p">
                Lorem ipsum dolor sit amet consectetur. Dolor turpis felis
                varius a iaculis. Aliquet mauris ut aenean cras et amet diam
                donec. Turpis purus egestas a vel tellus libero adipiscing.
                Vehicula etiam viverra faucibus enim feugiat est purus
                scelerisque volutpat. Libero ac morbi.
              </p>
              <div className=" mt-4 ">
                <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customers_top_div mb-5">
        <div className="container">
          <div className="Maintenance_Audit_div">
            <div className="Maintenance_Audit_div_inner">
              <h2>
                We have developed a bespoke methodology which has been built out
                of the fusion between traditional UX, agile delivery and
                experimentation.
              </h2>
            </div>
          </div>
          <div className="cro_developed_div_text">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <p className="all_h1_title_p">
                  Lorem ipsum dolor sit amet consectetur. In in nec montes at
                  etiam faucibus amet nibh porttitor. Pretium in eu ridiculus
                  congue at odio enim velit ultrices. Dui tortor iaculis purus
                  pellentesque turpis amet convallis ac. Potenti sed mauris
                  volutpat eget est egestas. Morbi blandit at morbi convallis
                  adipiscing eu. Etiam sollicitudin amet semper vestibulum
                  ornare diam. Varius tristique viverra mi cras orci vitae
                  aliquet. Et integer adipiscing condimentum ullamcorper. Velit
                  sed amet habitant et vitae molestie etiam urna. Et dapibus
                  amet.
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <p className="all_h1_title_p">
                  Lorem ipsum dolor sit amet consectetur. In in nec montes at
                  etiam faucibus amet nibh porttitor. Pretium in eu ridiculus
                  congue at odio enim velit ultrices. Dui tortor iaculis purus
                  pellentesque turpis amet convallis ac. Potenti sed mauris
                  volutpat eget est egestas. Morbi blandit at morbi convallis
                  adipiscing eu. Etiam sollicitudin amet semper vestibulum
                  ornare diam. Varius tristique viverra mi cras orci vitae
                  aliquet. Et integer adipiscing condimentum ullamcorper. Velit
                  sed amet habitant et vitae molestie etiam urna. Et dapibus
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>How can we help?</h3>
          </div>
          <div className="row g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cro_points_div">
                <h4>EXPERIMENTATION SERVICES</h4>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cro_points_div">
                <h4>EXPERIMENTATION SERVICES</h4>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <p>
                  <BsDot />
                  Experimentation Type
                </p>
                <div className=" mt-4 ">
                  <BlueLinkBtn title="Get Started" link="/Questionare_Page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <h3>Tools & Technologies Used in CRO</h3>
            <p>
              We take each work as unique and custom, keeping the process very
              personalized for the product. However, in most scenarios, our
              mobile app design process includes.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 cro_icon_top_mobile">
              <img src={Photo3} alt="img" className="cro_icon_div_bottom" />
            </div>
          </div>
        </div>
      </section>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
