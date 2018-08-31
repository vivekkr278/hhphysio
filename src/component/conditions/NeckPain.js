import React, { Component } from "react";
import { Link } from "react-router-dom";

class NeckPain extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div id="NeckPain" className="pageContainer">
        <div id="content" role="main" className="content-area">
          <section className="section dark neck-pain-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>NECK PAIN</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section neck-pain-second-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div
                className="banner has-hover neck-pain-banner"
                id="neck-pain-banner"
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

          <section className="section neck-pain-third-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      Put an End to Nagging Neck Pain<br /> EFFECTIVE TREATMENT
                      FOR AN ALL TOO COMMON AILMENT
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      Neck pain is often described as the curse of modern life –
                      the result of hours of driving and hunching over
                      workstations – and afflicts countless millions. The good
                      news is that with proper treatment, you need not suffer
                      endlessly.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      We identify the sources, and then Chartered
                      Physiotherapists design plans to treat the root cause,
                      relieve your pain, restore natural movement and prevent
                      recurrences. There are many causes, but most all can be
                      treated efficiently and effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section neck-pain-fourth-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row" id="row-1935858396">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      Causes of Neck Pain
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      <strong>Muscle Strain - </strong>
                      This is seen in aches and stiffness to the upper arms and
                      forearms. Hooting pain into the hand.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      <strong> Pinched Nerves - </strong>
                      Manifested by numbness, weakness and pain in the hands and
                      nerves, and the result of nerve entrapments.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      <strong>Whiplash - </strong>
                      Sudden movements of the head, from car accidents, athletic
                      injuries, work related injuries and more.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      <strong>Soft Tissue Abnormality -</strong>
                      Abnormalities in the soft tissues, muscles, ligaments and
                      nerves, as well as bones and joints. Pain is experiences
                      in the upper back, shoulders and arms.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      <strong> Wear and Tear - </strong>
                      The accumulated stresses and trauma of life over time,
                      resulting in degenerative changes of the spine, stiffness
                      and reduced mobility.
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

export default NeckPain;
