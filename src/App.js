import React, { useState } from "react";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";

const App = (props) => {
    const [dataList, setDataList] = useState([]);

    const addDataHandler = (uName, uMail, uAge, uGender, uMarital) => {
        setDataList((prevDataList) => {
            return [
                ...prevDataList,
                {
                    name: uName,
                    mail: uMail,
                    age: uAge,
                    gender: uGender,
                    marital: uMarital,
                    id: Math.random().toString(),
                },
            ];
        });
    };

    return (
        <div className="App">
            <Form onAddData={addDataHandler} />
            <DisplayData dataLists={dataList} />
        </div>
    );
};

export default App;
