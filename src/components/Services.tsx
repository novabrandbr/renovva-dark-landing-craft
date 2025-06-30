
import { Rocket, Target, TrendingUp, Zap, Globe, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar sua presença online e gerar mais leads qualificados."
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads e Facebook Ads com foco em conversão e ROI."
    },
    {
      icon: TrendingUp,
      title: "SEO & Conteúdo",
      description: "Posicionamento orgânico no Google através de conteúdo estratégico e otimização técnica."
    },
    {
      icon: Globe,
      title: "Social Media",
      description: "Gestão completa das redes sociais com conteúdo engajante e estratégias de crescimento."
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Análise de dados avançada para tomada de decisões baseada em métricas reais."
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Sistemas de automação de marketing para nutrir leads e aumentar conversões."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas de marketing digital para impulsionar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <service.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
