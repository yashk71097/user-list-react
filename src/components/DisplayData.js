import React from "react";
import "./DisplayData.css";

const DisplayData = (props) => {
    const tableData = props.dataLists.map((data) => {
        return (
            <tr key={data.id}>
                <td>{data.name}</td>
                <td className="mail-section">{data.mail}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.marital}</td>
            </tr>
        );
    });

    return (
        <div className="display-container">
            <div className="display">
                <table>
                    <thead>
                        <tr>
                            <th className="header-name">Name</th>
                            <th className="header-mail">Email</th>
                            <th className="header-age">Age</th>
                            <th className="header-gender">Gender</th>
                            <th className="header-marital">Marital Status</th>
                        </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayData;
