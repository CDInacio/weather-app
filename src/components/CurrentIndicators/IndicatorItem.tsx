import Icon from "../Icon";

interface IndicatorItemProps {
  text: string;
  value: string | number;
  icon: string;
  iconSize?: number;
}

const IndicatorItem = ({ text, value, icon, iconSize }: IndicatorItemProps) => {
  return (
    <div className="flex items-center justify-center relative bg-neutral-200 px-10 py-4 rounded h-full">
      <Icon type={icon} size={iconSize} className="absolute left-5" />
      <div className="ml-3 text-center">
        <p className="text-sm font-semibold text-neutral-600">{text}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default IndicatorItem;
