import { NewsApiData as NewsResponse } from '../constants/data';
import { API_CONFIG } from '../config';

// interface ApiAdditionalInfo {
//   category?: string;
//   source?: string;
//   q?: string;
//   country?: string;
//   language?: string;
// }

// function buildAdditionalParameter(params: ApiAdditionalInfo = {}) {
//   const queryParams = new URLSearchParams({
//     apiKey: API_CONFIG.API_KEY,
//   });
//   if (params.q != null) queryParams.append('q', params.q);

//   return queryParams.toString();
// }

export async function handleApiArticlesEndpoint(
  query: string,
): Promise<NewsResponse | null> {
  try {
    const COMPLETE_URL = `${API_CONFIG.BASE_URL}/${API_CONFIG.ARTICLES_ENDPOINT}?q=${encodeURIComponent(query)}&apiKey=${API_CONFIG.API_KEY}`;

    const response = await fetch(COMPLETE_URL);
    if (!response.ok) {
      console.log('Api Error', response.status);
      return null;
    } else {
      const apidata = await response.json();
      return apidata;
    }
  } catch (error) {
    console.log('Data Fetch Error ');
    throw error;
  }
}

export async function handleApiTopHeadlinesEndpoint(): Promise<NewsResponse | null> {
  try {
    const COMPLETE_URL = `${API_CONFIG.BASE_URL}/${API_CONFIG.TOP_HEADLINES_ENDPOINT}/apikey=${API_CONFIG.API_KEY}`;

    const response = await fetch(COMPLETE_URL);
    if (!response.ok) {
      console.error('Api Error', response.statusText);
      return null;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log('API Fetch Error');
    return null;
  }
}
