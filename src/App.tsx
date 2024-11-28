import "./App.css";
import Layout from "./Layout";
import { Navbar } from "./ui/components/navbar/Navbar";
import "./utils/i18n/i18n";

function App() {
  return (
    <>
      <Navbar />
      <Layout />
    </>
  );
}

export default App;
