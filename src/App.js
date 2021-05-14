import logo from './logo.svg';
import './App.css';
import {API} from "./backend"
import StartView from "./components/startView"
import DetailPanel from "./components/detailPanel"
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
const checkingAPI = ()=>{
const api = new API()
}

function App() {
  return (
    <>
<StartView />
<DetailPanel />
</>
  );
}

export default App;
