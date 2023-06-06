import Photo from "../../../img/th.svg";
import { BlueLinkBtn } from "../components/Btn";
export const ThankYou = () => {
  return (
    <>
      <section className=" container py-5">
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div mb-0">
            <h3>Thank You</h3>
          </div>
        </div>
        <div className=" text-center">
          <img
            className="maintenance_Satisfaction_img"
            src={Photo}
            alt="photo"
          />
        </div>
        <div className="maintenance_provide_title_top_div">
          <div className="maintenance_provide_title_div">
            <p className=" text-capitalize">
              Welcome to Tecnogex family! We will take it from here. We have
              sent a confirmation email to client@xyz.com
            </p>
          </div>
        </div>
        <div className=" mt-4 text-center">
          <BlueLinkBtn title="Go to home" link="/" />
        </div>
      </section>
    </>
  );
};
