import styles from "./FinanceList.module.scss";

export const FinanceList = ({ financeList, removeList }) => {

    return (
            <ul className={styles.ul}>
                <h3 className="title3">Resumo financeiro</h3>
                <p className={`title2 ${financeList.length !== 0 && "hidden"}`} >Você ainda não possui nenhum lançamento</p>
                {financeList.map((list) => {
                    const { description, value, id, valueType } = list;
                    const formatedValue = Number(value);
                    return description && value !== "" ? (
                        <li key={id} className={valueType === "entry" ? styles.entry : styles.output}>
                            <div className={styles.divs}>
                                <h3 className="title3">{description}</h3>
                                <p>{valueType === "entry" ? "Entrada" : "Despesa"}</p>
                            </div>
                            <div className={styles.divs}>
                                <small>{formatedValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</small>
                                <button onClick={() => removeList(id)}>Excluir</button>
                            </div>
                        </li>
                    ) : null;
                })}
            </ul>
    );
};

