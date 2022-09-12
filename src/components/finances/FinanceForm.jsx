import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './FinanceForm.css';

export default function FinanceForm(props) {
    const [form, setForm] = useState({
        id: uuidv4(),
        descrição: '',
        valor: 0,
        tipo: 'entrada'
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(form);
        setForm({
            id: uuidv4(),
            descrição: '',
            valor: 0,
            tipo: form.tipo
        })
    }

    return (
        <form onSubmit={handleSubmit} className="finance_form">
            <div>
                <label htmlFor="descrição" className="label">Descrição</label>
                <input type="text" name="descrição" id="descrição" value={form.descrição} required onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="valor" className="label">Valor</label>
                <input type="number" name="valor" id="valor" value={form.valor} onChange={handleChange}/>
            </div>
            <div className="tipo_container"> 
                <label htmlFor="entrada" className="entrada">
                    <input type="radio" name="tipo" id="entrada" value='entrada' defaultChecked onChange={handleChange}/>
                    Entrada
                </label> 
                <label htmlFor="saida">
                    <input type="radio" name="tipo" id="saida" value='saida'onChange={handleChange}/>
                    Saída
                </label>
            </div>
            <button className="form_button">Adicionar</button>
        </form>
    )
}