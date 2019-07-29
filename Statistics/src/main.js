import React from "react";
// Подключаем Реакт
import ReactDom from "react-dom";
// Подкючаем Реакт Дом

window.addEventListener("DOMContentLoaded", () => {
    let hr = React.createElement("hr");
    let div = React.createElement("div", {className: "test"}, [hr]);

    ReactDom.render(<div className="test">
        </hr>
        </div>, document.querySelector("#app"));

    console.log("dsd");
});