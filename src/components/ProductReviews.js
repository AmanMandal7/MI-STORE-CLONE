import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/ProductReviews.css'

const ProductReviews = ({ productReviews }) => {
    return (
        <div className='ProductReviews'>
            {productReviews.map((item, index) => (
                <ProductReviewCard name={item.name} image={item.image} price={item.price} review={item.review} index={index} key={item.image} />
            ))}
        </div>
    )
}

export default ProductReviews
