 
import './App.css';
import {Main} from './components/Main/Main'
import {Header} from './components/Header/Header'
import {Team} from './components/Team/Team'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header/>
      </header>
      <body className='App-body'>
        <BrowserRouter>  
        <Routes>  
          <Route exact path ='/main' element={<Main/> }/> 
          <Route path ='/team' element={  <Team/> }/> 
         
          </Routes>
          </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
