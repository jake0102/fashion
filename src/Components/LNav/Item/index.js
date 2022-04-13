import { useContext } from 'react'

import { ContentsContext } from '../../ContentsProvider'

function Item(props) {

    const contents = useContext(ContentsContext)

    return (
        <div className="LNav-container-nav-item" onClick={() => contents.handleChangeContents(`${props.myClick}`)}>
            <img src={props.myImg}/>
            <span>{props.myTitle}</span>
        </div>
    )
}

export default Item