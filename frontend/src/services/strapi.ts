import i18n from 'i18next';

const API_URL = import.meta.env.VITE_API_URL;

async function callStrapi<T>(endpoint: string): Promise<T> {
  const url = `${API_URL}${endpoint}?locale=${i18n.language}&populate=*`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('API error');
  const json = await res.json();
  return json as T;
}

export function getNetworkSolution() {
  return callStrapi<{ data: any }>('/api/network-solution');
}

// ... ฟังก์ชันอื่น ๆ
