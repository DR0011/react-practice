import "./App.css";
import CharacterCounter from "./components/CharacterCounter";
import Counter from "./components/counter";
import ModeButton from "./components/ModeButton";
import SearchFilter from "./components/SearchFilter";
import ShowHidepassword from "./components/ShowHidepassword";

function App() {
  return (
    <>
      <Counter />
      <ModeButton />
      <ShowHidepassword />
      <CharacterCounter />
      <SearchFilter />
    </>
  );
}

export default App;
