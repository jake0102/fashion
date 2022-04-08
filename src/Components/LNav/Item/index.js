function Item(props) {
    return (
        <div className="LNav-container-nav-item">
            <img src={props.myImg}/>
            <span>{props.myTitle}</span>
        </div>
    )
}

export default Item