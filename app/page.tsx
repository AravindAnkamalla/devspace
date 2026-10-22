import { getPortfolioData } from "@/lib/get-portfolio-data";
import Portfolio from "@/components/Portfolio";

export default async function HomePage() {
  const portfolioData = await getPortfolioData();

  return <Portfolio portfolioData={portfolioData} />;
}
