import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Profile from "./Profile"
import Login from "./Login/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Location from "./Location/Locations"
import Stock from "./Stock/Stock"
import Staff from "./Staff"
import Dashboard from "./Dashboard/Dashboard"
import LocationDetails from "./Location/Details/LocationDetails"
import StockDetails from "./Stock/Details/StockDetails"


function App() {
  console.log("APP COMPONENT")
  return (

        <div
            className="align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />

                <PrivateRoute path="/location" component={Location} />
                <PrivateRoute path="/locationdetails/:id" component={LocationDetails}/>
                <PrivateRoute path="/stock" component={Stock} />
                <PrivateRoute path="/stockdetails/:id" component={StockDetails} />
                <PrivateRoute path="/staff" component={Staff} />
                <PrivateRoute path="/" component={Dashboard} />

                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
              </Switch>
            </AuthProvider>
          </Router>

        </div>
  )
}

export default App
