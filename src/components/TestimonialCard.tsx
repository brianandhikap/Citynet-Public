interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export const TestimonialCard = ({ name, role, company, image, content }: TestimonialCardProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary/20"
        />
        <p className="text-gray-600 mb-6 italic">{content}</p>
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-500">{role}</p>
        <p className="text-gray-500">{company}</p>
      </div>
    </div>
  );
};
