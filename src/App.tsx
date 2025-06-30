import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from '@/GlobalStyles';
import Navibar from '@/Navibar';
import GiftThemeSection from '@/GiftThemeSection';
import Banner from '@/Banner';
import GiftRanking from '@/GiftRanking';
import SelectFr from '@/SelectFr';
import Login from '@/Login';
import NotFound from '@/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navibar />

      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route
          path="/homepage"
          element={
            <>
              <SelectFr />
              <GiftThemeSection />
              <Banner />
              <GiftRanking />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
