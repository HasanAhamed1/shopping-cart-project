import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Ans from './component/Question_Ans/Ans';

function App() {
  return (
    <div>
      {/* added header file */}
      <Header></Header>
      {/* Added shop file */}
      <Shop></Shop>
      {/* added all answered file */}
      <Ans></Ans>
    </div>
  );
}

export default App;
