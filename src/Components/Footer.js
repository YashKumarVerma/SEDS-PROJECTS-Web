import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,Link,Route, Switch } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <>
                 <div class="jumbotron" style={{color:"white",marginBottom:"0px",width:"100%",backgroundColor:"#070A1A"}}>

                            <div class="row justify-content-center ">

                                <div class="col-md-8 col-12 mt-5">
                                    <p style={{lineHeight:"1.7rem",textAlign:"justify",margin:"0 10px 0 10px",wordSpacing:"2.5px"}}>Student's for the Exploration and Development of Space (SEDS) is an international student organisation.
                                     The headquarters of SEDS-India is SEDS-VIT. It comprises of various divisions,
                                      to ensure growth and development in various fields of space sciences with an amazing expertise.</p>
                                </div>

                            </div>
                            <br />

                            <div class="row pb-3">

                                <div class="col-md-12">

                                    <div style={{width:"100%",textAlign:"center",display:"inline-block",color:"white"}}>
                                        <Router>
                                          <span className="mr-4"><Link to="/instagram" ><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/facebook" ><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/linkedin" ><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>
                                          <span className="mr-4"><Link to="/youtube" ><FontAwesomeIcon icon={['fab', 'youtube']} size="2x"style={{color:"white"}} alt="instagram"/></Link></span>

                                          <Switch>
                                            <Route exact path='/instagram' component={() => { window.location.href = 'https://instagram.com/sedsvit.projects?igshid=7ra3dgayhwll';return null;}}/>
                                            <Route exact path='/facebook' component={() => { window.location.href = 'https://www.facebook.com/sedsvit.projects/';return null;}}/>
                                            <Route exact path='/linkedin' component={() => { window.location.href = 'https://www.linkedin.com/company/sedsvit-projects';return null;}}/>
                                            <Route exact path='/youtube' component={() => { window.location.href = 'https://www.youtube.com/channel/UCvD51YDPQT0Vs3r_Fcthurw';return null;}}/>
                                          </Switch>
                                        </Router>

                                    </div>

                                </div>

                            </div>
                            <Router>
                                <div class="footer-copyright text-center py-3" style={{width:"100%",marginBottom:"0px"}} >Made with <span role="img">💖</span> by SEDS VIT PROJECTS x<span><Link to="/vjk"> &nbsp;VJK</Link></span>
                                </div>
                                <Switch>
                                <Route exact path='/vjk' component={() => { window.location.href = 'https://instagram.com/v.j._karthik';return null;}}/>
                                </Switch>
                            </Router>

                            </div>
            </>
        )
    }
}

export default Footer
