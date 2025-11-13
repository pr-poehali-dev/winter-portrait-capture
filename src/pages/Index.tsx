import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Привет! 👋
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Добро пожаловать на мой личный сайт
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="hover-scale bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обо мне
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover-scale"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Галерея
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/bf075a14-2400-44df-8137-c77f05f30962.jpeg"
                alt="Портрет"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Моменты из жизни</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover-scale group animate-fade-in">
              <div className="relative aspect-[3/4]">
                <img
                  src="https://cdn.poehali.dev/files/1b758d13-a50f-41f5-9882-f8589c674605.png"
                  alt="Зимняя фотосессия"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
            
            <Card className="overflow-hidden hover-scale group animate-fade-in md:col-span-2">
              <div className="relative aspect-[3/2]">
                <img
                  src="https://cdn.poehali.dev/files/1b758d13-a50f-41f5-9882-f8589c674605.png"
                  alt="Лес и домик"
                  className="w-full h-full object-cover object-[center_50%] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
            
            <Card className="overflow-hidden hover-scale group animate-fade-in md:col-span-2">
              <div className="relative aspect-[3/2]">
                <img
                  src="https://cdn.poehali.dev/files/1b758d13-a50f-41f5-9882-f8589c674605.png"
                  alt="В машине"
                  className="w-full h-full object-cover object-[center_75%] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
            
            <Card className="overflow-hidden hover-scale group animate-fade-in">
              <div className="relative aspect-[3/4]">
                <img
                  src="https://cdn.poehali.dev/files/bf075a14-2400-44df-8137-c77f05f30962.jpeg"
                  alt="Портрет крупным планом"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Обо мне</h2>
          
          <Card className="p-8 md:p-12 animate-fade-in">
            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                Привет! Меня зовут [Имя]. Я люблю путешествия, фотографию и зимнюю природу. 
                Этот сайт — моё личное пространство, где я делюсь моментами из жизни.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 rounded-2xl bg-secondary/30 hover-scale">
                  <Icon name="Camera" size={40} className="mx-auto mb-4 text-accent-foreground" />
                  <h3 className="font-semibold mb-2">Фотография</h3>
                  <p className="text-sm text-muted-foreground">Ловлю моменты</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-secondary/30 hover-scale">
                  <Icon name="Compass" size={40} className="mx-auto mb-4 text-accent-foreground" />
                  <h3 className="font-semibold mb-2">Путешествия</h3>
                  <p className="text-sm text-muted-foreground">Исследую мир</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-secondary/30 hover-scale">
                  <Icon name="Snowflake" size={40} className="mx-auto mb-4 text-accent-foreground" />
                  <h3 className="font-semibold mb-2">Зима</h3>
                  <p className="text-sm text-muted-foreground">Моё время года</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Связаться со мной</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="hover-scale">
                <Icon name="Instagram" size={20} className="mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Icon name="Mail" size={20} className="mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-muted-foreground border-t">
        <p>© 2025 Личный сайт. Создано с ❄️</p>
      </footer>
    </div>
  );
};

export default Index;
