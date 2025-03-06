import { LandingLayout, LatestStories, TopStories } from "./components/layouts"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopStories/>
      {/* <LandingLayout /> */}
      {/* <LatestStories/> */}
    </BrowserRouter>
  );
}

export default App;
