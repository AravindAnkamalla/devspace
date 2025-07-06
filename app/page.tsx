import { getPortfolioData } from "@/lib/get-portfolio-data";
import Portfolio from "@/components/Portfolio";

export default async function HomePage() {
  const portfolioData = await getPortfolioData();

  if (!portfolioData) {
    return <div>No portfolio data available.</div>;
  }

  return <Portfolio portfolioData={portfolioData} />;
}
