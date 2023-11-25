import { useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const CityPage = () => {
  const { cityId } = useParams();

  useEffect(() => {
    const getRegisteredCities = async () => {
      const response = await axios.get(
        "/02f4d93d43de2aced8cf31cd80a791e9/locales"
      );
      const data = response.data;
      console.log(data);
    };

    getRegisteredCities();
  }, [cityId]);

  //   useEffect(() => {

  //       const addCityToToken = async () => {
  //         const data = new URLSearchParams()
  //         data.append('localeId[]', cityId as string)

  //         const response = await USER_TOKEN.put('/02f4d93d43de2aced8cf31cd80a791e9/locales', data)

  //     }
  //   }, []);

  return <div>CityPage</div>;
};

export default CityPage;
