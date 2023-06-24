import './Pill.css'

const Pill = ({label, onClick, isActive})=>{
    return(
        <button className={isActive ? 'button backgroundActive' : 'button backgroundInactive'} onClick={onClick}>
            {label}
        </button>
    )
}
export default Pill