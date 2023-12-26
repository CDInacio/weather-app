import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen text-sm md:text-base px-5 flex items-center justify-center flex-col">
      <img
        src="/images/error.svg"
        className="w-[400px] h-[400px] "
        alt="error image"
      />
      <p className="font-semibold">
        Oops, um erro inesperado aconteceu! Tente novamente mais tarde.
      </p>
      <button className="mt-2 " onClick={handleNavigate}>
        Início
      </button>
    </div>
  );
};

export default Error;
