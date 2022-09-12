import Panel from "./Panel";
import "./PanelDisplay.css";

export default function PanelDisplay({data}) {

    const entradas = data.filter((finanças) => finanças.tipo === 'entrada');
    const saidas = data.filter((finanças) => finanças.tipo === 'saida');

    const totalDeEntradas = entradas.reduce((prevValue, elem) => parseInt(prevValue) + parseInt(elem.valor), 0);
    const totalDeSaidas = saidas.reduce((prevValue, elem) => parseInt(prevValue) + parseInt(elem.valor), 0);

    const totalDeTransações = totalDeEntradas - totalDeSaidas;
    
    return (
        <div className="panel_display">
            <Panel tipo='Entradas' valor={totalDeEntradas} imagem = "imagens/panel/black_arrow_up.jpg" alt="Flecha Preta de Entradas"/>
            <Panel tipo='Saídas' valor={totalDeSaidas} imagem = "imagens/panel/black_arrow_down.png" alt="Flecha Preta de Saídas"/>
            <Panel tipo='Total' valor={totalDeTransações} imagem = "imagens/panel/black_money.png" alt="Cifrão Preto"/> 
        </div>
    )
}