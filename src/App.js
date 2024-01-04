import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sticker from './page/my_page';
import MyPage from './page/sticker';
import Progression from "./page/progression";

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter>
      <Routes>
      <Route path="/sticker" element={<Sticker />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/progression" element={<Progression />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
