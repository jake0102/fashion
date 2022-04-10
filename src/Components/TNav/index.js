// React methods
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

// Files
import { FuncContext } from '../../Pages/Product'
import styles from '../../App.scss'

// Func

function TNav() {

    const classes = clsx({
        [styles.scale8Animation]: true
    })

    const handleShow = useContext(FuncContext)

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
                <div className="TNav-nav-bar" onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                    <div className={`MModal-nav-fake ${classes}`}></div>
                </div>


                <div className="TNav-nav-item">
                    <Link to="/">Products</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/contact">Contact</Link>
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