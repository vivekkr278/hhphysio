import React, { Component } from "react";
import { Link } from "react-router-dom";

class DryNeedling extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div id="dryneedling" className="pageContainer">
        <div id="content" role="main" className="content-area">
          <section className="section dark hop-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>Dry Needling</span>
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
                className="banner has-hover dry-needling-banner"
                id="dry-needling-banner"
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
                    Dry needling 
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                    Dry needling is an invasive procedure where an acupuncture needle is inserted into the skin and muscle. It is aimed at myofascial trigger points which are hyperirritable spots in skeletal muscle that are associated with a hypersensitive palpable nodule in a taut band.[1] Trigger point dry needling can be carried out at superficial or deep tissue. It is a technique that specifically targets myofascialtrigger points. They are thought to be due to an excessive release of acetylcholine from selected motor endplates. They can be used for Active and Latent myofascial trigger points.</p>
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

export default DryNeedling;
