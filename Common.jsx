import React from "react";
import { Link } from "react-router-dom";

const Common = (prop) =>{
    return(
        <React.Fragment>
        <section id="Header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                    <div className="col-lg-8 order-1 order-lg-1">
                    <div className="first-bg">
                    <img src={prop.image1} className="img-fluid animated" style={{width: '70%'}} alt="home-image" />
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
                                <h3>Sign <strong className="set-c">Up</strong></h3>
                              
                            </div>
                               </div>
                               <div className="col-lg-12">
                                <div className="btn-sets">
                                 <div className="btn-n">
                                 <button type="button" style={{outline: 'none',boxShadow: 'none',marginTop: '8%'}} class="btn btn"> <i class="fa fa-google" aria-hidden="true"></i><h6> Sign With a Google</h6></button>
                                 <p>OR SIGN WITH EMAIL</p>
                                 </div>
                                </div>
                            </div>
                          <div className="container-fluid">
                          <div className="col-lg-12 order-1 order-lg-1" style={{display: 'flex',justifyContent: 'center'}}>
                                <div className="forms-set">
                                <form action="">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="First Name" class="form-control" id="exampleInputFirstName" aria-describedby="FirstName" placeholder="Ajay" required=""/>
                                  
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input type="Last Name" class="form-control" id="exampleInputLastName" placeholder="Jangid" required=""/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="Email" class="form-control" id="exampleInputEmail1" placeholder="Ajay@example.com" required=""/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Create a Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="admin1234" required=""/>
                                    <small id="emailHelp" class="form-text text-muted">Password must be at least 8 characters long.</small>
                                    
                                </div>
                              
                               <div className="btn-s">
                               <button type="submit" class="btn btn-" style={{color: 'white',outline: 'none'}}>Sign Up</button>
                              
                               <div className="login-n">
                                <h6>Already a member?<Link to="/login" ><strong className="inner-s">Login</strong></Link></h6>
                            </div>
                               </div>
                            <div className="row">
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
export default Common;