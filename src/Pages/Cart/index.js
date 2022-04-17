import { useContext, useEffect } from 'react'

import { ContentsContext } from '../../Components/ContentsProvider'

function Cart() {

    const contents = useContext(ContentsContext)

    useEffect(()=>{

        console.log(contents.item)

    }, [contents.item])

    return (
        <div>
            asldjkas
        </div>
    )
}

export default Cart