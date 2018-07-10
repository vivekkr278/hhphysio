import React, { Component } from 'react';
import AccordionItem from './AccordionItem'

class Accordion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: this.props.sampleQuestions,
      };
      this.renderQuestion = this.renderQuestion.bind(this);
    }
    renderQuestion(key) {
      return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }
    render() {
      return(
        <div style={{width:"100%",textAlign:"center",justifyContent:"center"}}>
          <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
        </div>    
      )
    }
  }
  export default Accordion;