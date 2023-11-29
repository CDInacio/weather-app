import "moment/dist/locale/pt-br";

import SearchInput from "../components/input/searchInput";

const Home = () => {
  return (
    <main className="w-screen min-h-screen flex  flex-col justify-center items-center  relative  ">
      <div className="flex flex-col  items-center ">
        <div>
          <h1 className="text-3xl font-bold text-center"> Seja Bem-Vindo</h1>
          <h3 className="text-neutral-600 text-center text-sm">
            {" "}
            Veja a previsão do tempo de sua cidade
          </h3>
        </div>
        <img
          alt="icone de tempo"
          src="/images/weather-1.svg"
          className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] "
        />
      </div>
      <SearchInput className="w-[300px] sm:w-[400px] md:w-[450px]" />
    </main>
  );
};

export default Home;
