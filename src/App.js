import { useSelector } from "react-redux";
import MainRoutes from "./MainRouts";
import Header from "./components/Header";

import './style.css';

function App() {
  const oneContact = useSelector(state => state.contacts.oneContact);
  return (
    < >
    <Header/>
    <MainRoutes/>
    </>
  );
}

export default App;
