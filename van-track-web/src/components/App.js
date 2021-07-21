import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile"
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Location from "./Locations"
import Stock from "./Stock"
import Staff from "./Staff"

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              {/* App */}
              <PrivateRoute path="/location" component={Location} />
              <PrivateRoute path="/stock" component={Stock} />
              <PrivateRoute path="/staff" component={Staff} />

              {/* Profile */}
              <PrivateRoute path="/" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              {/* Auth */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
