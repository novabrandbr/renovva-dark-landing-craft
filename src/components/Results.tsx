
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const Results = () => {
  const metrics = [
    {
      icon: TrendingUp,
      number: "2.5M+",
      label: "Leads Gerados",
      description: "Para nossos clientes nos últimos 12 meses"
    },
    {
      icon: DollarSign,
      number: "R$ 50M+",
      label: "Faturamento Gerado",
      description: "Em vendas diretas através das campanhas"
    },
    {
      icon: Users,
      number: "300+",
      label: "Clientes Ativos",
      description: "Empresas que confiam em nosso trabalho"
    },
    {
      icon: Award,
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Clientes que renovam conosco anualmente"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Impressionam</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Números reais de uma agência que entrega resultados concretos para seus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <metric.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {metric.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">{metric.label}</div>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Case Study Preview */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Case de Sucesso</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              "Aumentamos o faturamento da empresa XYZ em 340% em apenas 6 meses através de uma estratégia integrada de tráfego pago e SEO."
            </p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold underline">
              Ver Estudo Completo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
