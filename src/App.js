import React from "react";
import { Link, Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function Product({ match }) {
  console.log(match);
  return <h2>This is a page for product with ID: {match.params.id}</h2>;
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/1">First Product</Link>
          </li>
          <li>
            <Link to="/products/2">Second Product</Link>
          </li>
        </ul>
      </nav>

      {/* This is where the child route elements will be rendered */}
      <Outlet />
    </div>
  );
}

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );

}

export default AppRouter;