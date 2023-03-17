import { InlineWidget } from "react-calendly";
import Formtrackerhead from "../assests/formtrackerhead.jpg";

import Homegif from "../assests/homegif.gif";

import { NavLink } from "react-router-dom";
export const FormTracker = () => {
  return (
    <>
      <div
        class="container-fluid py-5 bgproperty"
        style={{ backgroundColor: "#3599ff" }}
      >
        <div class="container my-sm-4 py-0 my-0">
          <div class="row my-4 text-sm-left text-center">
            <div class="col-12 text-center">
              <p
                class="text-white font-weight-light"
                style={{ opacity: "0.5 " }}
              >
                FORM TRACKER
              </p>
              <h1>
                Lorem ipsum dolor sit amet
                <span class="text-white">consectetur</span>
              </h1>
            </div>
            <div
              class="col-sm-9 col-12 my-3"
              style={{ visibility: "visible " }}
            >
              <div class="row align-items-start">
                <div
                  class="col-md-6 col-12 mt-md-5 mr-md-n5 py-5 px-3 text-center bg-white"
                  style={{
                    boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.25)",
                    zIndex: "1",
                  }}
                >
                  <h5 class="font-weight-bold mb-sm-4 mt-0">
                    Integrate conversions-ready forms with ease
                  </h5>
                  <small class="text-secondary">
                    sodales lectus, vel tincidunt purus feugiat vitae. Donec at
                    viverra dolor
                  </small>
                  <div class="my-5">
                    <a href="quest.html" class="getstartbtn fontpop ">
                      Create Now
                    </a>
                  </div>
                  <div>
                    <small class="text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis architecto consectetur modi doloremque?
                      Officiis, nemo?
                    </small>
                  </div>
                </div>
                <div class="col-md-6 d-none d-md-block">
                  <img src={Formtrackerhead} alt="dc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-3 mb-1 secoservices">
        <div class="text-center">
          <h1 class="font-weight-bold my-4 " style={{ visibility: "visible " }}>
            Convert anonymous website visitors into leads with a customizable
            form builder.
          </h1>
        </div>
        <div class="row mt-5 justify-content-around align-items-center">
          <div class="col-md-5 order-md-1 order-sm-2 order-2">
            <img class="w-100" src={Homegif} alt="d" />
          </div>
          <div class="col-md-6 my-3 order-md-2 order-sm-1 order-1">
            <h1>
              Lorem ipsum dolor sit amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quia iusto voluptate maiores unde ex illo inventore nostrum
              officia tempora eveniet quos, est illum quam molestiae veritatis,
              error quae vitae deleniti beatae? Nisi praesentium iste quisquam
              totam harum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi in, eveniet voluptates veritatis minima ipsa
              pariatur modi hic adipisci magnam sed veniam fuga repellendus
              officia asperiores porro natus minus. Iste, quam. Rem velit est
              placeat.
            </p>
          </div>
        </div>

        <div class="row mt-5 justify-content-around align-items-center">
          <div class="col-md-6 my-3">
            <h1>
              Lorem ipsum dolor sit amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quia iusto voluptate maiores unde ex illo inventore nostrum
              officia tempora eveniet quos, est illum quam molestiae veritatis,
              error quae vitae deleniti beatae? Nisi praesentium iste quisquam
              totam harum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi in, eveniet voluptates veritatis minima ipsa
              pariatur modi hic adipisci magnam sed veniam fuga repellendus
              officia asperiores porro natus minus. Iste, quam. Rem velit est
              placeat.
            </p>
          </div>
          <div class="col-md-5">
            <img class="w-100" src={Homegif} alt="d" />
          </div>
        </div>

        <div class="row mt-5 justify-content-around align-items-center">
          <div class="col-md-5 order-md-1 order-sm-2 order-2 ">
            <img class="w-100" src={Homegif} alt="d" />
          </div>
          <div class="col-md-6 my-3 order-md-2 order-sm-1 order-1">
            <h1>
              Lorem ipsum dolor sit amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quia iusto voluptate maiores unde ex illo inventore nostrum
              officia tempora eveniet quos, est illum quam molestiae veritatis,
              error quae vitae deleniti beatae? Nisi praesentium iste quisquam
              totam harum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi in, eveniet voluptates veritatis minima ipsa
              pariatur modi hic adipisci magnam sed veniam fuga repellendus
              officia asperiores porro natus minus. Iste, quam. Rem velit est
              placeat.
            </p>
          </div>
        </div>
      </div>
      <InlineWidget url="https://calendly.com/maxlence/appointment" />
    </>
  );
};
