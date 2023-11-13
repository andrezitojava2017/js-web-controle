import Container from "./components/container/container";
import Header from "./components/header/header";
import Departament from "./page/departament/departament";
import Home from "./page/home/home";
import Login from "./page/login/login";
import Order from "./page/order/order";
import Secretariat from "./page/secretariat/secretariat";

function App() {
  return (
    <main>
      <Header/>
      <Container>
        <Departament/>
      </Container>
    </main>
  );
}

export default App;
