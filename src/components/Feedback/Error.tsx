import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import Container from "../Layout/Container";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col">
        <div className=" flex items-center">
          <BiErrorCircle size={25} className="text-red-400" />
          <p className="ml-2 text-red-400 font-bold">
            Um erro inesperado ocorreu, tente novamente mais tarde.
          </p>
        </div>

        <button
          className="text-start mt-5 font-bold"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
    </Container>
  );
};

export default Error;
