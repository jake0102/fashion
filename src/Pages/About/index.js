import { useState, useEffect } from 'react'

function About() {

    const [name, setName] = useState('ogino')

    useEffect(()=>{

        console.log(name)

    }, [name])

    return (
        <div>
            <button
                onClick={() => setName('quan')}
            >
                Click
            </button>
        </div>
    )
}

export default About