import "./App.scss";
import AppRoutes from "./Routes";
import Layout from "./layout";
import { MenuProvider } from "./providers/menuProvider";

function App() {
  return (
    <MenuProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </MenuProvider>
  );
}

export default App;
