import { useContext } from 'react'

import { ContentsContext } from '../MainContainer'

function BackToPHome() {

    const contents = useContext(ContentsContext)

    return (
        <button 
            onClick={() => contents.handleChangeContents('back')}
        >
            Back
        </button>
    )
}

export default BackToPHome