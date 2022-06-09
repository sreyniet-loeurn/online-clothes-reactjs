import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarClient from "./components/Home/NavbarClient";
import CardOfUserLocationAndServer from "./components/Home/CardOfUserLocationAndServer";
import ProvideManyFeature from "./components/Home/ProvideManyFeature";
import GetStart from "./components/Home/GetStart";
import Footer from "./components/Home/Footer";
import Login from "./components/Home/Login";
import SignUp from "./components/Home/SignUp";
import Contact from "./components/Home/Contact";
import ListingPage from "./components/Home/ListingPage";
import About from "./components/Home/About";
import UpdateProduct from "./components/Home/UpdateProduct";
import AddProduct from "./components/Home/AddProduct";

function App() {
  return (

    <Router>
       <Route
        path="/update"
        exact
        render={() => (
          <>
            <UpdateProduct />
          </>
        )}
      ></Route>

        <Route
        path="/addProduct"
        exact
        render={() => (
          <>
            <AddProduct />
          </>
        )}
      ></Route>
      {/* Landing page  */}
      <Route
        path="/"
        exact
        render={() => (
          <>
            <NavbarClient />
            <GetStart />
            <CardOfUserLocationAndServer />
            <ProvideManyFeature />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/about"
        exact
        render={() => (
          <>
            <NavbarClient />
            <About />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/login"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Login />
          </>
        )}
      ></Route>
      <Route
        path="/SignUp"
        exact
        render={() => (
          <>
            <NavbarClient />
            <SignUp />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/Contact"
        exact
        render={() => (
          <>
            <NavbarClient />
            <Contact />
            <Footer />
          </>
        )}
      ></Route>
      <Route
        path="/ListingPage"
        exact
        render={() => (
          <>
            <NavbarClient />
            <ListingPage />
            <Footer />
          </>
        )}
      ></Route>

      <Route
        path="/Footer"
        exact
        render={() => (
          <>
            <Footer />
          </>
        )}
      ></Route>
     
    </Router>
  );
}

export default App;
