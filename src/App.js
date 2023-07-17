import './App.css';
import TopBar from "./components/topbar/Main"
import { Container, Column1, Column2, Column3 } from './styled-components/styled';
import SwitchAccount from "./components/switch-account/Main"
import Feeds from "./components/feeds/Main";
import MyPages from "./components/my-pages/Main";
import User from "./components/user/Main";
import Moments from "./components/moments/Main"
import SuggestedListing from "./components/suggested-listings/Main"
import SuggestedPages from "./components/suggested-pages/Main"
import Post from "./components/post/Main"

function App() {
  return (
    <div>
      <TopBar />
      <Container>
        <Column1>
          <SwitchAccount />
          <Feeds />
          <MyPages />
        </Column1>
        <Column2>
          <User />
          <Moments />
          <Post />
          <Post />
        </Column2>
        <Column3>
          <SuggestedListing />
          <SuggestedPages />
        </Column3>
      </Container>
    </div>
  );
}

export default App;
