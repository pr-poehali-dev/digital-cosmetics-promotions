import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ООО "СОФКОТ"</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                О компании
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Продукция
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Производство и продажа
                  <span className="text-pink-400"> косметики</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Создаём и продаём качественную косметику, парфюмерию и
                  средства личной гигиены. Онлайн-магазин с доставкой по всей
                  России.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-pink-400 hover:bg-pink-500 text-white"
                >
                  Каталог товаров
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-pink-400 text-pink-400 hover:bg-pink-50"
                >
                  О производстве
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/17299c9b-ab23-4b5d-a194-3b0792de17bf.jpg"
                alt="Косметика и парфюмерия"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ООО "СОФКОТ" — российский производитель косметики, парфюмерии и
              средств личной гигиены с собственным интернет-магазином
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Factory" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Собственное производство
                  </h3>
                  <p className="text-gray-600">
                    Контроль качества на всех этапах производства косметических
                    средств
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Globe" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Интернет-торговля
                  </h3>
                  <p className="text-gray-600">
                    Удобная покупка онлайн с доставкой по всей России
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Award" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Качественная продукция
                  </h3>
                  <p className="text-gray-600">
                    Только проверенные ингредиенты и современные технологии
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/img/f570f413-6f23-47f4-948e-440701ea31e0.jpg"
                alt="Производство СОФКОТ"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент косметики, парфюмерии и средств личной гигиены
              собственного производства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">
                  Декоративная косметика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Тональные кремы, помады, тени для век, румяна и другая
                  декоративная косметика
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Droplets" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Уходовая косметика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Кремы для лица и тела, сыворотки, маски, очищающие средства
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Парфюмерия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Духи, туалетная вода, парфюмированные лосьоны и дезодоранты
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Soap" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Средства гигиены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Мыло, шампуни, гели для душа, зубные пасты и другие средства
                  гигиены
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShoppingCart" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Интернет-магазин</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Удобная покупка онлайн с доставкой по всей России
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Строгие стандарты качества и безопасности всей продукции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы ответить на ваши вопросы о нашей продукции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">sofkot19@mail.ru</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Globe" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Интернет-магазин
                  </h3>
                  <p className="text-gray-600">Онлайн-каталог с доставкой</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="Package" className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Доставка
                  </h3>
                  <p className="text-gray-600">По всей России</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="ваш@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Ваш вопрос или пожелание..."
                  />
                </div>
                <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ООО "СОФКОТ"</h3>
              <p className="text-gray-400 mb-4">
                Производство и продажа качественной косметики, парфюмерии и
                средств личной гигиены. Интернет-магазин с доставкой по всей
                России.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Декоративная косметика</li>
                <li>Уходовая косметика</li>
                <li>Парфюмерия</li>
                <li>Средства гигиены</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>sofkot19@mail.ru</li>
                <li>Интернет-магазин</li>
                <li>Доставка по РФ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО "СОФКОТ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
