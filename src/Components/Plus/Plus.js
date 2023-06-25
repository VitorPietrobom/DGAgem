import './Plus.css'
import { FaPlus } from 'react-icons/fa';


const Plus = ({onClick})=>{
    return(
        <button className='button' onClick={onClick}>
             <FaPlus className='white-plus-icon' />
        </button>
    )
}
export default Plus