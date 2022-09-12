import './Panel.css';

export default function Panel({tipo, valor, imagem, alt}) {
    
    return (
        <div className='panel'>
            <div className='panel_top'>
                <h3 className='tipo'>{tipo}</h3>
                <img src={imagem} alt={alt} className="panel_icon"/>
            </div>
            <h2 className='valor'>{`R$ ${valor}`}</h2>
        </div>
    )
}