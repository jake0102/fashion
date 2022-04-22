import { useContext } from 'react'

import { ContentsContext } from '../ContentsProvider'

function Confirm(){

    const contents = useContext(ContentsContext)

    let s

    contents.conf === false ? s = 'none' : s = 'flex'

    return(
        <div className="List-container-main-item-add-confirm" style={{display: `${s}`}}>
            <div className="List-container-main-item-add-confirm-item" >
                <div className="List-container-main-item-add-confirm-item-ques">
                    Add to cart?
                </div>

                <div className="List-container-main-item-add-confirm-item-btn">
                    <div className="List-container-main-item-add-confirm-item-btn-cancel">
                        <div
                            onClick={() => contents.handleCancel()}
                        >
                            Cancel
                        </div>
                    </div>

                    <div className="List-container-main-item-add-confirm-item-btn-add">
                        <div
                            onClick={() => contents.handleAdd()}
                        >
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm