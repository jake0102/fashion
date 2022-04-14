import { useEffect, useRef } from "react"

function Container(props) {

    const ContainerRef = useRef()

    useEffect(()=>{

        fetch('http://localhost:3000/posts')
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
                    `<div class="List-container-main-item" key=${item.id}>${item.title}</div>`
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

    // switch(props.myNum){
    //     case 4:
    //         return (
    //             <div className="List-container-main">
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //             </div>
    //         )
    //     case 3:
    //         return (
    //             <div className="List-container-main">
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //             </div>
    //         )
    //     case 2:
    //         return (
    //             <div className="List-container-main">
    //                 <div className="List-container-main-item"></div>
    //                 <div className="List-container-main-item"></div>
    //             </div>
    //         )
    //     case 1:
    //         return (
    //             <div className="List-container-main">
    //                 <div className="List-container-main-item"></div>
    //             </div>
    //         )
    // }
}

export default Container