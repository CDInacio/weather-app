import { truncate } from "../helpers/truncate";

interface PeekProps {
  temperature: number;
  conditionText: string;
}

const Peek = ({ temperature, conditionText }: PeekProps) => {
  return (
    <div className="relative inline-block group">
      <div className="cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold">{temperature} °C</span>
          <span className="text-neutral-600 font-medium">
            {truncate(conditionText, 5)}
          </span>
        </div>
      </div>
      <div className="hidden group-hover:flex absolute rounded  items-center bg-white border shadow-md p-4 mt-2 z-50">
        <p className="font-semibold text-sm">{conditionText}</p>
      </div>
    </div>
  );
};

export default Peek;
