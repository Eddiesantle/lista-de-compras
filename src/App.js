import React, { useState } from "react";
import { Divider, Row, Col } from "antd";

import FormInput from "./components/FormInput";
import ListProdutos from "./components/ListProdutos";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  const [list, setList] = useState([]);

  const addList = item => {
    setList([...list, item]);
  };

  const deleteList = id => {
    const filtred = list.filter(list => list.id !== id);
    setList(filtred);
  };

  const checkList = (id, status) => {
    const filtred = list.map(function (item) {
      if (item.id === id) {
        return { ...item, checkList: status };
      }
      return item;
    });
    setList(filtred);
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
            <ListProdutos itemList={list} deleteList={deleteList} checkList={checkList} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
