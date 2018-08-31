import React, { Component } from "react";
import { Link } from "react-router-dom";

class HandsOfPhysio extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div id="HOP" className="pageContainer">
        <div id="content" role="main" className="content-area">
          <section className="section dark hop-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>Hands Of Physiotherapy</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section hop-second-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div
                className="banner has-hover hop-banner"
                id="hop-banner"
              >
                <div className="banner-inner fill">
                  <div className="banner-bg fill">
                    <div className="bg fill bg-fill  bg-loaded" />
                    <div className="overlay" />
                  </div>
                  <div className="banner-layers container">
                    <div className="fill banner-link" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section hop-third-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                    Hands on Physiotherapy
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                    “Hands on physiotherapy or manual therapy is the treatment technique provided by physical therapist which may include moving joints in specific directions and at different speeds to regain movement (joint mobilization and manipulation), muscle stretching, passive movements of the affected body part, or having the patient move the body part against the therapist’s resistance to improve muscle activation and timing. Selected specific soft tissue techniques may also be used to improve the mobility and function of tissue and muscles.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default HandsOfPhysio;
