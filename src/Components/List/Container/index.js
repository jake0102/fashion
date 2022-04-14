import { useEffect, useRef } from "react"

import Item from '../Item'

function Container(props) {

    const ContainerRef = useRef()

    useEffect(()=>{

        fetch(`http://localhost:3000/${props.link}`)
            .then((response) => {
                return response.json()
            })
            .then((myJson) => {
                const items = myJson.map((item)=>{
                    return item
                })

                return items
            })
            .then((items) => {
                const html = items.map(item => (
                    `<div class="List-container-main-item" 
                        key=${item.id}
                    >
                        <img src="${item.img}" />
                        <div class="List-container-main-item-title">
                            <div class="List-container-main-item-price">
                                ${item.des}
                            </div>

                            <div class="List-container-main-item-rating">
                                <span>${item.rating}</span> / 5 rating
                            </div>

                            <div class="List-container-main-item-choice">
                                ${item.recommend === true ? 'Recommended' : '' }
                            </div>
                        </div>
                    </div>`
                ))

                ContainerRef.current.innerHTML = html.join('')
            })
        
        // Cleanup function
        return () => {

        }
    }, [])

    return (
        <div className="List-container-main">
            <div className="myRow" ref={ContainerRef}>
                
            </div>
        </div>
    )
}

export default Container