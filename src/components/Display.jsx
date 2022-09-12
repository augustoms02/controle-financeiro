import './Display.css';

export default function Display({descrição, valor, tipo, remove}) {

    return(
        <>
            <ul className='display_list'>
                <li>{descrição}</li>
                <li>{valor}</li>
                <li>{tipo === 'entrada' ? <img src='imagens/green_arrow_up.png' alt='Seta verde para cima' className='display_img'/> : <img src='imagens/red_arrow_down.png' alt='Seta vermelha para baixo' className='display_img'/>}</li>
                <li>
                    <button onClick={remove} className='display_button'>
                        <img src="imagens/trash_icon.png" alt="Icone de Lixeira" />
                    </button>
                </li>
            </ul>
            
            <hr/>
        </>
    )
}