import { Venture } from "@/lib/types/venture";
import { venturesData } from "@/lib/data/ventures";

export async function getVentures(): Promise<Venture[]> {
  const url = process.env.GOOGLE_SHEETS_API_URL;
  if (!url) {
    console.warn('[PIS Labs System]: GOOGLE_SHEETS_API_URL is missing. Falling back to static data.');
    return venturesData;
  }

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`CMS returned status ${res.status}`);
    const data = await res.json();
    
    // Assuming the Apps Script returns { status: "success", data: Venture[] } or a direct Array
    const parsedData = data.data || data;
    
    if (Array.isArray(parsedData) && parsedData.length > 0) {
      return parsedData as Venture[];
    }
    
    // Fallback if data format isn't what we expect
    return venturesData;
  } catch (error) {
    console.error('[PIS Labs System Error]: Failed to fetch from Google Sheets CMS:', error);
    return venturesData; // Fallback to avoid crashing the app
  }
}
