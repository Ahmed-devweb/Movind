import './App.css';
import Header from './Header';
import Descriptionbanner from './Descriptionbanner';
import SearchingSpace from './SearchingSpace';
import Footer from './Footer';

function App() {
  return (
    <div className='animation_fade'>
      <Header headerlinkname={"Trouvez votre film !"} headerlink={"/searchingpage"} />
      <Descriptionbanner />
      <SearchingSpace />
      <Footer/>
    </div>
  );
}

export default App;
