import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [searchQ, setSearchQ] = useState<string>("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/${searchQ}`);
  }

  return (
    <main className="w-screen h-screen bg-background">
      <form onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Busque por lugares..."
        />
      </form>
    </main>
  );
}

export default App;
