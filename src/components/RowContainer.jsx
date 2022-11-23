import React, { useEffect, useRef, useState } from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import NotFound from '../img/NotFound.svg'
import { actionType } from '../context/reducer'

const RowContainer = ({flaggy ,data ,scrollValue}) => {
  const rowContainer = useRef();

  const [ items , setItems] = useState([]);
  // const [qty, setQty] = useState(1);

  const [{cartItems} , dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem('cartItems' ,JSON.stringify(items));
  };

  const addToMenu = (item) =>{
    let id = ''
    id = cartItems.filter(cartItem => cartItem.id === item.id)

    if(cartItems.length > 0){
      // setFlag(flag + 1);
      if(id.length === 0){
        setItems([...cartItems, item])
      }else{
        // item.qty += 1;
        // console.log(item.qty);
        // setFlag(flag + 1);
      }
    }else{
      setItems([...cartItems, item])
    }
  }

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth
    ${flaggy ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
        {
            data && data.length > 0 ? data.map(item => (
                <div
                key={item?.id}
                className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex items-center justify-between">
                  <motion.div
                    className="w-36 h-36 -mt-8  drop-shadow-2xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img
                      src={item?.imageUrl}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                    onClick={() => addToMenu(item)}
                    // onClick={()=>addToCart(item)}
                  >
                    <MdShoppingBasket className="text-white" />
                  </motion.div>
                </div>

                <div className="w-full flex flex-col items-end justify-end -mt-8">
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {item?.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item?.calories} Calories
                  </p>
                  <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                      <span className="text-sm text-red-500">$</span> {item?.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
            : (
                <div className='w-full flex flex-col items-center justify-center'>
                    <img src={NotFound} alt='Not Found' className='h-340'/>
                    <p className='text-xl text-headingColor font-semibold'> Items Not Available </p>
                </div>
            )
        }
    </div>
  )
}

export default RowContainer