import AllPages from "./components/Pages/AllPages";
import FavoritePage from "./components/Pages/FavoritePages";
import NewPage from "./components/Pages/NewPage";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllPages/>}/>
        <Route path="/new-page" element={<NewPage/>}/>
        <Route path="/favorite-page" element={<FavoritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
