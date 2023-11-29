import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import {
  WiBarometer,
  WiHumidity,
  WiSmallCraftAdvisory,
  WiSunrise,
  WiSunset,
  WiWindy,
} from "react-icons/wi";

const Icon = ({ ...props }) => {
  switch (props.type) {
    case "location":
      return <IoLocationOutline {...props} />;
    case "date":
      return <IoCalendarOutline {...props} />;
    case "wind_speed":
      return <WiSmallCraftAdvisory {...props} />;
    case "preasure":
      return <WiBarometer {...props} />;
    case "visibility":
      return <WiWindy {...props} />;
    case "sun_set":
      return <WiSunset {...props} />;
    case "sun_rise":
      return <WiSunrise {...props} />;
    case "humidity":
      return <WiHumidity {...props} />;
    default:
      return <IoLocationOutline {...props} />;
  }
};

export default Icon;
