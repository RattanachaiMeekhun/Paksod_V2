import { useLocation } from "react-router-dom";
import "./App.scss";
import Navigatorbar from "./component/navbar/Navigatorbar";
import Router from "./route/Router";
import { Layout } from "antd";
import { AlertContextProvider } from "./context/AlertContext";

const { Header, Footer, Content } = Layout;

export function App() {
  return (
    <>
      <AlertContextProvider>
        <Layout className="layout">
          <Header className="header">
            <Navigatorbar />
          </Header>
          <Content className="content">
            <Router />
          </Content>
          <Footer className="footer"></Footer>
        </Layout>
      </AlertContextProvider>
    </>
  );
}

export default App;
