import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stickerpage from "./page/Stikerpage";
import MyPage from "./page/my_page";
import Progression from "./page/progression";
import Gift from "./page/Gift";
import Inputpage from "./page/inputpage";
import Inputpage2 from "./page/inputpage2";
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/gift" element={<Gift />} />
          <Route path="/inputpage" element={<Inputpage />} />
          <Route path="/inputpage2" element={<Inputpage2 />} />

          <Route path="/stickerpage" element={<Stickerpage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/progression" element={<Progression />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
