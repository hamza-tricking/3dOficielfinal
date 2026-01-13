interface StandardServiceProps {
  id: string;
  name: string;
  normalPrice: string;
  discountPrice?: string;
  duration: string;
  isSelected: boolean;
  onToggle: (serviceId: string) => void;
}

export default function StandardService({
  id,
  name,
  normalPrice,
  discountPrice,
  duration,
  isSelected,
  onToggle
}: StandardServiceProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-b-0">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(id)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <div className="text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-colors">
          {name}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-500">⏱️ {duration}</span>
        <div className="text-right">
          {discountPrice ? (
            <>
              <div className="text-sm text-gray-500 line-through">{normalPrice}</div>
              <div className="text-xl font-bold text-blue-600">{discountPrice}</div>
            </>
          ) : (
            <div className="text-xl font-bold text-blue-600">{normalPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
}
