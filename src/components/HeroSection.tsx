import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
              Маршал Советского Союза
            </Badge>
            <h1 className="font-montserrat text-5xl lg:text-6xl font-bold leading-tight">
              Константин
              <br />
              <span className="text-amber-400">Рокоссовский</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Выдающийся советский военачальник, один из самых талантливых
              полководцев Великой Отечественной войны, дважды Герой Советского
              Союза.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-400">
                  1896-1968
                </div>
                <div className="text-sm text-gray-300">Годы жизни</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-400">72 года</div>
                <div className="text-sm text-gray-300">Прожил</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=800&fit=crop&crop=faces"
                alt="Портрет маршала Рокоссовского"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
