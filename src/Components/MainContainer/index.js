import { useContext } from 'react'

import { ContentsProvider, ContentsContext } from '../ContentsProvider'


function MainContainer() {

    const contents = useContext(ContentsContext)

    return (
        <div className="MainContainer">
            {contents.content}
        </div>
    )
}

export default MainContainer