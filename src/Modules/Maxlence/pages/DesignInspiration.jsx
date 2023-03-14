import Shareicon from "../assests/shareicon.png";
import Websitetemp1 from "../assests/websitetemp1.jpg";

export const DesignInspiration = () => {
  return (
    <>
      <div class="container designinsp_title text-center border-bottom py-3 my-3">
        <h1>
          Lorem ipsum
          <span>dolor</span>
          sit amet consectetur
          <span>adipisicing</span> elit. Possimus.
        </h1>
      </div>
      <div class="container websitetemp my-5">
        <div class="row justify-content-between">
          <div class="col-4">
            <h5>
              <b>Website</b>
            </h5>
          </div>
          <div class="col-2 text-right">
            <p>
              <b>
                <a href="">More</a>
              </b>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-6 my-2 ">
            <img class="w-100" src={Websitetemp1} alt="sd" />
          </div>
        </div>
      </div>
    </>
  );
};
