import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BiographySection = () => {
  const lifeEvents = [
    {
      year: "1896",
      title: "Рождение",
      description:
        "Родился 21 декабря в городе Великие Луки в семье железнодорожника",
      icon: "Baby",
    },
    {
      year: "1914",
      title: "Начало службы",
      description:
        "Призван в армию, служил в 5-м Каргопольском драгунском полку",
      icon: "Sword",
    },
    {
      year: "1918",
      title: "Гражданская война",
      description: "Вступил в Красную Армию, командовал эскадроном, полком",
      icon: "Shield",
    },
    {
      year: "1937-1940",
      title: "Репрессии",
      description: "Арестован по ложному обвинению, провел в тюрьме три года",
      icon: "Lock",
    },
    {
      year: "1941-1945",
      title: "Великая Отечественная",
      description: "Командовал фронтами, провел блестящие операции",
      icon: "Medal",
    },
    {
      year: "1949-1956",
      title: "Министр обороны Польши",
      description: "Возглавлял вооруженные силы Польской Народной Республики",
      icon: "Globe",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-slate-900 mb-4">
            Жизненный путь
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            От простого солдата до маршала — история выдающегося военачальника
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifeEvents.map((event, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Icon
                      name={event.icon}
                      className="w-6 h-6 text-amber-600"
                    />
                  </div>
                  <div className="font-bold text-2xl text-amber-600">
                    {event.year}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
