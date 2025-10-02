"use server";

import { API_CONFIG, buildApiUrl } from "../config/api";

export async function searchTrackingAction(codigoRastreio) {
  try {
    if (!codigoRastreio?.trim()) {
      return {
        success: false,
        error: "Código de rastreamento é obrigatório",
        data: null,
      };
    }

    const url = buildApiUrl(API_CONFIG.ENDPOINTS.RASTREIO, {
      codigo_rastreio: codigoRastreio.trim(),
    });

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: API_CONFIG.CACHE_REVALIDATE },
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Erro na API: ${response.status}`,
        data: null,
      };
    }

    const data = await response.json();

    return {
      success: true,
      error: null,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Erro interno do servidor",
      data: null,
    };
  }
}
