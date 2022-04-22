import { useContext } from 'react'

import { ContentsContext } from '../ContentsProvider'


function MainContainer() {

    const contents = useContext(ContentsContext)

    return (
        <div className="MainContainer">
            {contents.content}
        </div>
    )
}

export default MainContainer