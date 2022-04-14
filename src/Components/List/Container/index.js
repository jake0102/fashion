import { useEffect, useRef } from "react"

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
                        ${item.des}
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