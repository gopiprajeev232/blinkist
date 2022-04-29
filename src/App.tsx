import MyLibrary from "./pages/MyLibrary";
import EntrepreneurshipPage from './pages/Entrepreneurship'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailsPage from "./pages/BookDetails";
import { makeStyles } from "@mui/styles";

let useStyles = makeStyles({
  main: {

  }
})

function App() {
  let styles = useStyles()
  return (
    <div className={styles.main}>
      <Router>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/bookdetails" element={<BookDetailsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
