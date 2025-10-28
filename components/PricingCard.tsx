import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-8 ${
        highlighted
          ? 'bg-black text-white border-2 border-primary shadow-xl scale-105'
          : 'bg-white border-2 border-gray-200'
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Kostenlos' && <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}> / einmalig</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${
                highlighted ? 'text-primary' : 'text-primary'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >
        Jetzt starten
      </Button>
    </div>
  );
}
