import React, {useState} from 'react';
import './ProfileDropdown.css'


const ProfileDropdown = ({onClick}) => {
    const src = 'https://media.gettyimages.com/id/1315124180/pt/vetorial/watercolor-turtle.jpg?s=612x612&w=gi&k=20&c=SabWzHjBZRdfFD4PmzZPNgd0VGfCnFZiUKkFEaTnAes='
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className='container'>
            
            <img onClick={toggleDropdown} src={src} className='image-profile'></img>
            {isOpen && (
                <div className='dropdown-menu'>
                    <div className='section-dropdown' onClick={onClick}>Logout</div>
                </div>

            )}
        </div>
    );
};

export default ProfileDropdown;