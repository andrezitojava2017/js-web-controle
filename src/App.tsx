import { useEffect, useState } from "react";
import Container from "./components/container/container";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
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
        <main className="main">
          <Header />
          <Container>
            <RouterProvider router={router} />
          </Container>
          <Footer />
        </main>
      );
    }
    return <Login />;
  }

}

export default App;
