export interface ICourse {
  rating: any;
  _id?: string;
  basicInfo: {
    title: string;
    slug: string;
    short_description: string;
    description: string;
    category: string;
    level: string;
    status: "PENDING" | "PUBLISHED" | "UPCOMING" | "REJECTED";
    topCourse: boolean;
  };
  info: {
    faq: { question: string; answer: string }[];
    requirement: {
      category: "point" | "paragraph" | "question";
      question?: { question: string; answer?: string }[];
      point?: string[];
      paragraph?: string;
    };
    outcomes: {
      category: "point" | "paragraph" | "question";
      question?: { question: string; answer?: string }[];
      point?: string[];
      paragraph?: string;
    };
    sections: [];
  };
  pricing: {
    isFree: boolean;
    price: {
      main: number;
      isDiscount: boolean;
      discount: number;
      percentage: number;
    };
    expiry: {
      status: boolean;
      date: string | null;
    };
  };
  media: {
    video: string;
    thumbnail: string;
  };
  seo: {
    description: string;
    keywords: string[];
  };
}
