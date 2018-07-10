import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="contact-page" className="pageContainer">
        <div role="main" class="content-area">
          <section class="section dark contact-first-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row row-collapse">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1>
                      <span>Contact</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section contact-second-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row row-collapse align-middle">
                <div class="col medium-6 small-12 large-6">
                  <div class="col-inner text-center" style={{padding: "20px 20px 20px 20px",margin: "0px 0px 0 0px"}}>
                    <h1 class="styles-section-title styles-selector">
                      Feeling better is a click or call away
                    </h1>
                    <hr />
                    <p style={{ marginBottom: 0 }}>
                      <a href="tel:+917204920259">
                        <span>+91-7204920259</span>
                      </a>{" "}|{" "}<span>{" "}
                      <a href="mailto:healinghandsblr@gmail.com">
                      healinghandsblr@gmail.com
                      </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col medium-6 small-12 large-6">
                  <div
                    class="col-inner"
                    style={{
                      padding: "0px 0px 0px 0px",
                      margin: "0 0px 0px 0px"
                    }}
                  >
                    <div
                      class="img has-hover x md-x lg-x y md-y lg-y"
                      style={{ width: "100%" }}
                    >
                      <div class="img-inner dark">
                        <img
                          width="1200"
                          height="820"
                          src="https://images1-fabric.practo.com/practices/1148591/healing-hands-advanced-physiotherapy-clinic-bangalore-593fc99d3e39f.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section contact-third-section">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8995542063226!2d77.57677531482139!3d12.914176990893559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157160fbb595%3A0x9376b2f2a53c6eca!2sHealing+Hands+Advanced+Physiotherapy+Clinic!5e0!3m2!1sen!2sin!4v1531210226726" width="1436" height="400" frameborder="0" style={{border:0}} allowfullscreen></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8995542063226!2d77.57677531482139!3d12.914176990893559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157160fbb595%3A0x9376b2f2a53c6eca!2sHealing+Hands+Advanced+Physiotherapy+Clinic!5e0!3m2!1sen!2sin!4v1531210226726"
              width="100%"
              height="400"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
            />
          </section>
          <section className="section bordertop book-now-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse book-now-inner-section">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center dark">
                    <h1>
                      <span>FEELING BETTER IS A CLICK AWAY</span>
                    </h1>
                    <h4>
                      <span style={{ letterSpacing: "3px" }}>
                        BOOK AN APPOINTMENT OR GET THE CONVERSATION STARTED
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row row-collapse book-now-button-section">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center dark">
                    <Link className="button primary bookbutton" to="/book">
                      <span>BOOK NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
