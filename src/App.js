import logo from './logo.svg';
import './App.css';
import ReactForm from './Components/ReactForm';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
//import Parent from './Components/callbackdemo/Parent';
import todo from './Components/callbackdemo/todo';
import { Suspense, lazy } from 'react';
import Usememo from './Components/useMemo';
import { Routes,Route, Link, BrowserRouter as Router, Outlet } from 'react-router-dom';
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import Names from './Components/Names';
import LifecycleDemo from './Components/LifecycleDemo';
import Uncontrolled from './Components/Uncontrolled';
const Parent=lazy(()=>import("./Components/callbackdemo/Parent"))


/*
  Lazy Loading prevents the component to be loaded when application starts executing. It will
  be imported & loaded whenever needed.
  If the application is getting bigger, loading all components in single page may affect the 
  application loading time.
*/
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ReactForm/>}/>
        <Route exact path='/uncontrolled' element={<Uncontrolled/>}/>
        <Route exact path='/Comp1' element={<Comp1/>}/>
        <Route exact path='/Comp2' element={<Comp2/>}/>
        <Route exact path='/Parent' element={<Parent/>}/>
        <Route exact path='/Parent/todos/:id' element={<todo/>}/>
      <Route exact path='/usememo' element={<Usememo/>}/>
      <Route exact path='/usered' element={<UseReducer/>}/>
      <Route exact path='/useref' element={<UseRef/>}/>
      <Route exact path='/names' element={<Names/>}/>
      <Route exact path='/lifecycle' element={<LifecycleDemo/>}/>
        
      </Routes>
     
      <Outlet></Outlet>
      
    </div>
  );
}
export default App;
