import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./layout/Main";
import Blog from "./Components/Blog/Blog";
import Quizes from "./Components/Quizes/Quizes";
import Statictis from "./Components/Statictis/Statictis";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

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
        {
          path: "/statictis",
          element: <Statictis />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        { path: "/blog", element: <Blog /> },
        { path: "/question", element: <Home /> },
        { path: "/", element: <Home /> },
        {
          path: "/quiz/:id",
          element: <Quizes />,
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
        },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
