import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShoulderPain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.scrollTo(0, 0)
    return (
      <div id="BackPain" className="pageContainer">
        <div id="content" role="main" class="content-area">
          <section class="section dark shoulder-pain-first-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row row-collapse">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1>
                      <span>Shoulder Pain</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section shoulder-pain-second-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div
                class="banner has-hover shoulder-pain-banner"
                id="shoulder-pain-banner"
              >
                <div class="banner-inner fill">
                  <div class="banner-bg fill">
                    <div class="bg fill bg-fill  bg-loaded" />
                    <div class="overlay" />
                  </div>
                  <div class="banner-layers container">
                    <div class="fill banner-link" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section shoulder-pain-third-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      Restore Natural Shoulder Movement <br />TREATMENT FOR THE
                      ROOT CAUSES OF SHOULDER PAIN.
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      Painful shoulder conditions that are caused by injuries
                      affect not only the shoulder joint, but the muscles,
                      tendons, ligaments and cartilage that normal movement of
                      our shoulders and arms impacts.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      No other body part can do more, moves more and is as
                      depended upon, than the arm, and because of this, injuries
                      and condition that limit the arm and shoulder are not only
                      some of the most painful, but also frustrating and
                      all-consuming.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      Because the nerves that supply the shoulder and arms
                      originate from the neck and the upper spine, our
                      practitioners assess and diagnose shoulder pain to
                      determine if Vertebral Dysfunction is the primary source
                      or a significant contributor to shoulder pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section shoulder-pain-fourth-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row" id="row-1732086110">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      CONDITIONS WE HELP WITH
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      Frozen Shoulder<br />Chronic Shoulder pain and Stiffness<br />Shoulder
                      Muscle Spams<br />Arthritis of the Shoulder<br />Rotator
                      Cuff tears and strains<br />Shoulder Impingement Syndrome<br />AC
                      Joint injuries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section shoulder-pain-fifth-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row" id="row-1935858396">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      How We Treat Shoulder Pain
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      We begin with a full physical, orthopaedic and
                      neurological examination, focusing on the shoulder,
                      cervical and thoracic spine, including range of motion and
                      muscle strength test. If necessary, additional, more
                      specialized diagnostics including X-Ray, Ultrasound and
                      MRI scans may be performed.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      In every case, after the diagnosis, treatment of your
                      shoulder is rendered by an experienced practitioner with
                      goals of reliving pain, reducing inflammation and
                      restoring normal function and movement.
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

export default ShoulderPain;
