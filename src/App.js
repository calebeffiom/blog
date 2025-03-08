import { LandingLayout, LatestStories, TopStories, ProfileLayout } from "./components/layouts"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ProfileLayout/>
      {/* <TopStories/> */}
      {/* <LandingLayout /> */}
      {/* <LatestStories/> */}
    </BrowserRouter>
  );
}

export default App;
