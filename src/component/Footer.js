import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <footer id="footer" className="footer-wrapper">
                    <section className="section dark footerSection">
                        <div className="bg section-bg fill bg-fill  bg-loaded">
                        </div>
                        <div className="section-content relative">
                            <div className="row">
                            <div className="col medium-6 small-12 large-3">
                                <div className="col-inner">
                                    <p style={{lineHeight: "1.5em"}}><span style={{fontFamily: "Open Sans", fontSize: "95%", fontWeight:"bold"}}>CONTACT US</span></p>
                                    <p style={{lineHeight: "1.5em"}}><span style={{fontSize: "85%"}}>Healing Hands</span><br /><span style={{fontSize: "85%"}}>64/2 Sarakki Main Road</span><br />
                                    {/*<span style={{fontSize: "85%"}}> Sarakki Nagar</span><br />*/}<span style={{fontSize: "85%"}}>1st Phase, JP Nagar, Bengaluru</span><br /><span style={{fontSize: "85%"}}>Karnataka 560078</span><br /></p>
                                    <p><a href="mailto:healinghandsblr@gmail.com">healinghandsblr@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="col medium-6 small-12 large-2">
                                <div className="col-inner">
                                    <p style={{lineHeight: "1.5em"}}><span style={{fontFamily: "Open Sans", fontSize: "95%",fontWeight:"bold"}}>INFO</span></p>
                                    <p style={{lineHeight: "1.5em",textTransform:"uppercase"}}><Link to="/"><span style={{fontSize: "85%"}}>about us</span></Link><br /><Link to="/services"><span style={{fontSize: "85%"}}>services</span></Link><br /><Link to="/conditions"><span style={{fontSize: "85%"}}>conditions</span></Link></p>
                                </div>
                            </div>
                            <div className="col medium-6 small-12 large-3">
                                <div className="col-inner">
                                    <p style={{lineHeight: "1.5em"}}><span style={{fontFamily: "Open Sans", fontSize: "95%",fontWeight:"bold"}}>FOLLOW US ON SOCIAL</span></p>
                                    <p style={{lineHeight: "1.5em",textTransform:"uppercase"}}><a href="https://www.facebook.com/HealinghandsBLR/"><span style={{fontSize: "85%"}}>facebook</span></a><br />
                                    <a href="https://www.instagram.com/healing_hands_blr/"><span style={{fontSize: "85%"}}>instagram</span></a><br />
                                    <a href="https://twitter.com/HealingHandsBLR"><span style={{fontSize: "85%"}}>twitter</span></a></p>
                                </div>
                            </div>
                            <div className="col medium-6 small-12 large-4">
                                <div className="col-inner">
                                    <p style={{lineHeight: "1.5em"}}><span style={{fontFamily: "Open Sans", fontSize: "95%",fontWeight:"bold"}}>OPENING TIMES</span></p>
                                    <p style={{lineHeight: "1.5em",textTransform:"uppercase"}}><span style={{fontSize: "75%"}}>Monday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span><br />Tuesday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span><br />Wednesday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span><br />Thursday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span><br />Friday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span><br />Saturday <span style={{float: "right",margin: "0 7%"}}>9 am – 1 pm & 4 pm - 9 pm</span></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* <a href="#top" className="back-to-top button invert plain is-outline hide-for-medium icon circle fixed bottom z-1 active" id="top-link"><i className="icon-angle-up"></i></a> */}
                </footer>
            </div>
        )
    }
}
export default Footer;