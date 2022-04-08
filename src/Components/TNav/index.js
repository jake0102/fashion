import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

function TNav() {
    return (
        <div className="TNav">
            <div className="TNav-container-logo">
                Yashion
            </div>

            <div className="TNav-search">
                <FontAwesomeIcon icon={faQuestion} />
                <input type="text" placeholder="Search..." spellCheck={false}/>
            </div>

            <div className="TNav-nav">
                <div className="TNav-nav-bar">
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className="TNav-nav-item">
                    <Link to="/">Products</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/about">About us</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TNav