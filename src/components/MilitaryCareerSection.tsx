import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MilitaryCareerSection = () => {
  const operations = [
    {
      name: "Битва под Москвой",
      period: "1941",
      role: "Командующий 16-й армией",
      result: "Успешная оборона столицы",
      significance: "Первая крупная победа над Wehrmacht",
    },
    {
      name: "Сталинградская битва",
      period: "1942-1943",
      role: "Командующий Донским фронтом",
      result: "Окружение 6-й армии Паулюса",
      significance: "Коренной перелом в войне",
    },
    {
      name: "Курская битва",
      period: "1943",
      role: "Командующий Центральным фронтом",
      result: "Отражение немецкого наступления",
      significance: "Окончательный переход инициативы к СССР",
    },
    {
      name: "Операция «Багратион»",
      period: "1944",
      role: "Командующий 1-м Белорусским фронтом",
      result: "Освобождение Белоруссии",
      significance: "Разгром группы армий «Центр»",
    },
    {
      name: "Берлинская операция",
      period: "1945",
      role: "Командующий 2-м Белорусским фронтом",
      result: "Взятие столицы Третьего рейха",
      significance: "Окончание войны в Европе",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4">
            Военная карьера
          </Badge>
          <h2 className="font-montserrat text-4xl font-bold text-slate-900 mb-4">
            Великие сражения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ключевые военные операции под командованием маршала Рокоссовского
          </p>
        </div>

        <div className="space-y-8">
          {operations.map((operation, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <CardTitle className="font-montserrat text-2xl mb-2 md:mb-0">
                    {operation.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white w-fit"
                  >
                    {operation.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Должность
                    </h4>
                    <p className="text-gray-600">{operation.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Результат
                    </h4>
                    <p className="text-gray-600">{operation.result}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Значение
                    </h4>
                    <p className="text-gray-600">{operation.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilitaryCareerSection;
