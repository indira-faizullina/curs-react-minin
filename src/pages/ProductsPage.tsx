import React, { useContext } from 'react'
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { Iproduct } from '../models'
import { ModalContext } from '../context/ModalContext'

export function ProductPage() {
  const { products, loading, error, addProduct } = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: Iproduct) => {
    close()
    addProduct(product)
  }
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {modal && <Modal title="Create new product" onClose={close}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button className='fixed bottom-5 right-5 px-4 py-2 rounded-full bg-red-700 text-white text-2xl' onClick={open}>Add</button>
    </div>
  )
}