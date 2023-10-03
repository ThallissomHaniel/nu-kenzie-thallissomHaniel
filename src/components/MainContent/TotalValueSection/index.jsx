import styles from './TotalValueSection.module.scss';

export const TotalvalueSection = ({ financeList }) => {

    const entry = financeList.filter((list) => {
        return list.valueType === "entry";
    });

    const addValue = entry.reduce((prevValue, list) => {
        return prevValue + Number(list.value);
    },0);


    const expense = financeList.filter((list) => {
        return list.valueType === "output";
    });

    const subtract = expense.reduce((prevValue, list) => {
        return prevValue + Number(list.value);
    },0);

    const totalSum = addValue - subtract

    return (
        <section className={`${styles.section} ${totalSum === 0 && "hidden"}`}>
            <div>
                <h3 className='title3'>Valor total:</h3>
                <p className='title3'><span>{totalSum.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</span></p>
            </div>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}