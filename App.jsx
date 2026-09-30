import Router from "./Router.jsx"
import MainPage from "./pages/MainPage.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import SemesterOnePage from "./pages/SemesterOnePage.jsx"
import SemesterTwoPage from "./pages/SemesterTwoPage.jsx"
import SemesterThreePage from "./pages/SemesterThreePage.jsx"
import MiniReviewPage from "./pages/MiniReviewPage.jsx"
import ProteinStructurePage from "./pages/ProteinStructurePage.jsx"
import UniprotPage from "./pages/UniprotPage.jsx"
import ProteomPage from "./pages/ProteomPage.jsx"
import Pr1Page from "./pages/Pr1Page.jsx"
import Pr2Page from "./pages/Pr2Page.jsx"
import Pr9Page from "./pages/Pr9Page.jsx"
import Pr10Page from "./pages/Pr10Page.jsx"
import Pr11Page from "./pages/Pr11Page.jsx"
import Pr12Page from "./pages/Pr12Page.jsx"


function App() {
  
  const routes = {
    '/': MainPage,
    '*': PageNotFound,
    '/about':AboutPage,
    '/semesters1':SemesterOnePage,
    '/semesters2':SemesterTwoPage,
    '/semesters3':SemesterThreePage,
    '/minireview': MiniReviewPage,
    '/proteinstr': ProteinStructurePage,
    '/uniprot': UniprotPage,
    '/proteom': ProteomPage,
    '/pr1': Pr1Page,
    '/pr2': Pr2Page,
    '/pr9': Pr9Page,
    '/pr10': Pr10Page,
    '/pr11': Pr11Page,
    '/pr12': Pr12Page,
  }

  return (
      <Router routes={routes}>
      </Router>
   
  )
}

export default App
