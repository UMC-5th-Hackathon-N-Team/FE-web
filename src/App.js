import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sticker from './page/my_page';
import Sticker from './page/sticker';

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/sticker" element={<Sticker />} />
      <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
