import React, { useState } from "react";
import { Divider, Row, Col } from "antd";
import FormInput from "./components/FormInput";
import ListProdutos from "./components/ListProdutos";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  const [list, setList] = useState([]);

  const addList = (todo) => {
    setList([...list, todo]);
  };

  const deleteList = (id) => {
    var filtred = list.filter((list) => list.id !== id);
    setList(filtred);
  };

  const checkList = (id, status) => {
    //console.log(status);
    var filtred = list.reduce(function (total, item) {
      var idList = item.id;

      if (idList == id) {
        console.log(item);
        item.checkList = status;
      }

      return total;
    });

    console.log("--------");
    console.log(filtred);
    console.log("--------");
    //setList(filtred);
  };

  return (
    <div className="App">
      <Divider orientation="left">
        <h3>Lista de Compras</h3>
      </Divider>
      <Row justify="center">
        <Col span={16}>
          <div className="lista-compras-container">
            <FormInput handleSubmit={addList} />
            <ListProdutos
              itemList={list}
              deleteList={deleteList}
              checkList={checkList}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
