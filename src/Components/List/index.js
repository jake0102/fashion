import BackToPHome from '../BackToPHome'
import Container from './Container'
import Nav from './Nav'
import Prev from './Prev'
import Next from './Next'

function List(props) {
    return (
        <div className="List">
            <div className="List-title">
                <img src={props.imgSrc} />

                <div>{props.myTitle}</div>
            </div>

            <Nav />

            <div className="List-container">
                <Prev />

                <Container link={props.myLink}/>

                <Next />
            </div>

            <BackToPHome />
        </div>
    )
}

export default List