import React, { Component } from "react";
import { Link } from "react-router-dom";

class Planter extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div id="Planter" className="pageContainer">
        <div id="content" role="main" className="content-area">
          <section className="section dark planter-first-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row row-collapse">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1>
                      <span>Planter Fasciitis</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section planter-second-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="banner has-hover planter-banner" id="planter-banner">
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

          <section className="section planter-third-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      Breakthrough Plantar Fasciitis Treatment<br />GET LASTING
                      RELIEF WITH ADVANCED SHOCKWAVE THERAPY
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      Two things are true about Plantar Fasciitis, one of the
                      most common conditions we see and treat with great
                      success. First, the pain is persistent and compromises
                      your quality of life from first getting out of bed and
                      plaguing many throughout the day. And second, for all the
                      tricks and homemade remedies you may try, Plantar
                      Fasciitis simply won’t heal itself and requires
                      professional attention. If you’ve had it with foot
                      rollers, stretching your calves, wearing runners, and
                      more, there is a better approach and we’re here to help.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      As always, we don’t simply treat symptoms, our objective
                      is lasting relief, so we begin by looking for the root
                      cause. You may feel it in your feet, but that pain often
                      may be the result of core, hip or pelvic musculature
                      issues. With the source of the problem identified, we
                      attack it with state of the art technology, using
                      high-intensity sound waves from our latest generation
                      Shockwave Therapy device precisely directed to the
                      affected tissue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section planter-fourth-section">
            <div className="bg section-bg fill bg-fill  bg-loaded" />

            <div className="section-content relative">
              <div className="row" id="row-1732086110">
                <div className="col small-12 large-12">
                  <div className="col-inner text-center">
                    <h1 className="styles-section-title styles-selector">
                      HOW WE HELP
                    </h1>
                    <p style={{ marginBottom: "0px" }}>
                      The Plantar Fascia is what’s referred to as white tissue,
                      known for its poor blood supply. As a result, planta
                      fascia heals slowly and poorly on its own. Shockwave
                      Therapy has been proven to significantly speed recovery
                      for plantar fasciitis and tendon related problems.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      The good news is that today there is real hope for
                      longtime sufferers of plantar fasciitis. Our investment in
                      what is truly the most advanced shockwave therapy
                      equipment available anywhere, has proven to be nothing
                      less than life-changing. This enables us to dramatically
                      speed healing by achieving two critical objectives as
                      until now wasn’t possible:
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      Dissolving calcium deposits around the affected tissue and
                      neovascularization<br />Triggering new blood vessel
                      formation in the tissue.
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                      The result is a dramatic increase in the supply of fresh
                      blood and that enables better, faster healing. It’s time
                      to put an end to suffering and we’ll make it happen by
                      combining the identification of the root cause of the
                      problem, with advanced Shockwave Therapy to get you on the
                      way to recovery.
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

export default Planter;
