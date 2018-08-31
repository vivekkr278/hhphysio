import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {

  render() {
    return (
      <div id="contact-page" className="pageContainer">
        <div role="main" className="content-area">
          <section className="section dark contact-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>Contact</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section contact-second-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse align-middle">
                <div className="col medium-6 small-12 large-6">
                  <div className="col-inner text-center" style={{padding: "20px 20px 20px 20px",margin: "0px 0px 0 0px"}}>
                    <h1 className="styles-section-title styles-selector">
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
                <div className="col medium-6 small-12 large-6">
                  <div
                    className="col-inner"
                    style={{
                      padding: "0px 0px 0px 0px",
                      margin: "0 0px 0px 0px"
                    }}
                  >
                    <div
                      className="img has-hover x md-x lg-x y md-y lg-y"
                      style={{ width: "100%" }}
                    >
                      <div className="img-inner dark">
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
          <section className="section contact-third-section">
            <iframe
              title='map' 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8995542063226!2d77.57677531482139!3d12.914176990893559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157160fbb595%3A0x9376b2f2a53c6eca!2sHealing+Hands+Advanced+Physiotherapy+Clinic!5e0!3m2!1sen!2sin!4v1531210226726"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
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
