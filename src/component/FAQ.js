import React, { Component } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const sampleQuestions = {
  question1: {summary:'How long are appointments?', answer:'Appointments typically last between 30 and 40 minutes.'},
  question2: {summary:'Is a referral from a doctor needed?', answer:'No.If we determine that your condition requires medical attention, we’ll refer you .'},
  question3: {summary:'What should I wear?', answer:'Wear comfortable loose-fitting clothing as we’ll examine the affected area so please wear clothing that allows for this. For leg conditions, it is a good idea to bring shorts.'},
  question4: {summary:'What types of treatments do you perform?', answer:'Specialized, one-on-one treatments encompass a wide range of modalities including Electrotherapeutic modalities, taping, and acupuncture. These are explained in the Services portion of the website, and may involve manipulation, mobilization, stretching, muscle strengthening, postural realignment and more.'},
  question5: {summary:'How many treatments will I need?', answer:'Because every patient’s situation and treatment plan is built for you, your physiotherapist will discuss what is anticipated after your first appointment and will be reassessed after each visit.On average, patients require 2-3 treatments.'},
  question6: {summary:'Will I be required to do anything between treatments?', answer:'Yes. With the root cause of your condition identified, we’ll advise steps to help speed your recovery and ultimately prevent recurrence. This may be in the form of gentle exercises or simply changing your posture.'},
  question7: {summary:'Will I experience discomfort after treatment?', answer:'This varies with the individual Some people may experience some short-term discomfort which quickly subsides. Your physiotherapist will take this into account during your treatment and advise what to expect and how to minimize discomfort and assist healing.'},
  question8: {summary:'Is physiotherapy right for me?', answer:'Let’s talk about it.  Get the conversation started with a call to +91-7204920259. With a brief chat I’ll tell you if a physiotherapy assessment make sense and arrange a convenient time for you.'}
};

class FAQ extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    window.scrollTo(0, 0)
    return (
      <div id="FAQ" className="pageContainer">
        <div id="content" role="main" class="content-area">
          <section class="section dark faq-first-section">
            <div class="bg section-bg fill bg-fill  bg-loaded" />

            <div class="section-content relative">
              <div class="row row-collapse">
                <div class="col small-12 large-12">
                  <div class="col-inner text-center">
                    <h1>
                      <span>FAQ</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section faq-third-section">
            <Accordion sampleQuestions={sampleQuestions}></Accordion>
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

export default FAQ;
