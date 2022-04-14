function Item(props) {
    return (
        <div class="List-container-main-item" 
            key={props.myId}
        >
            <img src="${item.img}" />
            <div class="List-container-main-item-title">
                <div class="List-container-main-item-price">
                    {props.myPrice}
                </div>

                <div class="List-container-main-item-rating">
                    <span>{props.myRating}</span> / 5 rating
                </div>

                <div class="List-container-main-item-choice">
                    {props.myRecommend === true ? 'Recommended' : '' }
                </div>
            </div>
        </div>
    )
}

export default Item