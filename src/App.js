import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stickerpage from "./page/Stikerpage";
import MyPage from "./page/my_page";
import Progression from "./page/progression";
import Gift from "./page/Gift";
import Images from "./page/api/Images";
import A from "./page/A";
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<A />} />

          <Route path="/stickerpage" element={<Stickerpage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/progression" element={<Progression />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
