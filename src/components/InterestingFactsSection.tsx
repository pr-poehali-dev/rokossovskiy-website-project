import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InterestingFactsSection = () => {
  const facts = [
    {
      icon: "Heart",
      title: "Семейный человек",
      description:
        "Был женат дважды, имел детей. Очень любил свою семью и всегда находил время для близких, несмотря на военную службу.",
    },
    {
      icon: "BookOpen",
      title: "Самообразование",
      description:
        "Не имел высшего военного образования, но постоянно учился, читал военную литературу и изучал опыт великих полководцев.",
    },
    {
      icon: "Award",
      title: "Золотые зубы",
      description:
        "После тюремного заключения у него были выбиты зубы, которые заменили золотыми протезами — это стало его характерной чертой.",
    },
    {
      icon: "Users",
      title: "Забота о солдатах",
      description:
        "Был известен заботой о рядовых солдатах, старался минимизировать потери и всегда думал о людях под своим командованием.",
    },
    {
      icon: "Globe",
      title: "Польские корни",
      description:
        "Имел польские корни по отцовской линии, что помогло ему в работе на посту министра обороны Польши после войны.",
    },
    {
      icon: "Star",
      title: "Парад Победы",
      description:
        "Именно Рокоссовский командовал легендарным Парадом Победы на Красной площади 24 июня 1945 года на белом коне.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-900 mb-4">
            Интересные факты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Малоизвестные стороны жизни великого полководца
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={fact.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-3">
                  {fact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestingFactsSection;
