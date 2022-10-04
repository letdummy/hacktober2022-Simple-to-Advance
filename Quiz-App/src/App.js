
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from './Section'
import QuestionsPage from "./QuestionsPage";


function App() {
  return (
    <Routes>
     <Route path="/" element={<Section/>}></Route>
     <Route path="/questionspage" element={<QuestionsPage/>}></Route>
    </Routes>
  );
}

export default App;
