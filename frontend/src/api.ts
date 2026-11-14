// Base URL for the backend API from environment variable with fallback
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface HealthResponse {
  status: string;
}

// Fetch health status from backend GET /health
export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`);
  if (!response.ok) {
    throw new Error(`Health check request failed with status: ${response.status}`);
  }
  return response.json();
}
