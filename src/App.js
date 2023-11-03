import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import {HomePage} from "./pages/Home";
import {ErrorBoundary} from "react-error-boundary";
import {Error} from "./pages/Error";
import {AddPost} from "./pages/AddPost";
import {Profile} from "./pages/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/posts/add",
      element: <AddPost/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ])

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
