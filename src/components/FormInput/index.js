import React, { useState } from "react";
import { Input, Button, Form, Divider } from "antd";

const FormInput = ({ handleSubmit }) => {
  const [text, setText] = useState(null);
  const [qtd, setQtd] = useState(null);
  const [id, setId] = useState(0);

  const itemCreate = (text, qtd) => {
    if (text === "" || qtd === "") {
      alert("Informe o produto e a quantidade!");
      return false;
    }

    const itemObj = { id: id, name: text, qtd: +qtd, checkList: false };

    setId(id + 1);

    handleSubmit(itemObj);
  };

  return (
    <div>
      <Form>
        <fieldset>
          <Form.Item>
            <label htmlFor="">Inserir novo Item:</label>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
            <Input
              style={{ width: 200 }}
              type="text"
              placeholder="Digite um produto"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Input
              style={{ width: 200 }}
              type="text"
              placeholder="Digite quantidade"
              value={qtd}
              onChange={e => setQtd(e.target.value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <Button
              type="primary"
              onClick={event => {
                event.preventDefault();
                itemCreate(text, qtd);
              }}>
              Adicionar
            </Button>
          </Form.Item>
          <Divider plain />
        </fieldset>
      </Form>
    </div>
  );
};

export default FormInput;
