import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Gift, Clock, Users, BookOpen, Palette, Award } from 'lucide-react';

// Import images
import heroBanner from '/lovable-uploads/04ec267c-afc7-496f-8fce-480e72f77234.png';
import heroinasDaFe from '/lovable-uploads/f84b5ac3-ffaa-4a4d-b405-fabc8952007b.png';
import heroisDaFe from '/lovable-uploads/7b028958-f1f4-427a-8b85-4edf60670c56.png';
import parabolasDeJesus from '/lovable-uploads/dee712c1-4af4-4fd3-b4dc-fc546e514abd.png';
import amigosDeJesus from '/lovable-uploads/02884c3d-2f10-412e-ad91-780242fae1a8.png';

// Product images - usando as novas imagens
import heroinasKit from '/lovable-uploads/f84b5ac3-ffaa-4a4d-b405-fabc8952007b.png';
import heroisKit from '/lovable-uploads/7b028958-f1f4-427a-8b85-4edf60670c56.png';
import parabolasKit from '/lovable-uploads/dee712c1-4af4-4fd3-b4dc-fc546e514abd.png';
import amigosKit from '/lovable-uploads/02884c3d-2f10-412e-ad91-780242fae1a8.png';

// Bonus images
import devocionaInfantil from '@/assets/devocional-infantil.jpg';
import jogosPedagogicos from '@/assets/jogos-pedagogicos.jpg';
import historiasBiblicas from '@/assets/historias-biblicas.jpg';
import garantiaSelo from '@/assets/garantia-selo.jpg';

const LandingPage = () => {
  const scrollToBuy = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Social proof notifications
  const socialProofs = [
    "Marcela acabou de comprar o Kit Premium",
    "Ana comprou o Combo Promocional", 
    "Juliana adquiriu o Kit Completo",
    "Carla comprou Heroínas da Fé",
    "Patricia adquiriu Heróis da Fé",
    "Fernanda comprou Parábolas de Jesus",
    "Lucia adquiriu Amigos de Jesus",
    "Sofia comprou o Kit Premium"
  ];

  const [currentProof, setCurrentProof] = React.useState(0);
  const [showNotification, setShowNotification] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentProof((prev) => (prev + 1) % socialProofs.length);
        setShowNotification(true);
        // Hide notification after 3 seconds (time to read)
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }, 500);
    }, 20000); // 20 seconds between notifications

    return () => clearInterval(interval);
  }, [socialProofs.length]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Promotional Banner */}
      <div className="bg-hope-green text-white py-3 px-4 text-center font-bold text-sm md:text-base">
        🎉 SUPER OFERTA LANÇAMENTO INÉDITO!
      </div>

      {/* Hero Section - Clean and Organized */}
      <section className="bg-gradient-primary py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-8">
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Kit DIGITAL com 4 livros temáticos no estilo 
              <span className="text-joy-yellow block mt-2">BobbieGoods</span> 
              para imprimir e colorir
            </h1>
            
            {/* Hero Image */}
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <img 
                src={heroBanner} 
                alt="Criança feliz com cadernos cristãos para colorir" 
                className="w-full rounded-2xl shadow-card object-cover aspect-[3/4]"
              />
            </div>

            {/* Subtitle */}
            <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Receba agora 4 cadernos encantadores em estilo Bobbie Goods e ensine a Palavra com leveza, beleza e verdade.
            </p>

            {/* Main CTA */}
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToBuy} 
              className="text-lg py-4 px-8 font-bold"
            >
              QUERO ESSE KIT AGORA!
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            
            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm pt-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-joy-yellow mr-2" />
                <span>Mais de 100 páginas</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-joy-yellow mr-2" />
                <span>Para todas as idades</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-joy-yellow mr-2" />
                <span>Download instantâneo</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Individual Product Offers */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="faith" className="mb-3 md:mb-4 text-base md:text-lg px-3 md:px-4 py-1 md:py-2">
              4 CADERNOS INCRÍVEIS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Conheça Cada Tesouro do Kit
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada caderno foi cuidadosamente desenvolvido para ensinar valores específicos 
              através de ilustrações encantadoras e atividades envolventes.
            </p>
          </div>

          {/* Mobile-First Product Cards */}
          <div className="space-y-6">
            {/* Heroínas da Fé */}
            <Card className="overflow-hidden shadow-card bg-white">
              <div className="relative">
                <img src={heroinasDaFe} alt="Heroínas da Fé" className="w-full h-48 md:h-56 object-cover" />
                <Badge variant="love" className="absolute top-4 left-4 text-sm font-bold">
                  CORAGEM
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-love-pink mb-2">Heroínas da Fé</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mulheres bíblicas que marcaram gerações agora em desenhos prontos para colorir, 
                      cheios de ternura e força. Um material lindo que fortalece identidade, 
                      propósito e valores cristãos femininos.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Mais de 29 páginas com ilustrações lúdicas e pedagógicas que podem ser usadas em casa, na igreja ou em atendimentos com crianças e adolescentes.</p>
                    <p className="text-sm font-semibold">Ideal para ensinar: coragem, identidade, fé ativa.</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t gap-4">
                    <span className="text-3xl font-bold text-love-pink whitespace-nowrap">R$&nbsp;5,00</span>
                    <Button variant="love" className="text-sm font-bold px-4 py-3 min-w-0 flex-shrink-0" onClick={() => window.open('https://pay.sunize.com.br/FRnlCKZw', '_blank')}>
                      QUERO ESSE CADERNO
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heróis da Fé */}
            <Card className="overflow-hidden shadow-card bg-white">
              <div className="relative">
                <img src={heroisDaFe} alt="Heróis da Fé" className="w-full h-48 md:h-56 object-cover" />
                <Badge variant="faith" className="absolute top-4 left-4 text-sm font-bold">
                  BRAVURA
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-faith-blue mb-2">Heróis da Fé</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Personagens masculinos que eternizaram histórias de fé e coragem. 
                      Destaca obediência a Deus e força interior para enfrentar desafios.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Mais de 29 páginas com ilustrações detalhadas de grandes heróis bíblicos.</p>
                    <p className="text-sm font-semibold">Ideal para ensinar: determinação, obediência, liderança.</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t gap-4">
                    <span className="text-3xl font-bold text-faith-blue whitespace-nowrap">R$&nbsp;5,00</span>
                    <Button variant="faith" className="text-sm font-bold px-4 py-3 min-w-0 flex-shrink-0" onClick={() => window.open('https://pay.sunize.com.br/FRnlCKZw', '_blank')}>
                      QUERO ESSE CADERNO
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parábolas de Jesus */}
            <Card className="overflow-hidden shadow-card bg-white">
              <div className="relative">
                <img src={parabolasDeJesus} alt="Parábolas de Jesus" className="w-full h-48 md:h-56 object-cover" />
                <Badge variant="hope" className="absolute top-4 left-4 text-sm font-bold">
                  AMOR
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hope-green mb-2">Parábolas de Jesus</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Histórias atemporais como o Filho Pródigo e o Bom Samaritano. 
                      Valores eternos apresentados de forma simples e profunda.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Mais de 30 páginas com os ensinamentos de Jesus ilustrados com carinho.</p>
                    <p className="text-sm font-semibold">Ideal para ensinar: compaixão, perdão, amor ao próximo.</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t gap-4">
                    <span className="text-3xl font-bold text-hope-green whitespace-nowrap">R$&nbsp;5,00</span>
                    <Button variant="hope" className="text-sm font-bold px-4 py-3 min-w-0 flex-shrink-0" onClick={() => window.open('https://pay.sunize.com.br/FRnlCKZw', '_blank')}>
                      QUERO ESSE CADERNO
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amigos de Jesus */}
            <Card className="overflow-hidden shadow-card bg-white">
              <div className="relative">
                <img src={amigosDeJesus} alt="Amigos de Jesus" className="w-full h-48 md:h-56 object-cover" />
                <Badge variant="joy" className="absolute top-4 left-4 text-sm font-bold">
                  AMIZADE
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-joy-yellow mb-2">Amigos de Jesus</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Discípulos e companheiros de Jesus em sua missão terrena. 
                      Ensina sobre amizade verdadeira, lealdade e comunidade cristã.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Mais de 30 páginas retratando os momentos de comunhão e aprendizado.</p>
                    <p className="text-sm font-semibold">Ideal para ensinar: amizade, comunidade, trabalho em equipe.</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t gap-4">
                    <span className="text-3xl font-bold text-joy-yellow whitespace-nowrap">R$&nbsp;5,00</span>
                    <Button variant="joy" className="text-sm font-bold px-4 py-3 min-w-0 flex-shrink-0" onClick={() => window.open('https://pay.sunize.com.br/FRnlCKZw', '_blank')}>
                      QUERO ESSE CADERNO
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Combo Premium Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="bonus" className="mb-3 md:mb-4 text-base md:text-lg px-3 md:px-4 py-1 md:py-2">
              🏆 COMBO PREMIUM
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              A Experiência Completa!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Todos os cadernos + bônus exclusivos para uma jornada de fé completa
            </p>
          </div>

          <Card className="bg-white border-2 border-primary shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Kit Completo + 3 Bônus Exclusivos</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Tudo que você precisa para transformar o aprendizado da fé
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <img src={heroinasKit} alt="Kit Heroínas da Fé" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Heroínas da Fé</p>
                </div>
                <div className="text-center">
                  <img src={heroisKit} alt="Kit Heróis da Fé" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Heróis da Fé</p>
                </div>
                <div className="text-center">
                  <img src={parabolasKit} alt="Kit Parábolas de Jesus" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Parábolas de Jesus</p>
                </div>
                <div className="text-center">
                  <img src={amigosKit} alt="Kit Amigos de Jesus" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Amigos de Jesus</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Kit Completo:</h4>
                  <ul className="space-y-1 text-sm md:text-base text-muted-foreground mb-4">
                    <li>✅ 4 Cadernos Temáticos (100+ páginas)</li>
                  </ul>

                  <h4 className="font-semibold text-foreground mb-3">Bônus Exclusivos:</h4>
                  <ul className="space-y-1 text-sm md:text-base text-muted-foreground">
                    <li>🎁 Devocional Infantil Ilustrado</li>
                    <li>🎁 22 Jogos Pedagógicos Bíblicos</li>
                    <li>🎁 50 Histórias Bíblicas Ilustradas</li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Valor total: <span className="line-through whitespace-nowrap">R$&nbsp;129,60</span></p>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2 whitespace-nowrap">R$&nbsp;27,00</p>
                  <p className="text-xs md:text-sm text-primary font-medium whitespace-nowrap">Economia de R$&nbsp;102,60!</p>
                  <p className="text-xs text-muted-foreground mt-1">Desconto de 79%</p>
                </div>
              </div>

              <Button variant="cta" size="lg" className="w-full text-sm md:text-base lg:text-lg py-3 md:py-4 mb-3 px-3 md:px-4" onClick={() => window.open('https://pay.sunize.com.br/UfItSuXI', '_blank')}>
                🏆 QUERO O COMBO PREMIUM POR R$&nbsp;27,00
              </Button>
              
              <p className="text-center text-xs md:text-sm text-muted-foreground">
                🔥 Oferta por tempo limitado • ⚡ Download instantâneo
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Combo Promocional Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-hope-green/10 to-hope-green/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="hope" className="mb-3 md:mb-4 text-base md:text-lg px-3 md:px-4 py-1 md:py-2">
              💚 COMBO PROMOCIONAL
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Leve Mais, Pague Menos!
            </h2>
          </div>

          <Card className="bg-white border-2 border-hope-green shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-hope-green mb-2">Kit Completo - 4 Cadernos</h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Todos os 4 cadernos temáticos por um preço especial
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <img src={heroinasKit} alt="Kit Heroínas da Fé" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Heroínas da Fé</p>
                </div>
                <div className="text-center">
                  <img src={heroisKit} alt="Kit Heróis da Fé" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Heróis da Fé</p>
                </div>
                <div className="text-center">
                  <img src={parabolasKit} alt="Kit Parábolas de Jesus" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Parábolas de Jesus</p>
                </div>
                <div className="text-center">
                  <img src={amigosKit} alt="Kit Amigos de Jesus" className="w-full h-32 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">Amigos de Jesus</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">O que você recebe:</h4>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>✅ Heroínas da Fé (25+ páginas)</li>
                    <li>✅ Heróis da Fé (25+ páginas)</li>
                    <li>✅ Parábolas de Jesus (25+ páginas)</li>
                    <li>✅ Amigos de Jesus (25+ páginas)</li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Valor individual: <span className="line-through whitespace-nowrap">R$&nbsp;9,96</span></p>
                  <p className="text-3xl md:text-4xl font-bold text-hope-green mb-2 whitespace-nowrap">R$&nbsp;10,00</p>
                  <p className="text-xs md:text-sm text-hope-green font-medium whitespace-nowrap">Economia de R$&nbsp;2,49!</p>
                </div>
              </div>

              <Button variant="hope" size="lg" className="w-full text-base md:text-lg py-3 md:py-4" onClick={() => window.open('https://pay.sunize.com.br/UBVDXfKR', '_blank')}>
                🛒 QUERO O COMBO POR R$&nbsp;10,00
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-gradient-joy">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Por que Mães e Educadoras Cristãs 
              <span className="text-primary"> Estão Amando?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <Palette className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Desenvolvimento Criativo</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Estimula a coordenação motora, criatividade e concentração através da arte.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-love-pink mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Valores Eternos</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Ensina fé, amor, coragem e obediência de forma natural e envolvente.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-hope-green mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Atividade em Família</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Momentos especiais de conexão familiar através da fé e diversão.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-faith-blue mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Recurso Pedagógico</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Perfeito para EBD, ministério infantil e educação cristã.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <Award className="w-12 h-12 md:w-16 md:h-16 text-peace-purple mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Qualidade Profissional</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Ilustrações modernas no estilo BobbieGoods, prontas para imprimir.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-soft">
              <Gift className="w-12 h-12 md:w-16 md:h-16 text-warning mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Acesso Imediato</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Download instantâneo após a compra. Comece a usar hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="bonus" className="mb-4 text-lg px-4 py-2">
              🎁 BÔNUS EXCLUSIVOS
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mas Espere! Tem Muito Mais...
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprando hoje, você leva GRÁTIS estes recursos que vão multiplicar 
              o aprendizado e diversão dos pequenos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-gradient-love text-white border-0 shadow-xl">
              <div className="relative">
                <img src={devocionaInfantil} alt="Devocional Infantil" className="w-full h-48 object-cover" />
                <Badge variant="outline" className="absolute top-4 left-4 border-white text-white bg-white/20 backdrop-blur-sm">
                  DEVOCIONAL
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Devocional Infantil</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      30 devocionais ilustrados para momentos especiais com Deus. Orações e reflexões adaptadas para crianças.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-faith text-white border-0 shadow-xl">
              <div className="relative">
                <img src={jogosPedagogicos} alt="22 Jogos Pedagógicos" className="w-full h-48 object-cover" />
                <Badge variant="outline" className="absolute top-4 left-4 border-white text-white bg-white/20 backdrop-blur-sm">
                  JOGOS
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">22 Jogos Pedagógicos</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Dominó, bingo, jogo da memória e outros jogos cristãos para imprimir e se divertir aprendendo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-joy text-foreground border-0 shadow-xl">
              <div className="relative">
                <img src={historiasBiblicas} alt="50 Histórias Ilustradas" className="w-full h-48 object-cover" />
                <Badge variant="outline" className="absolute top-4 left-4 border-foreground text-foreground bg-white/20 backdrop-blur-sm">
                  HISTÓRIAS
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">50 Histórias Ilustradas</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Livro digital completo com as principais histórias bíblicas ilustradas e adaptadas para crianças.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que Mães e Educadoras Estão Dizendo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-joy-yellow fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Minha filha de 6 anos se apaixonou pelos cadernos! Ela pede todos os dias 
                  para colorir as heroínas da fé. Está aprendendo tanto sobre coragem!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-love-pink rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Mariana Silva</p>
                    <p className="text-muted-foreground">Mãe e Professora de EBD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-joy-yellow fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Uso os cadernos no ministério infantil da nossa igreja. As crianças ficam 
                  super envolvidas e os pais adoram ver os valores sendo ensinados!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-faith-blue rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">Juliana Costa</p>
                    <p className="text-muted-foreground">Líder de Ministério Infantil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-joy-yellow fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Como psicóloga infantil, vejo o impacto positivo que as atividades têm 
                  no desenvolvimento emocional e espiritual das crianças. Recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-hope-green rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Ana Carolina</p>
                    <p className="text-muted-foreground">Psicóloga Infantil</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-joy-yellow/10 to-joy-yellow/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <Card className="bg-white border-2 border-joy-yellow shadow-xl overflow-hidden max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src={garantiaSelo} 
                    alt="Selo de Garantia 7 Dias" 
                    className="w-24 h-24 md:w-32 md:h-32"
                  />
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      Garantia de 7 Dias
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Se não ficar 100% satisfeita, devolvemos seu dinheiro. 
                      Sem perguntas, sem burocracias.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Notification */}
      {showNotification && (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm">
          <Card className="bg-white border-l-4 border-primary shadow-lg animate-in slide-in-from-bottom-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-hope-green rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {socialProofs[currentProof]}
                  </p>
                  <p className="text-xs text-muted-foreground">há poucos minutos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Final CTA Section - Mobile Optimized */}
      <section id="comprar" className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-6">
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3">
                  <img src={heroBanner} alt="Kit Completo" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">🎁 Kit Completo Premium</h3>
                    <p className="text-white/90 text-sm">4 Cadernos + 3 Bônus Exclusivos:</p>
                    <ul className="text-white/80 text-xs mt-2 space-y-1">
                      <li>• 4 Cadernos Temáticos (100+ páginas)</li>
                      <li>• Devocional Infantil Ilustrado</li>
                      <li>• 22 Jogos Pedagógicos Bíblicos</li>
                      <li>• 50 Histórias Bíblicas Ilustradas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 line-through whitespace-nowrap">R$&nbsp;129,60</p>
                    <p className="text-4xl font-bold whitespace-nowrap">R$&nbsp;27,00</p>
                    <p className="text-sm text-joy-yellow whitespace-nowrap">Economize R$&nbsp;102,60!</p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg" className="w-full text-lg py-4 font-bold">
              🛒 QUERO MEU KIT AGORA!
            </Button>
            
            <div className="text-center space-y-2 text-white/80 text-sm">
              <p>⚡ Download instantâneo</p>
              <p>💳 Pagamento 100% seguro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-muted text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Kit Cristão Infantil - Transformando corações através da fé
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
