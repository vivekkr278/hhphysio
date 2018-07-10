import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            navStyle:"",
            mobileNav:"none",
            mobIcon:"fa icon-menu",
            navServicesDropdownStyle:"nav-dropdown-default",
            navServicesArrowStyle:"fa fa-chevron-down",
            navConditionsDropdownStyle:"nav-dropdown-default",
            navConditionsArrowStyle:"fa fa-chevron-down"
        }
    }
    showMobileNav(){
        if(this.state.navStyle==""){
            this.setState({mobIcon:"fa",mobileNav:"block",navStyle:"mobile-nav-active"})
        }
        else{
            this.setState({mobIcon:"fa icon-menu",mobileNav:"none",navStyle:"",navConditionsDropdownStyle:"nav-dropdown-default",navServicesDropdownStyle:"nav-dropdown-default",navConditionsArrowStyle:"fa fa-chevron-down",navServicesArrowStyle:"fa fa-chevron-down"})
        }
    }
    toggleDropDown(value){
        if(value == "conditions"){
            if(this.state.navConditionsArrowStyle=="fa fa-chevron-down"){
                this.setState({
                    navConditionsDropdownStyle:"menu-item-active",
                    navConditionsArrowStyle:"fa fa-chevron-up"
                })
            }
            else{
                this.setState({
                    navConditionsDropdownStyle:"nav-dropdown-default",
                    navConditionsArrowStyle:"fa fa-chevron-down"
                })
            }
        }
        else if(value == "services"){
            if(this.state.navServicesArrowStyle=="fa fa-chevron-down"){
                this.setState({
                    navServicesDropdownStyle:"menu-item-active",
                    navServicesArrowStyle:"fa fa-chevron-up"
                })
            }
            else{
                this.setState({
                    navServicesDropdownStyle:"nav-dropdown-default",
                    navServicesArrowStyle:"fa fa-chevron-down"
                })
            }
        }
    }
    render() {
        return (
            <div className={this.state.navStyle} style={{height:139}}>
                <button type="button" id="mobile-nav-toggle" style={{visibility:this.state.mobIcon}} onClick={(e)=>{e.preventDefault();this.showMobileNav()}}><i className={this.state.mobIcon}></i></button>
                <div id="mobile-body-overly" style={{display:this.state.mobileNav}} onClick={(e)=>{e.preventDefault();this.showMobileNav()}}></div>
                <div>
                <nav id="mobile-nav">
              <ul className="" id="">
                <li id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-24 has-dropdown">
                <Link to="/" title="Healing Hands - Advanced Physiotherapy Clinic" rel="home"><span className="nav-top-link">Home</span></Link>
                </li>
                <li id="menu-item-25" className="menu-item menu-has-children menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-25 has-dropdown"><i className={this.state.navServicesArrowStyle} onClick={(e)=>{e.preventDefault();this.toggleDropDown("services");}}></i>
                  <a className="nav-top-link">Services
                  </a>
                  <ul className={this.state.navServicesDropdownStyle}>
                    <li id="menu-sub-item-1" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-1">
                      <a href="https://ratoathphysio.ie/conditions/back-pain/">Hands on Physiotherapy</a>
                    </li>
                    <li id="menu-sub-item-2" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-2">
                      <a href="https://ratoathphysio.ie/conditions/neck-pain/">Therapeutic taping</a>
                    </li>
                    <li id="menu-sub-item-3" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-3">
                      <a href="https://ratoathphysio.ie/conditions/chronic-headaches/">Dry Needling</a>
                    </li>
                    <li id="menu-sub-item-4" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-4">
                      <a href="https://ratoathphysio.ie/conditions/planter-fasciitis/">Physiotherapy Exercises</a>
                    </li>
                    <li id="menu-sub-item-5" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-5">
                      <a href="https://ratoathphysio.ie/conditions/shoulder-pain/">Biomechanical and ergonomic analysis</a>
                    </li>
                    <li id="menu-sub-item-6" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-6">
                      <a href="https://ratoathphysio.ie/conditions/chronic-headaches/">Electrotherapeutic modalities</a>
                    </li>
                    <li id="menu-sub-item-7" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-7">
                      <a href="https://ratoathphysio.ie/conditions/planter-fasciitis/">Cupping</a>
                    </li>
                    <li id="menu-sub-item-8" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-8">
                      <a href="https://ratoathphysio.ie/conditions/shoulder-pain/">Others</a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-26" className="menu-item menu-has-children menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-26 has-dropdown"><i className={this.state.navConditionsArrowStyle} onClick={(e)=>{e.preventDefault();this.toggleDropDown("conditions");}}></i>
                  <a className="nav-top-link">Conditions
                  </a>
                  <ul className={this.state.navConditionsDropdownStyle}>
                    <li id="menu-item-176" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-176">
                        <Link to="/back-pain"><span>Back Pain</span></Link>
                    </li>
                    <li id="menu-item-178" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-178">
                    <Link to="/neck-pain"><span>Neck Pain</span></Link>
                    </li>
                    <li id="menu-item-177" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-177">
                    <Link to="/chronic"><span>Chronic Headaches</span></Link>
                    </li>
                    <li id="menu-item-179" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-179">
                    <Link to="/planter"><span>Planter Fasciitis</span></Link>
                    </li>
                    <li id="menu-item-180" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-180">
                    <Link to="/shoulder-pain"><span>Shoulder Pain</span></Link>
                    </li>
                  </ul>
                </li>
                {/* <li id="menu-item-376" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-376">
                  <a href="https://ratoathphysio.ie/fees/" className="nav-top-link">Fees</a>
                </li> */}
                {/* <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-27">
                  <a href="https://ratoathphysio.ie/faq/" className="nav-top-link">Blog</a>
                </li> */}
                <li id="menu-item-270" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-270">
                <Link to="/faq"><span className="nav-top-link">FAQ</span></Link>
                </li>
                <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-28">
                <Link to="/contact"><span className="nav-top-link">Contact</span></Link>
                </li>
              </ul>
              </nav></div>
                <header id="header" className="header has-sticky sticky-jump">
                <div className="header-wrapper stuck">
                    <div id="top-bar" className="header-top ">
                    <div className="flex-row container">
                        <div className="flex-col hide-for-medium flex-left">
                        <ul className="nav nav-left medium-nav-center nav-small  nav-divided">
                            <li className="html custom html_topbar_left">
                            <span style={{fontFamily: "montreg", fontSize:"1.2em" , letterSpacing:"1.4px"}}>
                                <a href="tel:+917204920259">+91-7204920259</a>
                            </span>
                            </li>
                        </ul>
                        </div>

                        <div className="flex-col hide-for-medium flex-center">
                        <ul className="nav nav-center nav-small  nav-divided">
                        </ul>
                        </div>

                        <div className="flex-col hide-for-medium flex-right">
                        <ul className="nav top-bar-nav nav-right nav-small  nav-divided">
                            <li className="html custom html_nav_position_text">
                            
                                <Link className="button primary bookbutton" to="/book"><span>BOOK NOW</span></Link>   
                            
                            </li>
                        </ul>
                        </div>

                        <div className="flex-col show-for-medium flex-left">
                        <ul className="nav nav-small mobile-nav  nav-divided">
                            <li className="html custom html_topbar_left">
                            <span style={{fontFamily: "montreg", fontSize:"1em",letterSpacing:"1px",marginRight: "10px"}}>
                                <a href="tel:+917204920259">+91-7204920259</a>
                            </span>
                            </li>
                        </ul>
                        </div>
                        <div className="flex-col show-for-medium flex-right">
                        <ul className="nav top-bar-nav nav-right nav-small  nav-divided">
                            <li className="html custom html_nav_position_text">
                                <Link className="button primary bookbutton" to="/book"><span style={{fontSize: "0.9em"}}>BOOK NOW</span></Link>
                            </li>
                        </ul>
                        </div>

                    </div>
                    </div>
                    <div id="masthead" className="header-main ">
                    <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">

                        <div id="logo" className="flex-col logo">
                        <Link to="/" title="Healing Hands - Advanced Physiotherapy Clinic" rel="home">
                            <img src="./assets/images/healing-hands-icon.png" className="header_logo header-logo"
                            alt="Healing Hands" />
                        </Link>
                        </div>

                        <div className="flex-col hide-for-medium flex-left
                                flex-grow">
                        <ul className="header-nav header-nav-main nav nav-left  nav-spacing-xlarge nav-uppercase">
                        </ul>
                        </div>

                        <div className="flex-col hide-for-small flex-right">
                        <nav id="nav-menu-container">
                        <ul className="nav-menu header-nav header-nav-main nav nav-right  nav-spacing-xlarge nav-uppercase">
                            <li id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-24 has-dropdown">
                                <Link to="/" title="Healing Hands - Advanced Physiotherapy Clinic" rel="home"><span className="nav-top-link">Home</span></Link>
                            </li>
                            <li id="menu-item-25" className="menu-item menu-has-children menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-25 has-dropdown">
                            <a className="nav-top-link">Services
                            </a>
                            <ul className="nav-dropdown-default">
                                <li id="menu-sub-item-1" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-1">
                                <a href="https://ratoathphysio.ie/conditions/back-pain/">Hands on Physiotherapy</a>
                                </li>
                                <li id="menu-sub-item-2" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-2">
                                <a href="https://ratoathphysio.ie/conditions/neck-pain/">Therapeutic taping</a>
                                </li>
                                <li id="menu-sub-item-3" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-3">
                                <a href="https://ratoathphysio.ie/conditions/chronic-headaches/">Dry Needling</a>
                                </li>
                                <li id="menu-sub-item-4" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-4">
                                <a href="https://ratoathphysio.ie/conditions/planter-fasciitis/">Physiotherapy Exercises</a>
                                </li>
                                <li id="menu-sub-item-5" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-5">
                                <a href="https://ratoathphysio.ie/conditions/shoulder-pain/">Biomechanical and ergonomic analysis</a>
                                </li>
                                <li id="menu-sub-item-6" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-6">
                                <a href="https://ratoathphysio.ie/conditions/chronic-headaches/">Electrotherapeutic modalities</a>
                                </li>
                                <li id="menu-sub-item-7" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-7">
                                <a href="https://ratoathphysio.ie/conditions/planter-fasciitis/">Cupping</a>
                                </li>
                                <li id="menu-sub-item-8" className="menu-item menu-item-type-post_type menu-item-object-page menu-sub-item-8">
                                <a href="https://ratoathphysio.ie/conditions/shoulder-pain/">Others</a>
                                </li>
                            </ul>
                            </li>
                            <li id="menu-item-26" className="menu-item menu-has-children menu-item-type-post_type menu-item-object-page menu-item-has-children  menu-item-26 has-dropdown">
                            <a className="nav-top-link">Conditions</a>
                            <ul className="nav-dropdown-default">
                                <li id="menu-item-176" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-176">
                                <Link to="/back-pain"><span>Back Pain</span></Link>
                                </li>
                                <li id="menu-item-178" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-178">
                                <Link to="/neck-pain"><span>Neck Pain</span></Link>
                                </li>
                                <li id="menu-item-177" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-177">
                                <Link to="/cronic"><span>Chronic Headaches</span></Link>
                                </li>
                                <li id="menu-item-179" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-179">
                                <Link to="/planter"><span>Planter Fasciitis</span></Link>
                                </li>
                                <li id="menu-item-180" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-180">
                                <Link to="/shoulder-pain"><span>Shoulder Pain</span></Link>
                                </li>
                            </ul>
                            </li>
                            {/* <li id="menu-item-376" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-376">
                            <a href="https://ratoathphysio.ie/fees/" className="nav-top-link">Fees</a>
                            </li> */}
                            {/* <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-27">
                            <a href="https://ratoathphysio.ie/faq/" className="nav-top-link">Blog</a>
                            </li> */}
                            <li id="menu-item-270" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-270">
                            <Link to="/faq"><span className="nav-top-link">FAQ</span></Link>
                            </li>
                            <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page  menu-item-28">
                            <Link to="/contact"><span className="nav-top-link">Contact</span></Link>
                            </li>
                        </ul>
                        </nav>
                        </div>
                        <div className="flex-col show-for-medium flex-right">
                        <ul className="mobile-nav nav nav-right ">
                        </ul>
                        </div>

                    </div>

                    </div>
                    <div className="header-bg-container fill">
                    <div className="header-bg-image fill"></div>
                    <div className="header-bg-color fill"></div>
                    </div>
                </div>
                </header>
            </div>
        )
    }
}
export default Header;