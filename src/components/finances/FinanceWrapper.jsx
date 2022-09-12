import './FinanceWrapper.css';

export default function FinanceWrapper({children}) {

    return (
        <div className='finance_wrapper'>
            <ul className='finance_list'>
                <li>Descrição</li>
                <li>Valor</li>
                <li>Tipo</li>
                <li></li>
            </ul>
            <hr/>
            {children}
        </div>
    )
}