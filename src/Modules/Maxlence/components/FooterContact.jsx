import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export const FooterContact = (props) => {
  return (
    <>
      <div className="container-fluid mt-5" style={{ background: "#f5f5f5" }}>
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center">
            <h2 className=" bottom_contact_title">{props.title}</h2>
            <p className="bottom_contact_title_p">{props.title2}</p>
          </div>
          <div className="getstarted text-center col-12 ">
            <NavLink to="/getintouch" className="whitebgbtn fontrale mt-3">
              Get In Touch &#10230;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
FooterContact.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
};
FooterContact.defaultProps = {
  title: "Not finding what you are looking for?",
  title2: "Let Us Find It For You",
};
