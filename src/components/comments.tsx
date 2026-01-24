import { Quote } from "lucide-react";

const Comments = () => {
  const testimonials = [
    {
      name: "Maria S.",
      text: "A terapia mudou minha vida. Encontrei acolhimento e aprendi a lidar com minha ansiedade de forma muito mais saudável.",
      rating: 5,
    },
    {
      name: "João P.",
      text: "Profissional extremamente competente e empática. Recomendo muito! O ambiente é acolhedor e me sinto seguro para me expressar.",
      rating: 5,
    },
    {
      name: "Ana L.",
      text: "Após meses de terapia, consigo enxergar mudanças significativas no meu dia a dia. Gratidão por todo o suporte!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-stone-900">
            O Que Dizem Meus Pacientes
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Depoimentos de pessoas que encontraram equilíbrio e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-stone-200 bg-white rounded-lg p-6"
            >
              <div className="pt-6">
                <Quote className="h-8 w-8 text-teal-600 mb-4" />
                <p className="text-stone-700 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-stone-900">— {testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
