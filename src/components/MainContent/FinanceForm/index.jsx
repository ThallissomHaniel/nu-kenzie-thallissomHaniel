import styles from "./FinanceForm.module.scss";
import { useState } from "react";

export const FinanceForm = ({addList}) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [valueType, setValueType] = useState("entry");

    const submit = (e) => {
        e.preventDefault();
        if(description && value) {
            addList(description, value, valueType);

            setDescription("")
            setValue("")
        }
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" value={description} placeholder="Digite aqui sua descrição" 
                onChange={(e) => setDescription(e.target.value)}/>
                <p>Ex:Compras roupas</p>
            </div>

            <div>
                <label htmlFor="value">Valor(R$)</label>
                <input type="number" name="value" id="value" value={value} placeholder="Digite aqui o valor"
                onChange={(e) => setValue(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="value-type">Tipo de valor</label>
                <select name="value-type" id="value-type" onChange={(e) => setValueType(e.target.value)}>
                    <option value="entry">Entrada</option>
                    <option value="output">Despesa</option>
                </select>
            </div>

            <button>Inserir valor</button>
        </form>
    )
}