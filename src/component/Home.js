import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    window.scrollTo(0, 0)
    return (
      <div id="App" className="pageContainer">
        <section className="top" style={{paddingLeft:0,paddingRight:0}}>
          <Slider {...settings}>
            <div className="slide1">
              <img src="./assets/images/pic1.jpg" />
              <div className="carousel carousel-1">
                <p />
              </div>
            </div>
            <div className="slide2">
              <img src="./assets/images/pic2.jpg" />
              <div className="carousel carousel-2">
                <p />
              </div>
            </div>
            <div className="slide3">
              <img src="./assets/images/pic3.jpg" />
              <div className="carousel carousel-3">
                <p />
              </div>
            </div>
            <div className="slide4">
              <img src="./assets/images/pic4.jpg" />
              <div className="carousel carousel-4">
                <p />
              </div>
            </div>
            <div className="slide5">
              <img src="../assets/images/pic5.jpg" />
              <div className="carousel carousel-5">
                <p />
              </div>
            </div>
          </Slider>
        </section>
        <section className="section dark home-section-first">
          <div className="bg section-bg fill bg-fill  bg-loaded" />

          <div className="section-content relative">
            <div className="row row-collapse">
              <div className="col small-12 large-12">
                <div className="col-inner text-center">
                  <h1>
                    <span>LASTING RELIEF, GUIDANCE AND SOLUTIONS</span>
                    <br />
                    <span>BEYOND MERELY TREATING SYMPTOMS</span>
                  </h1>
                  <h4>
                    <span style={{ letterSpacing: "3px" }}>
                      WE DISCOVER THE ROOT OF YOUR PROBLEM AND CORRECT IT
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="bg section-bg fill bg-fill  bg-loaded" />

          <div className="section-content relative">
            <div className="row home-section-second">
              <div className="col small-12 large-12">
                <div className="col-inner text-center">
                  <h1 className="styles-section-title">
                    A Holistic Approach to Health and Wellness
                  </h1>
                  <p
                    style={{
                      marginBottom: 0,
                      color: "#666666",
                      letterSpacing: "1px"
                    }}
                  >
                    What many sufferers of recurring pain and physical maladies
                    share is frustration with what seems like the endless
                    treatment of symptoms. For over a decade, the Ratoath
                    Physiotherapy team of Chartered Physiotherapists and
                    Practitioners have pioneered a better idea, blending
                    innovation with best practices to create custom, functional
                    neurology treatment plans. Built to deliver a sustainable
                    solution in-less time, our objective is more effective
                    treatment, not perpetual treatment. Because to us the mind
                    and body working together isn’t a fantasy, it’s our goal,
                    and how we change lives for the better.
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
    );
  }
}

export default Home;
