import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <Counter />}
    </>
  );
}

export default App;
