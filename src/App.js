import Header from './header/Header';
import HeroPage from './heroPage/HeroPage';
import PaginationFooter from './pagination/Pagination';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div className="bg-slate-50 pb-[.8rem] pt-[5px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="page/:page" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/page/1" />} />
        </Routes>
        <PaginationFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
