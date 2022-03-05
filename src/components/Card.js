import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../store/action/actionCreators';

export default function Card({item}) {
  const { id, title, price, description, category, image, rating } = item
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(item));
  };

  return (
    <div className='col-md-4 col-lg-2 mb-3'>
      <div className="card">
        <img className="card-img-top" src={image} alt={title} style={{ maxHeight: '6rem' }} />
        <div className="card-body">
          <h5 className="card-title text-truncate" title={title}>{title}</h5>
          <p className="card-text">
            <span className="badge badge-light">${price}</span>
          </p>
          <a href="#" className="btn btn-primary" onClick={addToCart}>Add to cart</a>
        </div>
      </div>
    </div>
  )
}
