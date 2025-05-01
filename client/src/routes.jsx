import App from "./App"
import AppContent from "./components/AppContent"
import Error from "./pages/Error"
import Idea from "./pages/Idea"
import FormEdit from "./pages/FormEdit"
import FormNew from "./pages/FormNew"
import Loader from "./components/Loader"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AppContent /> },
      { path: "edit/:id", element: <FormEdit /> },
      { path: "new", element: <FormNew /> },
      { path: "idea/:id", element: <Idea/> },
      { path: "loader", element: <Loader/> },
    ]
  }
]

export default routes
