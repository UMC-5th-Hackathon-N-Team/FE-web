import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stickerpage from "./page/Stikerpage";
import MyPage from "./page/my_page";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/stickerpage" element={<Stickerpage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
