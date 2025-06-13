import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=500&fit=crop",
      alt: "Рокоссовский в военной форме",
      caption: "Маршал в парадной форме, 1945 год",
    },
    {
      src: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=400&h=500&fit=crop",
      alt: "Рокоссовский на фронте",
      caption: "На фронте во время операций, 1943 год",
    },
    {
      src: "https://images.unsplash.com/photo-1574681764077-d8e4c4bea9e8?w=400&h=500&fit=crop",
      alt: "Рокоссовский с офицерами",
      caption: "С командным составом армии",
    },
    {
      src: "https://images.unsplash.com/photo-1609012194637-4b6b3e3ae376?w=400&h=500&fit=crop",
      alt: "Рокоссовский на параде",
      caption: "Парад Победы на Красной площади, 1945",
    },
    {
      src: "https://images.unsplash.com/photo-1589578527952-0d8fdbf8262a?w=400&h=500&fit=crop",
      alt: "Рокоссовский в послевоенное время",
      caption: "В послевоенные годы",
    },
    {
      src: "https://images.unsplash.com/photo-1575482401807-0fafe03b0c27?w=400&h=500&fit=crop",
      alt: "Рокоссовский с семьей",
      caption: "С семьей в мирное время",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-white mb-4">
            Фотогалерея
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Исторические снимки маршала Рокоссовского
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-slate-800 border-slate-700 hover:border-amber-400 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
