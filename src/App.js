import { useState } from "react";
import Display from "./components/Display";
import FinanceForm from "./components/finances/FinanceForm";
import PanelDisplay from "./components/panels/PanelDisplay";
import FinanceWrapper from "./components/finances/FinanceWrapper";
import './App.css';

export default function App() {

    const [finanças, setFinanças] = useState([]);

    const getData = (novaFinança) => {
        setFinanças([...finanças, novaFinança])
    }
    const handleRemove = (id) => {
        setFinanças(
            finanças.filter(finança => finança.id !== id)
        )
    }
    const addFinança = () => {
        return finanças.map((finança) => <Display key={finança.id} id={finança.id} descrição={finança.descrição} valor={finança.valor} tipo={finança.tipo} remove={() => handleRemove(finança.id)}/>)
        }
    return (
        <>
            <h1>Controle Financeiro</h1>
            <PanelDisplay data={finanças}/>
            <FinanceForm onSubmit={getData}/>
            <FinanceWrapper>
                {addFinança()}
            </FinanceWrapper>
            
        </>
    )
}