"use client";

import { Card, CardBody, Chip, Button } from "@heroui/react";
import {
  FaTruck,
  FaUsers,
  FaAward,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import Navigation from "../../components/Navbar";

export default function Sobre() {
  const milestones = [
    {
      year: "2015",
      title: "Fundação",
      description:
        "A Biazo360 foi fundada com a missão de revolucionar o transporte no Brasil",
    },
    {
      year: "2017",
      title: "Primeira Expansão",
      description:
        "Expandimos para 5 estados brasileiros, dobrando nossa capacidade de entrega",
    },
    {
      year: "2019",
      title: "Tecnologia Avançada",
      description:
        "Implementamos sistema de rastreamento em tempo real e IA para otimização de rotas",
    },
    {
      year: "2021",
      title: "Cobertura Nacional",
      description:
        "Alcançamos 100% do território nacional com entregas em até 24 horas",
    },
    {
      year: "2023",
      title: "Sustentabilidade",
      description: "Lançamos nossa frota 100% elétrica para entregas urbanas",
    },
    {
      year: "2024",
      title: "Liderança",
      description:
        "Nos tornamos a transportadora mais confiável do Brasil segundo pesquisa independente",
    },
  ];

  const values = [
    {
      icon: <FaTruck className="text-4xl text-blue-600" />,
      title: "Eficiência",
      description:
        "Sempre buscamos a melhor forma de entregar seus produtos no menor tempo possível",
    },
    {
      icon: <FaHeart className="text-4xl text-blue-600" />,
      title: "Paixão",
      description:
        "Amamos o que fazemos e isso se reflete na qualidade do nosso atendimento",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Pessoas",
      description:
        "Nossos clientes e colaboradores são o coração da nossa empresa",
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-600" />,
      title: "Inovação",
      description:
        "Sempre em busca de novas tecnologias para melhorar nossos serviços",
    },
  ];

  const team = [
    {
      name: "Matheus Biazotto",
      position: "CEO & Fundador",
      description:
        "Responsável pela configuração do sistema administrativo - Salesforce.",
    },
    {
      name: "Matheus Biazotto",
      position: "Diretor de Operações",
      description:
        "Responsável pela modelagem, criação e hospedagem do banco de dados MySQL utilizando Docker em sua VPS.",
    },
    {
      name: "Matheus Biazotto",
      position: "Diretor de Tecnologia",
      description:
        "Responsável pela criação do backend da aplicação, utilizando Node.js, Express e Prisma (ORM), também hospedado em Docker em sua VPS.",
    },
    {
      name: "Matheus Biazotto",
      position: "Diretor de Atendimento",
      description:
        "Responsável pela criação do frontend da aplicação, utilizando Next.js, Tailwind CSS, HeroUI e React-Icons, também hospedado em Docker em sua VPS.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <Chip color="warning" variant="solid" size="lg" className="mb-4">
                <div className="flex items-center justify-center">
                  <FaAward className="mr-2" />
                  <span>Desde 2015</span>
                </div>
              </Chip>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nossa História
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Conheça a trajetória da Biazo360
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-3xl mx-auto">
              Uma jornada de inovação, crescimento e compromisso com a
              excelência em logística que transformou o transporte no Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" color="warning" className="text-lg px-8 py-6">
                <FaUsers className="mr-2" />
                Conheça Nossa Equipe
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nossa Identidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa empresa e definem nossa cultura
              organizacional
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-white group">
              <CardBody>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  Missão
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                  Conectar pessoas e empresas através de entregas rápidas,
                  seguras e confiáveis, revolucionando a experiência de
                  transporte no Brasil.
                </p>
              </CardBody>
            </Card>

            <Card className="text-center p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-white group">
              <CardBody>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaAward className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  Visão
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg text-justify">
                  Ser reconhecida como a transportadora mais inovadora e
                  confiável da América Latina, estabelecendo novos padrões de
                  excelência no setor.
                </p>
              </CardBody>
            </Card>

            <Card className="text-center p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 bg-white group">
              <CardBody>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  Valores
                </h3>
                <div className="flex flex-wrap justify-center gap-2 w-fit mx-auto">
                  <Chip color="primary" variant="flat" size="lg">
                    Integridade
                  </Chip>
                  <Chip color="primary" variant="flat" size="lg">
                    Inovação
                  </Chip>
                  <Chip color="primary" variant="flat" size="lg">
                    Excelência
                  </Chip>
                  <Chip color="primary" variant="flat" size="lg">
                    Segurança
                  </Chip>
                  <Chip color="primary" variant="flat" size="lg">
                    Compromisso
                  </Chip>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline da Empresa */}
      <section className="py-20 bg-gray-50 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma linha do tempo que mostra nossa evolução e conquistas ao longo
              dos anos
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {milestone.year}
                    </div>
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <Card className="flex-1 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                    <CardBody>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores Detalhados */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardBody>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais que fazem a Biazo360 ser a melhor
              transportadora do Brasil
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <CardBody>
                  <div className="relative mb-6">
                    <div
                      className="w-32 h-32 rounded-full mx-auto bg-cover bg-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('/1702338032908.jpeg')`,
                      }}
                    ></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <FaUsers className="text-white text-sm" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4 text-lg text-center">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {member.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Números que nos Orgulham
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500K+</h3>
              <p className="text-blue-100">Entregas Realizadas</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">99.8%</h3>
              <p className="text-blue-100">Taxa de Satisfação</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">27</h3>
              <p className="text-blue-100">Estados Atendidos</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">9</h3>
              <p className="text-blue-100">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Biazo360</h3>
          <p className="text-gray-300 mb-4">
            A transportadora mais confiável do Brasil
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Biazo360. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
