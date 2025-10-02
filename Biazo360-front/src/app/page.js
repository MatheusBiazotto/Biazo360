"use client";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import {
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import Navigation from "../components/Navbar";

export default function Home() {
  const testimonials = [
    "A mais rápida do Brasil",
    "Envie e receba com segurança - a transportadora mais segura do Brasil",
    "O melhor suporte para você, com atendentes humanos 24/7",
  ];

  const services = [
    {
      icon: <FaTruck className="text-4xl text-white" />,
      title: "Entrega Rápida",
      description: "Entregamos em todo o Brasil em até 24 horas",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Segurança Total",
      description: "Seus produtos protegidos com seguro completo",
    },
    {
      icon: <FaClock className="text-4xl text-white" />,
      title: "Pontualidade",
      description: "Compromisso com horários e prazos",
    },
    {
      icon: <FaHeadset className="text-4xl text-white" />,
      title: "Suporte 24/7",
      description: "Atendimento humano disponível sempre",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section com Carrossel */}
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
                  <FaStar className="mr-2" />
                  <span>#1 Transportadora do Brasil</span>
                </div>
              </Chip>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Biazo360
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              A transportadora mais confiável e rápida do Brasil
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
              Conectamos pessoas e empresas através de entregas rápidas, seguras
              e confiáveis. Mais de 500.000 entregas realizadas com 99.8% de
              satisfação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" color="warning" className="text-lg px-8 py-6">
                <FaTruck className="mr-2" />
                Solicitar Orçamento
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                as={Link}
                href="/rastreio"
                variant="bordered"
                color="warning"
                className="text-lg px-8 py-6"
              >
                <FaMapMarkerAlt className="mr-2" />
                Rastrear Encomenda
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Seção de Elogios */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Por que escolher a Biazo360?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos clientes nos escolhem pela qualidade, confiabilidade e
              excelência no atendimento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardBody>
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 text-2xl mx-1"
                      />
                    ))}
                  </div>
                  <p className="text-xl font-semibold text-gray-800 leading-relaxed text-center">
                    &ldquo;{testimonial}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUsers className="text-blue-600 text-xl" />
                    </div>
                    <div className="ml-3 text-left">
                      <p className="font-semibold text-gray-800">
                        Cliente Satisfeito
                      </p>
                      <p className="text-sm text-gray-600">Biazo360</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em logística para atender todas as
              suas necessidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <CardBody>
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Button
                      size="sm"
                      color="primary"
                      variant="light"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Saiba Mais
                      <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Números que Comprovam Nossa Excelência
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dados reais que mostram por que somos a escolha certa para suas
              entregas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaTruck className="text-4xl text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2">500K+</h3>
              <p className="text-blue-100 text-lg">Entregas Realizadas</p>
              <p className="text-blue-200 text-sm mt-2">Com sucesso total</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="text-4xl text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2">99.8%</h3>
              <p className="text-blue-100 text-lg">Taxa de Sucesso</p>
              <p className="text-blue-200 text-sm mt-2">Clientes satisfeitos</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-4xl text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2">24h</h3>
              <p className="text-blue-100 text-lg">Tempo Médio</p>
              <p className="text-blue-200 text-sm mt-2">Para entrega</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaStar className="text-4xl text-white" />
              </div>
              <h3 className="text-5xl font-bold mb-2">5★</h3>
              <p className="text-blue-100 text-lg">Avaliação Média</p>
              <p className="text-blue-200 text-sm mt-2">Pelos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Pronto para enviar sua encomenda?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você com
              soluções personalizadas para suas necessidades de transporte
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" color="primary" className="px-10 py-6 text-lg">
                <FaMapMarkerAlt className="mr-3" />
                Solicitar Coleta
                <FaArrowRight className="ml-3" />
              </Button>
              <Button
                size="lg"
                variant="bordered"
                color="primary"
                className="px-10 py-6 text-lg"
              >
                <FaHeadset className="mr-3" />
                Falar com Atendente
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Orçamento Gratuito
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Resposta em 2h
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Sem Compromisso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-white">Biazo360</h3>
              <p className="text-gray-300 mb-6 text-lg">
                A transportadora mais confiável e rápida do Brasil. Conectamos
                pessoas e empresas através de entregas seguras e eficientes.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <FaGlobe className="text-white text-xl" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <FaTruck className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Entrega Expressa
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Rastreamento 24h
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Coleta Domiciliar
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Seguro Total
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">
                  (11) 4002-8922
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  contato@biazo360.com.br
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  São Paulo - SP
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Atendimento 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Biazo360. Todos os direitos reservados. |
              <span className="ml-2">
                Desenvolvido com ❤️ por{" "}
                <Link
                  href="https://www.linkedin.com/in/matheus-biazotto-490406171/"
                  target="_blank"
                >
                  Matheus Biazotto
                </Link>{" "}
                para conectar o Brasil
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
