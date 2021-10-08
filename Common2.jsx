import React from "react";
import { Link } from "react-router-dom";

const Common2 = (prop) =>{
    return(
        <React.Fragment>
        <section id="Header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                    <div className="col-lg-8 order-1 order-lg-1">
                    <div className="first-bg">
                    <img src={prop.image} className="img-fluid animated" style={{width: '80%'}} alt="home-image" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-1">
                        <div className="second-bg">
                           <div className="row mx-auto">
                               <div className="col-lg-12">
                               <div className="login-page">
                                <h3>Welcome <strong className="set-c">Back</strong></h3>
                              
                            </div>
                               </div>
                               <div className="col-lg-12">
                                <div className="btn-set">
                                 <div className="btn-n">
                                 <button type="button" style={{outline: 'none',boxShadow: 'none'}} class="btn btn"> <i class="fa fa-google" aria-hidden="true"></i><h6> Login With a Google</h6></button>
                                 <p>OR LOGIN WITH EMAIL</p>
                                 </div>
                                </div>
                            </div>
                          <div className="container-fluid">
                          <div className="col-lg-12 order-1 order-lg-1" style={{display: 'flex',justifyContent: 'center'}}>
                                <div className="forms-set">
                                <form action="">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ajay@example.com" required=""/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="admin1234" required=""/>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                               <div className="btn-s">
                               <button type="submit" class="btn btn-" style={{color: 'white',outline: 'none'}}>Submit</button>
                              
                               <div className="login-n">
                                <h6>Don't have an account get?<Link to="/sigin" ><strong className="inner-s">Sign Up</strong></Link></h6>
                            </div>
                               </div>
                            <div className="row" style={{marginTop: '7%'}}>
                                <div className="col-lg-5 col-md-5 col-5">
                                    <hr></hr>
                                </div>
                                <div className="col-lg-2 col-md-2 col-2" style={{lineHeight: '4rem',}}>
                                  <h6 className="divder-text" style={{lineHeight: '2rem'}}>Or</h6> 
                                </div>
                                <div className="col-lg-5 col-md-5 col-5">
                                    <hr></hr>
                                </div>
                            </div>
                                </form>
                                </div>
                               
                            </div>
                          
                          </div>
                        <div className="col-lg-12">
                            <div className="s-links">
                                <ul className="social-icons">
                                    <li className="social-set">
                                    <Link to=" /"><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="social-set2">
                                    <Link to="/"> <i class="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="social-set3">
                                    <Link to="/">  <i class="fa fa-twitter-square" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="social-st4">
                                    <Link to="/"><i class="fa fa-envelope-o" aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                           </div>
                        </div>
                    </div>
                   
                    </div>
                </div>
            </div>
        </div>
        </section>
        </React.Fragment>
    )
}
export default Common2;