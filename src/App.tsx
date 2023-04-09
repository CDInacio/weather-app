import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "./components/Inputs/TextField";
import Container from "./components/Layout/Container";

function App() {
  const navigate = useNavigate();
  const [searchQ, setSearchQ] = useState<string>("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/${searchQ}`);
  }

  return (
    <Container>
      <div className="w-[400px] bg-panelLighter dark:bg-darkPanel  px-5 py-10 rounded shadow-md">
        <TextField
          onSearch={handleSearch}
          onSetQ={setSearchQ}
          placeholder="Procure por lugares..."
        />
      </div>
    </Container>
  );
}

export default App;
