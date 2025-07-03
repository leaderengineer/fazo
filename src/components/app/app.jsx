import { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // qidiruv jarayoni
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <Main
        filtered={filtered}
        search={setProducts}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
