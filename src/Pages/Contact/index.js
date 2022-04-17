import Ogino from "../../Components/ogino_request"
import A from "../../Components/Ogino_a"

import { Link } from 'react-router-dom'

import home from '../../Components/img/home.png'

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact-container">
                <div className="Contact-container-back">
                    <Link to="/">
                        {/* <img src={home}/> */}
                        Yashion
                    </Link>
                </div>

                <div className="Contact-container-nav">
                    <div className="Contact-container-nav-contact">
                        <span>/ Contact</span>

                        <div className="Contact-container-nav-contact-hover">
                            You was here!
                        </div>
                    </div>

                    <div className="Contact-container-nav-reg">
                        <span>/ Register</span>

                        <Link to="/register">
                            <div className="Contact-container-nav-reg-hover">
                                Go!
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="Contact-container-form">

                    {/* Name */}
                    <div className="Contact-container-form-name">
                        {/* First name */}
                        <div className="Contact-container-form-name-f">
                            <div>First name</div>
                            <div>
                                <input spellCheck={false}/>
                            </div>
                        </div>

                        {/* Last name */}
                        <div className="Contact-container-form-name-l">
                            <div>Last name</div>
                            <div>
                                <input spellCheck={false}/>
                            </div>
                        </div>
                    </div>

                    {/* Mail */}
                    <div className="Contact-container-form-mail">
                        <div>E-mail</div>
                        <div>
                            <input spellCheck={false}/>
                        </div>
                    </div>

                    {/* phone */}
                    <div className="Contact-container-form-phone">
                        <div>Phone number</div>
                        <div>
                            <input spellCheck={false}/>
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="Contact-container-form-comment">
                        <div className="Contact-container-form-comment-title">Comment</div>
                        <div>
                            <textarea rows="5" spellCheck={false}/>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="Contact-container-form-submit">
                        <div className="Contact-container-form-submit-btn">
                            <span>Submit</span>

                            <div className="Contact-container-form-submit-btn-hover">
                                Send!
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="Contact-container-poli">
                    Copyright © 2022 Jake Inc. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Contact