import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [searchQ, setSearchQ] = useState<string>("");

  return <p>ola</p>;
}

export default App;
