import React from "react";
import { Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Home />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Flex>
  );
}

export default App;