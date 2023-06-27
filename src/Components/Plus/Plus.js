import './Plus.css'
import { FaPlus } from 'react-icons/fa';


export const Plus = ({onClick})=>{
    return(
        <button className='button' onClick={onClick}>
             <FaPlus className='white-plus-icon' />
        </button>
    )
};