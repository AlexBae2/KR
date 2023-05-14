import {useRoutes} from "react-router";
import {GlobalStyle, SectionInner, Wrapper} from "./App.styles";
import Header from "./components/header";
import Navbar from "./components/NavBar";
import logo from './logo.svg';
import {routes} from "./routes/routes";

const App = () => {
  const publicRoutes = useRoutes(routes())
  return (
      <>
          <GlobalStyle></GlobalStyle>
          <Header/>
          <SectionInner>
            <Wrapper>
                <Navbar/>
              {publicRoutes}
            </Wrapper>
          </SectionInner>
      </>
  );
};

export default App;
