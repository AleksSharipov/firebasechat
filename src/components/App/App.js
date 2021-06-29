import {BrowserRouter as Router, Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';


function App() {
  let location = useLocation();

  return (
    <Router>
      <div>
        <Redirect
          to={{
            pathname: "/chat",
            state: {from: location}
          }}
        />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <SecureRoute path="/chat">
            <Chat/>
          </SecureRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function SecureRoute({ children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) => 
        localStorage.getItem('nickname') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
    }
    />
  )
}