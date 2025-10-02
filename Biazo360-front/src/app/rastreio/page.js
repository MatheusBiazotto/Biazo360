"use client";

import { Card, CardBody, Input, Button, Chip, Divider } from "@heroui/react";
import {
  FaSearch,
  FaTruck,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaTimes,
} from "react-icons/fa";
import Navigation from "../../components/Navbar";
import { useRef } from "react";
import { formatDate, formatDeliveryDate, mapStatus } from "../../utils/api";
import { useTracking } from "../../hooks/useTracking";

const statusColors = {
  Postado: "success",
  "Em Trânsito": "primary",
  Atrasado: "danger",
  "Saiu para Entrega": "secondary",
  Entregue: "success",
  "Falha na Entrega": "warning",
  Cancelado: "default",
  Processando: "warning",
  Coletado: "default",
};

const statusBgColors = {
  Postado: "bg-green-500",
  "Em Trânsito": "bg-blue-500",
  Atrasado: "bg-red-500",
  "Saiu para Entrega": "bg-purple-500",
  Entregue: "bg-green-600",
  "Falha na Entrega": "bg-orange-500",
  Cancelado: "bg-gray-500",
  Processando: "bg-yellow-500",
  Coletado: "bg-gray-400",
};

export default function Rastreio() {
  const searchSectionRef = useRef(null);
  const resultSectionRef = useRef(null);

  const {
    trackingCode,
    trackingData,
    isSearching,
    error,
    hasSearched,
    searchTracking,
    clearSearch,
    setTrackingCode,
    setTrackingData,
  } = useTracking();

  const handleSearch = async () => {
    if (trackingCode.trim()) {
      await searchTracking(trackingCode.trim());
      setTimeout(() => {
        if (resultSectionRef.current) {
          resultSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleClearSearch = () => {
    clearSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleScrollToSearch = () => {
    if (searchSectionRef.current) {
      searchSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getStatusColor = (status) => {
    return statusColors[status] || "default";
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Entregue":
        return <FaCheckCircle className="text-white" />;
      case "Em Trânsito":
        return <FaTruck className="text-white" />;
      case "Processando":
        return <FaClock className="text-white" />;
      case "Coletado":
      case "Postado":
        return <FaMapMarkerAlt className="text-white" />;
      case "Saiu para Entrega":
        return <FaTruck className="text-white" />;
      case "Atrasado":
        return <FaExclamationTriangle className="text-white" />;
      case "Falha na Entrega":
        return <FaExclamationTriangle className="text-white" />;
      case "Cancelado":
        return <FaTimes className="text-white" />;
      default:
        return <FaExclamationTriangle className="text-white" />;
    }
  };

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
                  <FaSearch className="mr-2" />
                  <span>Rastreamento de Encomendas</span>
                </div>
              </Chip>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Rastrear Encomenda
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Acompanhe sua encomenda
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-3xl mx-auto">
              Digite o código de rastreamento e acompanhe cada etapa da jornada
              da sua encomenda até o destino final
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={handleScrollToSearch}
                size="lg"
                color="warning"
                className="text-lg px-8 py-6"
              >
                <FaSearch className="mr-2" />
                Rastrear Agora
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Seção de Busca */}
      <section className="py-20 bg-white relative" ref={searchSectionRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Digite o código de rastreamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insira o código que você recebeu por e-mail ou SMS para acompanhar
              sua encomenda
            </p>
          </div>
          <Card className="p-10 shadow-2xl bg-white">
            <CardBody>
              <div className="flex flex-col items-center sm:flex-row gap-6 max-w-3xl mx-auto">
                <Input
                  label="Código de Rastreamento"
                  placeholder="Ex: CR6DLPJ751"
                  value={trackingCode}
                  onChange={(e) =>
                    setTrackingCode(e.target.value.toUpperCase())
                  }
                  onKeyPress={handleKeyPress}
                  variant="bordered"
                  size="lg"
                  className="w-[400px] text-black"
                  startContent={<FaSearch className="text-gray-400" />}
                  endContent={
                    trackingCode && (
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        onPress={handleClearSearch}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FaTimes />
                      </Button>
                    )
                  }
                />
                <div className="flex gap-3">
                  <Button
                    color="primary"
                    size="lg"
                    onPress={handleSearch}
                    isLoading={isSearching}
                    isDisabled={!trackingCode.trim()}
                    className="px-10 py-6 text-lg"
                  >
                    Rastrear
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Formato do código de rastreamento
                  </h3>
                  <p className="text-gray-600 mb-2">
                    CR + 8 caracteres (letras e números)
                  </p>
                  <p className="text-sm text-gray-500">
                    Exemplos: CR6DLPJ751, CR9XYZ123, CR2ABC456
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Resultado da Busca */}
      {hasSearched && (
        <section ref={resultSectionRef} className="py-20 bg-gray-50 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            {error ? (
              <Card className="p-10 shadow-2xl bg-white">
                <CardBody>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaExclamationTriangle className="text-red-500 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Erro ao buscar rastreamento
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{error}</p>
                    <Button
                      color="primary"
                      size="lg"
                      onPress={handleClearSearch}
                      className="px-8 py-3"
                    >
                      Tentar Novamente
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ) : trackingData ? (
              <Card className="p-10 shadow-2xl bg-white">
                <CardBody>
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Status da Encomenda
                    </h3>
                  </div>

                  {/* Status Atual */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-10 border-2 border-blue-200">
                    <div className="flex items-center justify-center space-x-6 mb-6">
                      <div
                        className={`w-16 h-16 ${
                          statusBgColors[
                            mapStatus(trackingData.encomenda.status)
                          ] || "bg-gray-500"
                        } rounded-full flex items-center justify-center`}
                      >
                        {getStatusIcon(
                          mapStatus(trackingData.encomenda.status)
                        )}
                      </div>
                      <Chip
                        color={getStatusColor(
                          mapStatus(trackingData.encomenda.status)
                        )}
                        variant="flat"
                        size="lg"
                        className="text-lg px-6 py-2"
                      >
                        {mapStatus(trackingData.encomenda.status)}
                      </Chip>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-semibold text-gray-800 mb-2">
                        Última Atualização:{" "}
                        {formatDate(trackingData.encomenda.ultima_atualizacao)}
                      </p>
                      <p className="text-lg text-gray-600">
                        Previsão de entrega:{" "}
                        <span className="font-bold text-blue-600">
                          {formatDeliveryDate(
                            trackingData.encomenda.previsao_entrega
                          )}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Informações do Remetente e Destinatário */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
                      <CardBody>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-white text-xl" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-1">
                              Remetente
                            </h4>
                            <p className="text-lg text-gray-600 font-medium">
                              {trackingData.encomenda.nome_remetente}
                            </p>
                            <p className="text-sm text-gray-500">
                              {trackingData.encomenda.email_remetente}
                            </p>
                            <p className="text-sm text-gray-500">
                              {trackingData.encomenda.tel_remetente}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
                      <CardBody>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <FaMapMarkerAlt className="text-white text-xl" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-1">
                              Destinatário
                            </h4>
                            <p className="text-lg text-gray-600 font-medium">
                              {trackingData.encomenda.nome_destinatario}
                            </p>
                            <p className="text-sm text-gray-500">
                              {trackingData.encomenda.email_destinatario}
                            </p>
                            <p className="text-sm text-gray-500">
                              {trackingData.encomenda.tel_destinatario}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  {/* Histórico de Rastreamento */}
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                      Histórico de Rastreamento
                    </h4>
                    <div className="relative">
                      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600"></div>
                      <div className="space-y-8">
                        {trackingData.historico
                          .sort(
                            (a, b) =>
                              new Date(b.data_evento) - new Date(a.data_evento)
                          )
                          .map((event, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-6 group"
                            >
                              <div className="flex-shrink-0 relative">
                                <div
                                  className={`w-12 h-12 ${
                                    statusBgColors[mapStatus(event.status)] ||
                                    "bg-gray-500"
                                  } rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {getStatusIcon(mapStatus(event.status))}
                                </div>
                                <div
                                  className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                                    statusBgColors[mapStatus(event.status)] ||
                                    "bg-gray-500"
                                  } rounded-full`}
                                ></div>
                              </div>
                              <Card className="flex-1 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                                <CardBody>
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-3">
                                      <span className="text-xl font-semibold text-gray-800">
                                        {mapStatus(event.status)}
                                      </span>
                                      <Chip
                                        color={getStatusColor(
                                          mapStatus(event.status)
                                        )}
                                        variant="flat"
                                        size="lg"
                                      >
                                        {mapStatus(event.status)}
                                      </Chip>
                                    </div>
                                  </div>
                                  <p className="text-lg text-gray-600 mb-2 font-medium">
                                    {event.localizacao}
                                  </p>
                                  <p className="text-gray-500 text-sm mb-3">
                                    {formatDate(event.data_evento)}
                                  </p>
                                  <p className="text-gray-700">
                                    {event.descricao}
                                  </p>
                                </CardBody>
                              </Card>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card className="p-10 shadow-2xl bg-white">
                <CardBody>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaSearch className="text-gray-400 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Nenhum resultado encontrado
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Verifique o código de rastreamento e tente novamente
                    </p>
                    <Button
                      color="primary"
                      size="lg"
                      onPress={handleClearSearch}
                      className="px-8 py-3"
                    >
                      Nova Busca
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Informações Adicionais */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Precisa de Ajuda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg">
              <CardBody>
                <FaTruck className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                  Não encontrou seu código?
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Verifique seu e-mail ou entre em contato conosco
                </p>
                <Button color="primary" variant="flat">
                  Entrar em Contato
                </Button>
              </CardBody>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <CardBody>
                <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                  Atraso na entrega?
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Nossa equipe está pronta para resolver qualquer problema
                </p>
                <Button color="primary" variant="flat">
                  Reportar Problema
                </Button>
              </CardBody>
            </Card>

            <Card className="text-center p-6 shadow-lg">
              <CardBody>
                <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                  Alterar endereço?
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Ainda é possível alterar o endereço de entrega
                </p>
                <Button color="primary" variant="flat">
                  Alterar Endereço
                </Button>
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
