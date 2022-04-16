import { Link } from 'react-router-dom'

import home from '../../Components/img/home.png'
import google from '../../Components/img/google.png'
import facebook from '../../Components/img/facebook.png'
import github from '../../Components/img/github.png'
import user from '../../Components/img/user.png'

function Register() {

    return (
        <div className="Register">
            <div className="Register-container">
                <div className="Reg-container-back">
                    <Link to="/">
                        <img src={home}/>
                        {/* / Product */}
                    </Link>
                </div>

                <div className="Reg-container-nav">
                    <div className="Reg-container-nav-contact">
                        <span>/ Contact</span>

                        <Link to="/contact">
                            <div className="Reg-container-nav-contact-hover">
                                Go!
                            </div>
                        </Link>
                    </div>

                    <div className="Reg-container-nav-reg">
                        <span>/ Register</span>

                        
                        <div className="Reg-container-nav-reg-hover">
                            You was here!
                        </div>
                    </div>
                </div>

                <div className="Reg-container-main">
                    <div className="Reg-container-main-items">
                        <div className="Reg-container-main-item">
                            <div className="Reg-container-main-item-icon">
                                <img src={google} />    
                            </div>
                            <div className="Reg-container-main-item-title">Google</div>
                        </div>
                        <div className="Reg-container-main-item">
                            <div className="Reg-container-main-item-icon">
                                <img src={facebook} />    
                            </div>
                            <div className="Reg-container-main-item-title">Facebook</div>
                        </div>
                        <div className="Reg-container-main-item">
                            <div className="Reg-container-main-item-icon">
                                <img src={github} />    
                            </div>
                            <div className="Reg-container-main-item-title">Github</div>
                        </div>
                        <div className="Reg-container-main-item">
                            <div className="Reg-container-main-item-icon">
                                <img src={user} />    
                            </div>
                            <div className="Reg-container-main-item-title">Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register