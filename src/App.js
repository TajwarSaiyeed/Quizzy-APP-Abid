import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./layout/Main";
import Blog from "./Components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        { path: "/statictis", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/question", element: <Home /> },
        { path: "/about", element: <Home /> },
      ],
    },
    { path: "*", element: <div>Helo</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
