import './TravelSummary.css'

const TravelSummary = ()=>{
    
    const travelInfo = {
        image : 'https://sabiatur.com.br/wp-content/uploads/2017/02/nova-york-1200x565.jpg',
        destiny: "Nova York - EUA",
        date: "17/07/2023 - 31/07/2023",
        
        fields: {"Passagens Aéreas":"Confirmado", "Diárias":"Aguardando Resposta", "Seguro":"Confirmado"},
        
    }
    
    return(
        <div className='container'>
            <img src={travelInfo.image} className='background-image'></img>
            
            <div className='text-section'>
                <div className='line title'>
                    <div className='main-title'>{travelInfo.destiny}</div>
                    <div className='date'>{travelInfo.date}</div>
                </div>

                {Object.entries(travelInfo.fields).map(([key, value])=>{
                    const status = value === 'Confirmado'? 'active' : 'inactive'
                    const jsx = 
                        <div>
                            <div className='line'>
                                <div className='key'>{key}</div>
                                <div className={'value ' + status}>{value}</div>
                            </div>
                        </div>
                    
                    return jsx
                })}

                
            </div>
        </div>
    )
}

/*
<div className='line'>
                    <div className='key'>Passagens Aéreas</div>
                    <div className='value active'>Confirmado</div>
                </div>
                <div className='line'>
                    <div className='key'>Diárias</div>
                    <div className='value inactive'>Aguardando Resposta</div>
                </div>
                <div className='line'>
                    <div className='key'>Seguro</div>
                    <div className='value active'>Confirmado</div>
                </div>*/
export default TravelSummary