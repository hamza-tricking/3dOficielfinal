interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceColor: string;
  borderColor: string;
  titleColor: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  price,
  priceColor,
  borderColor,
  titleColor
}: ServiceCardProps) {
  return (
    <div className={`bg-gray-50 p-6 rounded-xl border border-gray-200 hover:${borderColor} transition-colors`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>{title}</h3>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <p className={`font-bold text-lg ${priceColor} mt-4`}>{price}</p>
    </div>
  );
}
