import React from 'react'

const Cart = ({ cartToggle, setCartToggle }) => {
    return (
        <>{
            <div className={`bg-black fixed ${cartToggle ? 'w-0' : 'w-96'} h-full top-0 right-0 text-white z-50 pt-24 duration-500`}>
                <span className='cursor-pointer border-4 border-yellow-400' onClick={() => setCartToggle(!cartToggle)}>X Close</span>
            </div>
        }

        </>
    )
}

export default Cart