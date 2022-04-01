import thunder from './thunder.png'
import clothing from './clothing.png'
import shoes from './shoes.png'
import accessories from './accessories.png'
import activewear from './activewear.png'
import gift from './gift.png'
import ring from './ring.png'

function LNav() {
    return (
        <div className="LNav">
            <div className="LNav-container">
                <div className="LNav-container-logo">
                    Y-Fas
                </div>

                <div className="LNav-container-title">
                    Explore
                </div>

                <div className="LNav-container-nav">
                    <div className="LNav-container-nav-item">
                        <img src={thunder}/>
                        <span>New In</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={clothing}/>
                        <span>Clothing</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={shoes}/>
                        <span>Shoes</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={accessories}/>
                        <span>Accessories</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={activewear}/>
                        <span>Activewear</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={gift}/>
                        <span>Gifts & Living</span>
                    </div>

                    <div className="LNav-container-nav-item">
                        <img src={ring}/>
                        <span>Inspiration</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LNav