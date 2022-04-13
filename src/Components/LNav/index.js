import thunder from '../img/thunder.png'
import clothing from '../img/clothing.png'
import shoes from '../img/shoes.png'
import accessories from '../img/accessories.png'
import activewear from '../img/activewear.png'
import gift from '../img/gift.png'
import ring from '../img/ring.png'

import Item from './Item'

function LNav() {
    return (
        <div className="LNav">
            <div className="LNav-container">
                <div className="LNav-container-logo">
                    Yashion
                </div>

                <div className="LNav-container-title">
                    Explore
                </div>

                <div className="LNav-container-nav">
                    <Item myImg={thunder} myTitle="New In" myClick="new"/>

                    <Item myImg={clothing} myTitle="Clothing" myClick="clothing"/>

                    <Item myImg={shoes} myTitle="Shoes" myClick="shoes"/>

                    <Item myImg={accessories} myTitle="Accessories" myClick="accessories"/>

                    <Item myImg={activewear} myTitle="Active wear" myClick="active"/>

                    <Item myImg={gift} myTitle="Gifts & Living" myClick="gift"/>

                    <Item myImg={ring} myTitle="Inspiration" myClick="inspiration"/>
                </div>
            </div>
        </div>
    )
}

export default LNav