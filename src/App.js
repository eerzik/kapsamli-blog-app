
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <ThemeSelector/>
     <Switch>
   
      <Route exact  path="/"> <Home/> </Route>
      <Route  path="/create"> <Create/> </Route>
      <Route  path="/blog/:id"> <Blog/> </Route>
      <Route  path="/search"> <Search/> </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
