import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  App:{
    backgroundColor:"#14161a",
    color:"white",
    minHeight:"100vh"
  },
}));

function App(props) {
  const classes = useStyles(props);

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path='/' exact element={<HomePage/>} />
      <Route path='/coins:id' exact element={<CoinPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
