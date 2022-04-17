import { useState } from 'react'
import Ogino from '../ogino'

function About() {

    const [show, setShow] = useState(false)

    return (
        <div>
            <button
                onClick={() => setShow(!show)}
            >
                Click
            </button>

            {show && <Ogino />}
        </div>
    )
}

export default About