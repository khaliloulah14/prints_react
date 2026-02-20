interface TitleProps {
  title: string;
  description: string;
}

export default function TitleSection({ title, description }: TitleProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#2d3e50] leading-tight">
        {title}
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-lg">
        {description}
      </p>
    </div>
  )
}