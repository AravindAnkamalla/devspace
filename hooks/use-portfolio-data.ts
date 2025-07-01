import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { PortfolioData } from "@/types";

export const usePortfolioData = () => {
  return useQuery<PortfolioData, Error>({
    queryKey: ["portfolioData"],
    queryFn: async () => {
      const res = await axios.get<PortfolioData>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`
      );
      return res.data;
    },
  });
};
