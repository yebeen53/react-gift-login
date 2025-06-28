import GlobalStyles from '@/emotionstyle';
import Navibar from '@/Navibar';
import SelectCategory from '@/selectCategory';
import Banner from '@/Banner';
import GiftRanking from '@/giftRanking';
import SelectFr from '@/selectFr';

function App() {

  return (
    <>
      <GlobalStyles/>
      <Navibar/>
      <SelectFr/>
      <SelectCategory />
      <Banner/>
      <GiftRanking/>
    </>
  )
}

export default App
