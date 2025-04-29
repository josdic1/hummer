import App from "./App"
import AppContent from "./components/AppContent"
import Error from "./pages/Error"
import Idea from "./pages/Idea"
import IdeaList from "./pages/IdeaList"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AppContent /> },
      { path: "ideas", element: <IdeaList /> },
      { path: "idea/:id", element: <Idea/> }
    ]
  }
]

export default routes
