import App from "./App"
import AppContent from "./components/AppContent"
import Error from "./pages/Error"
import Idea from "./pages/Idea"
import IdeaForm from "./pages/IdeaForm"
import IdeaList from "./pages/IdeaList"
import Loader from "./components/Loader"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AppContent /> },
      { path: "ideaform", element: <IdeaForm /> },
      { path: "ideas", element: <IdeaList /> },
      { path: "idea/:id", element: <Idea/> },
      { path: "loader", element: <Loader/> },
    ]
  }
]

export default routes
