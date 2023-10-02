import styles from './TotalValueSection.module.scss';

export const TotalvalueSection = ({ financeList }) => {
    const totalValue = financeList.reduce((prevValue, list) => {
        const value = Number(list.value);
        return list.description && value !== ""? prevValue + value: prevValue;
    }, 0)

    return (
        <section className={styles.section}>
            <div>
                <h3 className='title3'>Valor total:</h3>
                <p className='title3'><span>R$: {totalValue}</span></p>
            </div>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}