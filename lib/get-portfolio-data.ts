import { readFile } from "node:fs/promises";
import path from "node:path";
import { PortfolioData } from "@/types";

export async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = path.join(process.cwd(), "data", "portfolio.json");
  const fileContents = await readFile(filePath, "utf8");
  return JSON.parse(fileContents) as PortfolioData;
}
