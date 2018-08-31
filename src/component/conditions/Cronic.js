import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cronic extends Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div id="Cronic" className="pageContainer">
        <div id="content" role="main" className="content-area">
          <section className="section dark cronic-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>Chronic Headaches and Migraines</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section cronic-second-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="banner has-hover cronic-banner" id="cronic-banner">
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

          <section className="section cronic-third-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      Relief for Chronic Headache Sufferers<br />TREATING THE
                      CAUSES OF HEADACHES AND MIGRAINES
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      One of the most common, painful and thoroughly
                      debilitating conditions of all is chronic headaches and
                      migraines. We start by understanding what causes them,
                      assess and diagnose each individual condition, and create
                      a plan to manage the pain and get relief.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      Headaches can be caused by numerous factors but there is
                      always a cause. These included reduced blood supply to the
                      brain, referral from structures in the neck or dysfunction
                      from the skull itself. Any of these or a combination of
                      them and things quickly can go from bad to worse. There is
                      a secondary, physiological cause of headaches and
                      migraines. Misalignment of dysfunction of vertebra in the
                      top of neck causes inflammation and tension of the joints
                      and blood vessels at the base of the neck. When this
                      occurs, pain is quickly signaled and transferred up into
                      the skull.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section cronic-fourth-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row" id="row-1732086110">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      How We Help
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      Normal realignment and function of neck vertebrae can be
                      accomplished by gentle, yet specific adjustments to neck
                      and upper back. With normal alignment and function,
                      tension is removed, and with it the corresponding headache
                      and migraine symptoms reduced.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      Additionally, removing the tension reduces inflammation
                      around joints, muscles and blood vessels, and with that
                      decreased pain fibres are deactivated.
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

export default Cronic;
