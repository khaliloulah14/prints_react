type CardSectionProps = {
  image: string;
  title: string;
  description?: string;
};

export default function CardSection({ image, title, description }: CardSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-full max-w-[400px] h-auto object-contain" />
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
    </div>
  );
}
