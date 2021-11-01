import './App.css';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeleteTask from './Components/DeleteTask';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route exact path="/">
      <Tasks />
      </Route>
          <Route exact path="/list">
      <Tasks />
      </Route>
      <Route exact path="/create">
      <AddTask />
      </Route>
      <Route exact path="/delete">
      <DeleteTask />
      </Route>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
