import { useDispatch } from 'react-redux';
import { uptadeQuantity } from '../../Actions/basketAction';

const CounterComponent = (product) => {
  const dispatch = useDispatch();

  const increment = () => {
    const quantities = {
      id: product.product.id,
      newQuantity: product.product.quantity + 1
    }
    dispatch(uptadeQuantity(quantities.id, quantities.newQuantity));
  }

  const decrement = () => {
    if(product.product.quantity === 1){
      return product.product.quantity
    }
    const quantities = {
      id: product.product.id,
      newQuantity: product.product.quantity - 1
    }
    dispatch(uptadeQuantity(quantities.id, quantities.newQuantity));

  }
  
  return (
    <div className='counter-container'>
        <button onClick={decrement}>-</button>
        <p>{product.product.quantity}</p>
        <button onClick={increment}>+</button>

    </div>
  );
};



export default CounterComponent;