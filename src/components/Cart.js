import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {

  const cart = useSelector((store) => {
    console.log(store.cart);
    return store.cart
  });

  return (
    <button type="button" className="btn btn-primary">
      Cart <span className="badge badge-light">{ cart.totalItems }</span>
      ${cart.totalAmount}
    </button>
  )
}
