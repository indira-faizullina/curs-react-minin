import React, { useState } from 'react'
import { Iproduct } from '../models'

interface ProductProps {
  product: Iproduct
}

export function Product({ product }: ProductProps) {
  const [visibleDetails, setVisibleDetails] = useState(false)

  const buttonBgClasses = visibleDetails ? 'bg-blue-400' : 'bg-yellow-400'

  const buttonClasses = `py-2 px-4 border ${buttonBgClasses}`

  const visibleDetailsHandler = () => setVisibleDetails((prev) => !prev)

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button className={buttonClasses} onClick={visibleDetailsHandler}>
        {visibleDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {visibleDetails && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  )
}
