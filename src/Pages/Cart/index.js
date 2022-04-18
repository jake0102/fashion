import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser, faCookieBite, faBell } from '@fortawesome/free-solid-svg-icons'

import { ContentsContext } from '../../Components/ContentsProvider'

function Cart() {

    const contents = useContext(ContentsContext)

    useEffect(()=>{

        console.log(contents.item)

    }, [contents.item])

    return (
        <div className="Cart">
            <div className="Cart-header">
                <div className="Cart-container-back">
                    <Link to="/">
                        Yashion
                    </Link>
                </div>

                <div className="Cart-container-nav">

                    <div className="Cart-nav-item">
                        <Link to="/">Home</Link>
                    </div>

                    <div className="Cart-nav-item">
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="Cart-nav-item">
                        <Link to="/register">Register</Link>
                    </div>

                    <div className="Cart-nav-item">
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </div>

                    <div className="Cart-nav-item">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </div>
            </div>

            <div className="Cart-body">
                
            </div>
        </div>
    )
}

export default Cart