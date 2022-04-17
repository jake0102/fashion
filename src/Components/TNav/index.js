// React methods
import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser, faCookieBite, faBell } from '@fortawesome/free-solid-svg-icons'

// Files
import { FuncContext } from '../../Pages/Product'
import { ContentsContext } from '../ContentsProvider'

// Func

function TNav() {

    const values = useContext(FuncContext)

    const contents = useContext(ContentsContext)

    let ani

    values.scaleAni === true ? ani = 'scale8Animation' : ani = ''

    useEffect(()=>{

        switch (contents.search) {
            case 'tshirt':
                contents.handleChangeContents('tshirt')
                break;
            case 'shoes':
                contents.handleChangeContents('shoes')
                break;
            case 'one piece':
                contents.handleChangeContents('onepiece')
                break;
            case 'active':
                contents.handleChangeContents('active')
                break;
            case 'autumn':
                contents.handleChangeContents('autumn')
                break;
            case 'summer':
                contents.handleChangeContents('summer')
                break;
            case 'accessories':
                contents.handleChangeContents('accessories')
                break;
            case 'sale shoes':
                contents.handleChangeContents('saleshoes')
                break;
            case 'new':
                contents.handleChangeContents('new')
                break;
            case 'clothing':
                contents.handleChangeContents('clothing')
                break;
            case 'gift':
                contents.handleChangeContents('gift')
                break;
            case 'inspiration':
                contents.handleChangeContents('inspiration')
                break;
            default:
                break;
        }

    }, [contents.search])

    const searchRef = useRef()

    return (
        <div className="TNav">
            <div className="TNav-container-logo" onClick={() => contents.handleChangeContents('back')}>
                Yashion
            </div>

            <div className="TNav-search">
                <FontAwesomeIcon icon={faQuestion} />
                <input 
                    ref={searchRef}
                    type="text" 
                    placeholder="Search..." 
                    spellCheck={false} 
                    onKeyUp={
                        (e) => {
                            if(e.keyCode === 13){
                                contents.handleSearch(e)

                                searchRef.current.value = ""
                            }
                        }
                    }
                />
            </div>

            <div className="TNav-nav">
                <div className="TNav-nav-bar" onClick={() => values.handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                    {/* <div className={`TNav-nav-fake ${ani}`}></div> */}
                </div>


                <div className="TNav-nav-item" onClick={() => contents.handleChangeContents('back')}>
                    Home
                </div>

                <div className="TNav-nav-item">
                    <Link to="/about">About</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/register">Register</Link>
                </div>

                <div className="TNav-nav-item">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>

                <div className="TNav-nav-item">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
        </div>
    )
}

export default TNav