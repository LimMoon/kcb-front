import './App.css';
import NavBar from './components/Navbar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Home from './pages/whatsNewPage';
import BeerPage from './pages/beerPage';
import BreweryPage from './pages/breweriesPage';
import BrewPubPage from './pages/brewPubs';
import MyPage from './pages/myPage';
import GoodsPage from './pages/goodsPage';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },

  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path={"/"} exact={true} component={Home}>
          </Route>
          <Route path={"/beer"} component={BeerPage}>
          </Route>
          <Route path={"/brewery"} component={BreweryPage}>
          </Route>
          <Route path={"/brewpub"} component={BrewPubPage}>
          </Route>
          <Route path={"/mypage"} component={MyPage}>
          </Route>
          <Route path={"/goods"} component={GoodsPage}>
          </Route>
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
