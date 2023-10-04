import { Header } from "./components/Header";
import { FinanceForm } from "./components/MainContent/FinanceForm";
import { MainContent } from "./components/MainContent";
import { TotalvalueSection } from "./components/MainContent/TotalValueSection";
import { useState } from "react"
import { FinanceList } from "./components/MainContent/FinanceList";

import "./styles/index.scss";

function App() {
  const [financeList, setFinanceList] = useState([]);

  const addList = (description, value, valueType) => {
    const id = crypto.randomUUID();
    const newList = { description, value, id, valueType };
    setFinanceList([...financeList, newList]);
  }

  const removeList = (id) => {
    const filteredList = financeList.filter((list) => {
      if (list.id !== id) {
        return list;
      }
    })

    setFinanceList(filteredList);
  }

  return (
    <>
      <Header />
      <MainContent>
        <div>
          <FinanceForm addList={addList} />
          <TotalvalueSection financeList={financeList} />
        </div>
        <FinanceList financeList={financeList} removeList={removeList} />
      </MainContent>
    </>
  )
}

export default App
