import React from 'react'

function Cart({ items, onClose, setCartItems }) {
  const removeItem = (id) => {
    setCartItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(items.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
    <main className='absolute top-0 right-0 bg-red-600 w-90 h-100 overflow-y-auto'>
      <div className="heading grid grid-cols-3 px-10 py-4">
        <div className="cart-heading col-span-2 text-2xl">Cart Menu</div>
        <div className="cart-close flex items-center w-full">
          <button onClick={onClose} className='w-full bg-amber-50 py-1 rounded hover:bg-amber-100'>X</button>
        </div>
      </div>

      <div className="selected-items flex flex-col border">
        {items.length === 0 ? (
          <p className='p-4 text-white'>Cart is empty</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="items flex h-15 w-90 border p-4">
              <div className="card-left flex flex-col flex-grow">
                <h1 className='font-bold text-white'>{item.title}</h1>
                <p className='text-white'>${item.price}</p>
              </div>
              <div className="quantity-control flex items-center space-x-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className='bg-white px-2 rounded'
                >
                  -
                </button>
                <span className='text-white'>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className='bg-white px-2 rounded'
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className='bg-red-800 text-white px-3 ml-4 rounded hover:bg-red-900'
              >
                DELETE
              </button>
            </div>
          ))
        )}
      </div>

      <div className="total p-4 bg-red-700 text-white text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </main>
    </>
  )
}

export default Cart