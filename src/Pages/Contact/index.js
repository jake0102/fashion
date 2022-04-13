import { useEffect, useState } from "react"

function Contact() {

    useEffect(()=>{

        fetch('http://localhost:3000/posts')
            .then((response) => {
                return response.json()
            })
            .then((myJson) => {
                myJson.map((item) => {
                    console.log(item);
                })
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