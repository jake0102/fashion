function MModal(props) {

    let s

    props.show === false ? s = 'none' : s = 'block' 

    return (
        <div className="MModal" style={{display: `${s}`}}>

        </div>
    )
}

export default MModal