import type { Blogs } from "@/types/content";
import type { News } from "@/types/content";

export const blogMockData: Blogs[] = [
  {
    id: "blog-1",
    title: "5 Tips for Better Sleep",
    description:
      "Learn how to improve your sleep quality naturally with simple routine changes.",
    tag: "Sleep Hygiene",
    readTime: "5 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1toRVhbywF52EK8Kzlw98PJR9__pNJDsuLap2WL_LuVLUFFOnsHg-yI9L1OE-geLpqp7pb55rw6gRAojDqhN6V5rtkQqzHuD88Zzr8ozIZVgwdTlfPWZt2zZk5qniHIEzgnmLVUfxqOnkPrqBxvPxn8RsolOKSTYYS5SubsxlPCI3ftHUoly-q5MEytmopJ14V5FgcxduyiD23fd833Fd1nUfhMRxVS1J1BaVWe78fiRvQXqUf2_NljBKVoye_M1LWTzX9MhbVMY",
    href: "#",
    imageAlt: "Peaceful bedroom scene for better sleep",
  },
  {
    id: "blog-2",
    title: "Understanding Seasonal Allergies",
    description:
      "Manage your symptoms effectively this season with our expert-backed guide.",
    tag: "Allergies",
    readTime: "8 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3wF7l-BdxNdcUPIsXPcsnCUeyEDa-J6qWgdlnK9Y-uEQCTIiTrTRhmo6ohlNNvRjcIcOHKATTgWkjCEeUEeXl419M46AWSaFd_x4Zs7pFsvzqSlO9TfK5VyvzVa_cytNAlt2c1mWBGFpj3pQF-AVSiv2ejtTFf2li74b2zKbxssgFKFzLdwOI_1Yap7ci4DfII8UA4epCwhMpcedZB1NLfK3yGptTUfpgwa9ttt58sIe_IfHCc6a8Obvqx8L4zOqsa1wkQhkthlM",
    href: "#",
    imageAlt: "Person enjoying outdoors despite pollen",
  },
  {
    id: "blog-3",
    title: "Immune System Boos",
    description:
      "Simple dietary choices and habits to keep your immune system fighting fit.",
    tag: "Nutrition",
    readTime: "4 min read",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVN_fdbKkTOsTHnmpNFu4HR_n46A8eOWwTNSSV28oHKZ9tCT3NARJbJ9rWnzjmLyR7auGr6aStCt9q4mpIVvg_Nfmf2vRCPEgzAqURTAgvTKS2gUBVCzE_88GJomAoqCRWmHy9hyo2tV5B34R-6ZkwPa99UheDFl6EK9WAA_akqO-kQ3lvjzaklQP050CzZ0YwZ2eXLM6fLZGAhJIKBybLXP7AgUlD5vzd5H7_0w51HYv6Xdt4WnyqRwb2KhjnSeaHE--bhMiRxZ0",
    href: "#",
    imageAlt: "Fresh citrus fruits and supplements",
  },
];

export const newsMockData: News[] = [
    {
        date: "24",
        month: "Aug",
        year: "2023",
        title: "New Clinic Opens Downtown",
        description: "We are excited to announce the opening of our new clinic in the heart of downtown, offering expanded services and extended hours to better serve our community."
    },
    {
        date: "15",
        month: "Sep",
        year: "2023",
        title: "Flu Vaccination Drive",
        description: "Join us for our annual flu vaccination drive starting September 15th. Protect yourself and your loved ones this flu season with a quick and easy vaccine."
    },
    {
        date: "05",
        month: "Oct",
        year: "2023",
        title: "Health Workshop Series",
        description: "We are launching a series of health workshops focused on nutrition, mental wellness, and fitness. Sign up now to reserve your spot and take a step towards a healthier you."
    }
];