function Container(props) {
    switch(props.myNum){
        case 4:
            return (
                <div className="List-container-main">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>
            )
        case 3:
            return (
                <div className="List-container-main">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>
            )
        case 2:
            return (
                <div className="List-container-main">
                    <div className="List-container-main-item"></div>
                    <div className="List-container-main-item"></div>
                </div>
            )
        case 1:
            return (
                <div className="List-container-main">
                    <div className="List-container-main-item"></div>
                </div>
            )
    }
}

export default Container