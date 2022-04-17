import { useContext, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faQuestion, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

// Files
import { FuncContext } from '../../Pages/Product'
import { ContentsContext } from '../ContentsProvider'

function MModal(props) {

    let s

    props.show === false ? s = 'none' : s = 'block' 

    const values = useContext(FuncContext)

    const contents = useContext(ContentsContext)

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

    const modalRef = useRef()

    return (
        <div className="MModal" style={{display: `${s}`}} ref={modalRef}>
            <div className="MModal-nav">
                <div className="MModal-nav-bar" onClick={() => values.handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            <div> 
                {/* Search */}
                <div className="MModal-search">
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

                                    modalRef.current.style.display = "none"
                                }
                            }
                        }
                    />
                </div>

                <div className="MModal-nav-item" 
                    onClick={
                        () => {
                            contents.handleChangeContents('back')

                            modalRef.current.style.display = "none"
                        }
                    }
                >
                    Home
                </div>

                <div className="MModal-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="MModal-nav-item">
                    <Link to="/register">Register</Link>
                </div>

                <div className="MModal-nav-item">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>

                <div className="MModal-nav-item">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
        </div>
    )
}

export default MModal