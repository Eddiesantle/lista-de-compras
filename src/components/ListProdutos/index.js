import React, { useState } from "react";
import { List, Checkbox, Button, Divider, Skeleton } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";

const ListProdutos = ({ itemList, deleteList, checkList }) => {
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)"
      }}
    >
      <InfiniteScroll
        dataLength={itemList.length}
        hasMore={itemList.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={itemList}
          renderItem={(data) => (
            <List.Item key={data.id}>
              <List.Item.Meta
                title={
                  <h3>
                    Item: {data.name}, Quantidade: {data.qtd}
                  </h3>
                }
              />
              <Checkbox
                checked={data.checkList}
                onChange={(e) => checkList(data.id, e.target.checked)}
              >
                Feito
              </Checkbox>
              <Button
                type="primary"
                danger
                ghost
                onClick={() => deleteList(data.id)}
              >
                <DeleteOutlined />
              </Button>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ListProdutos;
