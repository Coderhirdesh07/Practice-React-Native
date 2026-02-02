import { NewsApiData } from "@/app/constants/data";

export const mockNewsSuccess: NewsApiData = {
    status: "ok",
    totalResults: 2,
    articles: [
      {
        source: { id: "cnn", name: "CNN" },
        author: "Michael Brown",
        title: "Economy Shows Signs of Recovery",
        description: "Experts say the economy is beginning to stabilize.",
        url: "https://cnn.com/economy-recovery",
        urlToImage: "https://example.com/economy.jpg",
        publishedAt: "2026-01-10T08:00:00Z",
        content: "Economic indicators suggest that growth is slowly returning after months of uncertainty...",
      },
      {
        source: { id: "reuters", name: "Reuters" },
        author: "Sarah Lee",
        title: "Oil Prices Rise Amid Supply Concerns",
        description: "Crude oil prices climbed due to tightening supply.",
        url: "https://reuters.com/oil-prices-rise",
        urlToImage: "https://example.com/oil.jpg",
        publishedAt: "2026-01-11T14:20:00Z",
        content: "Oil prices increased today as producers signaled potential output cuts in the coming months...",
      },
    ],
};

export const mockNewsEmpty: NewsApiData = {
    status: "ok",
    totalResults: 0,
    articles: [],
}; 


export const mockNewsEdgeCase: NewsApiData = {
    status: "ok",
    totalResults: 1,
    articles: [
      {
        source: { id: "unknown", name: "Independent Blog" },
        author: "",
        title: "Local Community Garden Project Expands",
        description: "A neighborhood garden project gains more volunteers.",
        url: "https://example.com/community-garden",
        urlToImage: "",
        publishedAt: "2026-01-12T18:45:00Z",
        content: "What started as a small initiative has now grown into a community-wide effort involving dozens of residents...",
      },
    ],
};
  