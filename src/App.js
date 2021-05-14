import logo from './logo.svg';
import './App.css';
import AccountRepository from "./backend/index"
import StartView from "./components/startView"
import DetailPanel from "./components/detailPanel"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'

const checkingAPI = async ()=>{
  const repository = AccountRepository.getInstance()
  const response = await repository.getAccountSummary(1)
  console.log(response)
}


function App() {
  useEffect(() => {
    checkingAPI()
  }, [])
  return (
    <>
<StartView />
<DetailPanel />
</>
  );
}

export default App;
