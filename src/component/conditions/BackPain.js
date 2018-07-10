import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackPain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div id="BackPain" className="pageContainer">
        <div id="content" role="main" class="content-area">
          <section class="section dark back-pain-first-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row row-collapse">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1>
                      <span>BACK PAIN</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section back-pain-second-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div
                class="banner has-hover back-pain-banner"
                id="back-pain-banner"
              >
                <div class="banner-inner fill">
                  <div class="banner-bg fill">
                    <div class="bg fill bg-fill  bg-loaded" />
                    <div class="overlay" />
                  </div>
                  <div class="banner-layers container">
                    <div class="fill banner-link" />
                    <div class="text-box banner-layer x50 md-x0 lg-x10 y25 md-y80 lg-y75 res-text banner-text-box">
                      <div class="text dark">
                        <div class="text-inner text-center">
                          <h3>
                            <span style={{ letterSpacing: "3px" }}>
                              <strong>
                                RELIEF FROM RECURRING BACK PAIN – YOU DON’T HAVE
                                TO LET IT DEFINE YOUR LIFE
                              </strong>
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section back-pain-third-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      RELIEF FROM RECURRING BACK PAIN<br />YOU DON’T HAVE TO LET
                      IT DEFINE YOUR LIFE
                    </h1>
                    <p style={{marginBottom: "0px"}}>
                      The statistics tell the story – nearly 80% of us will
                      experience back pain at some point in our lives. The cause
                      can be from muscles, nerves, ligaments, discs and bones,
                      and whether temporary or chronic, it impacts the very
                      quality of our lives and our ability to function.
                    </p>
                    <p style={{marginBottom: "0px"}}>
                      We diagnose the injury, control and manage the pain
                      experienced from it, and establish a course of action
                      restoring normal movement and functionality as quickly as
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section back-pain-fourth-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row" id="row-1732086110">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      COMMON CAUSES OF BACK PAIN
                    </h1>
                    <p style={{marginBottom: "0px"}}>
                      There’s no single answer, but any combination of heavy
                      lifting, bending, or twisting can be that final straw that
                      damages muscles, ligaments or joints. The fact is that
                      while chronic pain over a prolonged period may be the
                      result of stressful impact of repetitive motions, at times
                      back pain flares up with no apparent cause. In every
                      situation, we’ll work to find the root cause and create a
                      treatment regimen to prevent recurrences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section back-pain-fifth-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row" id="row-1935858396">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1 class="styles-section-title styles-selector">
                      INJURIES THAT CAUSE BACK PAIN
                    </h1>
                    <p style={{marginBottom: "0px"}}>
                      <strong>Muscle Strain - </strong>
                      Fatigue and back pain from poor posture to lifting heavy
                      loads.
                    </p>
                    <p style={{marginBottom: "0px"}}>
                      <strong> Poor Posture - </strong>
                      Over time placing excessive load on the spine.
                    </p>
                    <p style={{marginBottom: "0px"}}>
                      <strong>Bulging Discs - </strong>
                      These spinal shock absorbers reduce stress, but are
                      susceptible to sudden movements, postural stress, and are
                      manifested inflammation and radiating pain, numbness from
                      irritation of nearby spinal nerves.
                    </p>
                    <p style={{marginBottom: "0px"}}>
                      <strong>
                        Facet Joint Sprain - 
                      </strong>
                      These joints connect each vertebra above and below, and
                      can be sprained, causing inflammation, pain and limiting
                      movement.
                    </p>
                    <p style={{marginBottom: "0px"}}>
                      <strong> Sciatica - </strong>
                      Running from your lower back, down your thigh and calf to
                      your foot, if the Sciatic nerve is compressed,
                      debilitating lower back pain can radiate to the leg or
                      buttock, causing uncomfortable pins and needles, numbness,
                      muscle spasms, weakness and reduced flexibility.
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
                    <span>
                      FEELING BETTER IS A CLICK AWAY
                    </span>
                  </h1>
                  <h4>
                    <span style={{letterSpacing: "3px"}}>
                      BOOK AN APPOINTMENT OR GET THE CONVERSATION STARTED
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row row-collapse book-now-button-section">
              <div className="col small-12 large-12">
                <div className="col-inner text-center dark">
                    <Link className="button primary bookbutton" to="/book"><span>BOOK NOW</span></Link>
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

export default BackPain;
