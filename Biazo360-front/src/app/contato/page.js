"use client";

import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Chip,
} from "@heroui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaTruck,
} from "react-icons/fa";
import Navigation from "../../components/Navbar";

export default function Contato() {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-white" />,
      title: "Telefone",
      info: "(11) 4002-8922",
      description: "Atendimento 24/7",
    },
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      title: "E-mail",
      info: "contato@biazo360.com.br",
      description: "Resposta em até 2 horas",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      title: "Endereço",
      info: "São Paulo - SP",
      description: "Matriz Nacional",
    },
    {
      icon: <FaClock className="text-2xl text-white" />,
      title: "Horário",
      info: "24 horas",
      description: "Atendimento ininterrupto",
    },
  ];

  const services = [
    "Solicitar Orçamento",
    "Rastrear Encomenda",
    "Reclamação",
    "Sugestão",
    "Informações Gerais",
    "Suporte Técnico",
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
                  <FaHeadset className="mr-2" />
                  <span>Atendimento 24/7</span>
                </div>
              </Chip>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Estamos aqui para ajudar você
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para atender suas
              necessidades e responder todas as suas dúvidas sobre nossos
              serviços
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" color="warning" className="text-lg px-8 py-6">
                <FaPhone className="mr-2" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="bordered"
                color="warning"
                className="text-lg px-8 py-6"
              >
                <FaEnvelope className="mr-2" />
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nossos Canais de Atendimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <CardBody>
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    {info.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3 text-center">
                    {info.info}
                  </p>
                  <p className="text-gray-600 text-center">
                    {info.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-gray-50 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Envie sua Mensagem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em
              até 2 horas
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card className="p-10 shadow-2xl bg-white">
              <CardBody>
                <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                  Formulário de Contato
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nome Completo"
                      placeholder="Digite seu nome"
                      variant="bordered"
                      size="lg"
                      isRequired
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      placeholder="seu@email.com"
                      variant="bordered"
                      size="lg"
                      isRequired
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefone"
                      placeholder="(11) 99999-9999"
                      variant="bordered"
                      size="lg"
                    />
                    <Select
                      label="Assunto"
                      placeholder="Selecione o assunto"
                      variant="bordered"
                      size="lg"
                      isRequired
                    >
                      {services.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          className="text-black"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <Textarea
                    label="Mensagem"
                    placeholder="Descreva sua solicitação..."
                    variant="bordered"
                    minRows={5}
                    size="lg"
                    isRequired
                  />

                  <Button
                    color="primary"
                    size="lg"
                    className="w-full py-6 text-lg"
                    startContent={<FaEnvelope />}
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardBody>
            </Card>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              <Card className="p-6 shadow-lg">
                <CardBody>
                  <div className="flex items-start space-x-4">
                    <FaHeadset className="text-3xl text-blue-600 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Atendimento 24/7
                      </h3>
                      <p className="text-gray-600">
                        Nossa equipe está sempre disponível para atender você,
                        seja para rastrear uma encomenda ou resolver qualquer
                        dúvida.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardBody>
                  <div className="flex items-start space-x-4">
                    <FaTruck className="text-3xl text-blue-600 mt-2" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Solicitar Coleta
                      </h3>
                      <p className="text-gray-600">
                        Precisa enviar algo? Nossa equipe pode ir até você para
                        coletar sua encomenda no local e horário de sua
                        preferência.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="p-6 shadow-lg bg-blue-50">
                <CardBody>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Resposta Rápida
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">WhatsApp:</span>
                      <span className="font-semibold text-blue-600">
                        Imediato
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">E-mail:</span>
                      <span className="font-semibold text-blue-600">
                        Até 2 horas
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Telefone:</span>
                      <span className="font-semibold text-blue-600">
                        Imediato
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Como rastrear minha encomenda?
                </h3>
                <p className="text-gray-600">
                  Use o código de rastreamento fornecido na nossa página de
                  rastreio ou entre em contato conosco.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Qual o prazo de entrega?
                </h3>
                <p className="text-gray-600">
                  Entregamos em todo o Brasil em até 24 horas para a maioria das
                  cidades.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Como solicitar uma coleta?
                </h3>
                <p className="text-gray-600">
                  Entre em contato conosco pelo telefone ou WhatsApp e
                  agendaremos a coleta no local desejado.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Vocês oferecem seguro?
                </h3>
                <p className="text-gray-600">
                  Sim, todos os nossos envios são automaticamente segurados
                  contra danos e extravios.
                </p>
              </CardBody>
            </Card>
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
