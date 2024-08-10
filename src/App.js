import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Antd from "./pages/Antd";

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/antd">Antd</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/antd">
            <Antd />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
