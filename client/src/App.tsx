import "./App.scss";
import Navigatorbar from "./component/navbar/Navigatorbar";
import Router from "./route/Router";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export function App() {
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <Navigatorbar />
        </Header>
        <Content className="content">
          <Router />
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    </>
  );
}

export default App;
