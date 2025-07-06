import { PortfolioData } from "@/types";

export async function getPortfolioData(): Promise<PortfolioData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`, {
      next: { revalidate: 60 }, 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch portfolio data: ${res.statusText}`);
    }

    const data: PortfolioData = await res.json();
    return data;
  } catch (error) {
    console.error("getPortfolioData error:", error);
    return null;
  }
}
