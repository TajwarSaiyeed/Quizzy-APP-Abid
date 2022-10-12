import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./layout/Main";
import Blog from "./Components/Blog/Blog";
import Quizes from "./Components/Quizes/Quizes";
import Statictis from "./Components/Statictis/Statictis";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { createContext, useState } from "react";

export const Dark = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className={darkMode ? "dark" : ``}>
          <Dark.Provider value={[darkMode, setDarkMode]}>
            <Main />
          </Dark.Provider>
        </div>
      ),
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
