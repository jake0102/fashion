import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

// Files
import { FuncContext } from '../../Pages/Product'

function MModal(props) {

    let s

    props.show === false ? s = 'none' : s = 'block' 

    const handleShow = useContext(FuncContext)

    return (
        <div className="MModal" style={{display: `${s}`}}>
            <div className="MModal-nav">
                <div className="MModal-nav-bar" onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            <div> 
                <h2>Testing...</h2>
                <h3>Testing...</h3>
                <h4>Testing...</h4>
                <h5>Testing...</h5>
                <h6>Testing...</h6>
            </div>
        </div>
    )
}

export default MModal