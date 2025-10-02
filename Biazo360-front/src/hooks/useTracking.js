import { useState, useCallback } from "react";
import { searchTrackingAction } from "../actions/tracking";

export function useTracking() {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const searchTracking = useCallback(async (code) => {
    if (!code?.trim()) return;

    setIsSearching(true);
    setError(null);
    setHasSearched(true);

    try {
      const result = await searchTrackingAction(code.trim());

      if (result.success) {
        setTrackingData(result.data);
        setTrackingCode(code.trim());
      } else {
        setError(result.error);
        setTrackingData(null);
        setTrackingCode("");
      }
    } catch (err) {
      setError(err.message || "Erro interno");
      setTrackingData(null);
      setTrackingCode("");
    } finally {
      setIsSearching(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setTrackingCode("");
    setTrackingData(null);
    setError(null);
    setHasSearched(false);
  }, []);

  return {
    trackingCode,
    trackingData,
    isSearching,
    error,
    hasSearched,
    searchTracking,
    clearSearch,
    setTrackingCode,
    setTrackingData,
  };
}
