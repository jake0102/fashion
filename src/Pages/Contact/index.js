import { useEffect } from "react"

function Contact() {

    useEffect(()=>{

    fetch('')
        .then((response) => {
            return response.json()
        })
        .then((myJson) => {
            console.log(myJson)
        })

        // Cleanup function
        return () => {

        }
    })

    return (
        <div>
            <h1>Contact page</h1>
        </div>
    )
}

export default Contact