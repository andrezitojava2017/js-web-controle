import { useEffect, useState } from "react";
import Container from "./components/container/container";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter } from "react-router-dom";
import { RouteJs } from "./routes/route";
import { supabase } from "./api/supabase";
import Login from "./page/login/login";

function App() {
  const [userLogin, setUserLogin] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session != null) {
        setUserLogin(true);
      }
    })();
  }, []);

  {
    if (userLogin) {
      return (
        <BrowserRouter>
          <main className="main">
            <Header />
            <Container>
              <RouteJs />
            </Container>

            <Footer />
          </main>
        </BrowserRouter>
      );
    }
    return <Login />;
  }
}

export default App;
