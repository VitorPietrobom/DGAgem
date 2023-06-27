import React, { useState } from 'react';
import './NewTravelForm.css'

const NewTravelForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    products: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionClick = (value) => {

    const updatedProducts = formData.products.includes(value)
      ? formData.products.filter((destination) => destination !== value)
      : [...formData.products, value];
    
    setFormData({
      ...formData,
      products: updatedProducts
    });

    console.log(updatedProducts)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleCancel = () => {
    // Handle cancel button logic here
    console.log('Form canceled');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="tripDestination">Para onde será sua viagem?</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>
        <div div className="form-field">
          <label>Quais produtos deseja solicitar?</label>
          <div className="options">
            <button
              type="button"
              onClick={() => handleOptionClick('airTicket')}
              className={formData.products.includes('airTicket')  ? 'selected' : ''}
            >
              Passagem Aérea
            </button>
            <button
              type="button"
              onClick={() => handleOptionClick('hotelDaily')}
              className={formData.products.includes('hotelDaily') ? 'selected' : ''}
            >
              Diárias
            </button>
            <button
              type="button"
              onClick={() => handleOptionClick('insurance')}
              className={formData.products.includes('insurance') ? 'selected' : ''}
            >
              Seguro
            </button>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleCancel}>SALVAR PARA DEPOIS</button>
          <button type="submit" className='submit' >ENVIAR</button>
        </div>
      </form>
    </div>
  );
};

export default NewTravelForm;
