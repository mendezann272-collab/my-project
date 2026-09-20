// Mock data for JCCsmart clone (frontend-only). Replace with API later.
// Original JCC asset URLs are reused for exact visual match.

const RESIZED = "https://apihub.jcc.com.cy/smartms/api/v1/Content/Resized/";
const CONTENT = "https://apihub.jcc.com.cy/smartms/api/v1/Content/";
const STORAGE = "https://apihub.jcc.com.cy/smartms/api/v1/content/storage/image/";
const ASSET = "https://www.jccsmart.com/assets/images/";

export const heroSlides = [
  {
    id: 1,
    image: STORAGE + "0d9c7a98-1c79-4396-ad8c-39d62b95ed4c",
    title: { en: "30 smartphones in 30 days", gr: "30 smartphones \u03c3\u03b5 30 \u03bc\u03ad\u03c1\u03b5\u03c2" },
    text: {
      en: "Pay with your Visa card via Apple Pay or Google Pay and enter the draw.",
      gr: "\u03a0\u03bb\u03ae\u03c1\u03c9\u03c3\u03b5 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03ba\u03ac\u03c1\u03c4\u03b1 Visa \u03bc\u03ad\u03c3\u03c9 Apple Pay \u03ae Google Pay \u03ba\u03b1\u03b9 \u03bc\u03c0\u03ac\u03c3\u03bf\u03c5 \u03c3\u03c4\u03b7\u03bd \u03ba\u03bb\u03ae\u03c1\u03c9\u03c3\u03b7."
    },
    cta: { en: "Terms & Conditions", gr: "\u038c\u03c1\u03bf\u03b9 & \u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2" }
  },
  {
    id: 2,
    image: STORAGE + "15af31d2-2f9f-4543-91e1-6fcc16869577",
    title: { en: "JCCsmart native app", gr: "JCCsmart \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae" },
    text: {
      en: "JCCsmart is now available as a native app! Get it now for a seamless payment experience",
      gr: "\u03a4\u03bf JCCsmart \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03ce\u03c1\u03b1 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf \u03c9\u03c2 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae! \u039a\u03b1\u03c4\u03ad\u03b2\u03b1\u03c3\u03ad \u03c4\u03bf \u03c4\u03ce\u03c1\u03b1"
    },
    cta: { en: "Get it now", gr: "\u039a\u03b1\u03c4\u03ad\u03b2\u03b1\u03c3\u03ad \u03c4\u03bf" }
  },
  {
    id: 3,
    image: STORAGE + "f518ff45-2de1-4d9c-9237-1d4841145d16",
    title: { en: "Now accepting Apple Pay and Google Pay", gr: "\u0394\u03b5\u03c7\u03cc\u03bc\u03b1\u03c3\u03c4\u03b5 Apple Pay \u03ba\u03b1\u03b9 Google Pay" },
    text: {
      en: "Simply tap Pay and complete your payment fast, without the need to enter additional details",
      gr: "\u0391\u03c0\u03bb\u03ac \u03c0\u03ac\u03c4\u03b7\u03c3\u03b5 Pay \u03ba\u03b1\u03b9 \u03bf\u03bb\u03bf\u03ba\u03bb\u03ae\u03c1\u03c9\u03c3\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1"
    },
    cta: { en: "", gr: "" }
  }
];

export const trendingBusinesses = [
  { id: 4888160, name: { en: "Road Tax Renewals", gr: "\u0391\u03bd\u03b1\u03bd\u03b5\u03ce\u03c3\u03b5\u03b9\u03c2 \u0391\u03b4\u03b5\u03b9\u03ce\u03bd \u039a\u03c5\u03ba\u03bb\u03bf\u03c6\u03bf\u03c1\u03af\u03b1\u03c2" }, logo: RESIZED + "c60514b8-6417-48df-a46d-05c36141a6a0.png" },
  { id: 4888541, name: { en: "Cyprus Police", gr: "\u0391\u03c3\u03c4\u03c5\u03bd\u03bf\u03bc\u03af\u03b1 \u039a\u03cd\u03c0\u03c1\u03bf\u03c5" }, logo: RESIZED + "61af8c09-f7d9-4a89-99d9-c8fa86d83ec1.png" },
  { id: 4888723, name: { en: "Tax Department", gr: "\u03a4\u03bc\u03ae\u03bc\u03b1 \u03a6\u03bf\u03c1\u03bf\u03bb\u03bf\u03b3\u03af\u03b1\u03c2" }, logo: RESIZED + "265fa259-b3a6-4146-800a-1fa8f585fd56.png" },
  { id: 9999053, name: { en: "Mobile Phone Top Ups-Data", gr: "\u0391\u03bd\u03b1\u03bd\u03b5\u03ce\u03c3\u03b5\u03b9\u03c2 \u039a\u03b9\u03bd\u03b7\u03c4\u03ae\u03c2" }, logo: RESIZED + "6d6ca60c-f4d6-4ff0-b079-782d1fed18cd.png" },
  { id: 17033028, name: { en: "Electricity Authority of Cyprus (EAC)", gr: "\u0391\u0397\u039a" }, logo: RESIZED + "93f081ee-3028-476c-9071-cb735ce06e66.png" },
  { id: 7549876, name: { en: "Cyprus Telecommunications Authority (CYTA)", gr: "\u0391\u03a4\u0397\u039a (CYTA)" }, logo: RESIZED + "4559b165-892c-4688-8899-ee60b485a8ec.png" },
  { id: 4888277, name: { en: "Hunting License Renewals", gr: "\u0391\u03bd\u03b1\u03bd\u03b5\u03ce\u03c3\u03b5\u03b9\u03c2 \u0391\u03b4\u03b5\u03b9\u03ce\u03bd \u039a\u03c5\u03bd\u03b7\u03b3\u03af\u03bf\u03c5" }, logo: RESIZED + "a3a850d9-2469-411c-8fbd-d7baf63adb8a.png" },
  { id: 4888749, name: { en: "Annual Company Fee", gr: "\u0395\u03c4\u03ae\u03c3\u03b9\u03bf \u03a4\u03ad\u03bb\u03bf\u03c2 \u0395\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1\u03c2" }, logo: RESIZED + "8a089fda-ef2f-45fb-8a67-f7f60f88380b.png" },
  { id: 10614048, name: { en: "Epic Mobile", gr: "Epic Mobile" }, logo: RESIZED + "fccf6bf3-55d4-4f81-817a-b494ae484240.png" },
  { id: 13279021, name: { en: "Primetel", gr: "Primetel" }, logo: RESIZED + "33f793bf-d20e-4081-8a9c-0a657cd4d561.png" },
  { id: 5564059, name: { en: "The Grammar School", gr: "The Grammar School" }, logo: RESIZED + "8f4bcd3b-0b23-43f3-9711-195238e035ad.png" },
  { id: 2503548, name: { en: "Petrolina (Holdings) Public Ltd", gr: "Petrolina (Holdings) Public Ltd" }, logo: RESIZED + "308f3d2a-3746-4c6a-bb7a-3154a1701a99.png" },
  { id: 13465026, name: { en: "Technical Chamber of Cyprus", gr: "\u0395\u03a4\u0395\u039a" }, logo: RESIZED + "707e5b40-829f-4cff-b66a-ab315944d3ca.png" },
  { id: 2501823, name: { en: "EKO Cyprus Limited", gr: "EKO Cyprus Limited" }, logo: RESIZED + "2fc680b3-537d-4cf8-8cda-024e3fba9b26.png" },
  { id: 48000269, name: { en: "Independent Social Support Body", gr: "\u0391\u03bd\u03b5\u03be\u03ac\u03c1\u03c4\u03b7\u03c4\u03bf\u03c2 \u03a6\u03bf\u03c1\u03ad\u03b1\u03c2" }, logo: RESIZED + "82a82ac0-af40-41d0-9d98-5d8f60e469cb.png" },
  { id: 999001, name: { en: "Bus fare payment through MOTION", gr: "\u039a\u03cc\u03bc\u03b9\u03c3\u03c4\u03c1\u03bf \u039b\u03b5\u03c9\u03c6\u03bf\u03c1\u03b5\u03af\u03bf\u03c5 (MOTION)" }, logo: RESIZED + "b803a01c-57c3-41d7-a247-c56140c9757a.png" }
];

export const categories = [
  { id: 2, name: { en: "MUNICIPALITIES & COMMUNITY COUNCILS", gr: "\u0394\u0397\u039c\u039f\u0399 & \u039a\u039f\u0399\u039d\u039f\u03a4\u0397\u03a4\u0395\u03a3" }, image: CONTENT + "962035f4-5e28-455d-ae8d-59c03409a6be.png" },
  { id: 18, name: { en: "EDUCATION", gr: "\u0395\u039a\u03a0\u0391\u0399\u0394\u0395\u03a5\u03a3\u0397" }, image: CONTENT + "387393b1-9177-495e-ad29-b5ed00d24c9d.png" },
  { id: 19, name: { en: "PROFESSIONAL BODIES & ASSOCIATIONS", gr: "\u0395\u03a0\u0391\u0393\u0393\u0395\u039b\u039c\u0391\u03a4\u0399\u039a\u039f\u0399 \u03a6\u039f\u03a1\u0395\u0399\u03a3" }, image: CONTENT + "0810d527-e33f-4e87-93e8-33207900b4f6.png" },
  { id: 23, name: { en: "INSURANCE COMPANIES", gr: "\u0391\u03a3\u03a6\u0391\u039b\u0399\u03a3\u03a4\u0399\u039a\u0395\u03a3 \u0395\u03a4\u0391\u0399\u03a1\u0395\u0399\u0395\u03a3" }, image: CONTENT + "45c477c0-085d-4bb9-9c38-d9c475a002ad.png" },
  { id: 40, name: { en: "REAL ESTATE, CONTRACTING & DEVELOPMENT", gr: "\u0391\u039a\u0399\u039d\u0397\u03a4\u0391 & \u0391\u039d\u0391\u03a0\u03a4\u03a5\u039e\u0397" }, image: CONTENT + "3058a68e-16d3-4397-8466-3a9654f9e03f.png" },
  { id: 44, name: { en: "HUMANITARIAN & CHARITY ORGANISATIONS", gr: "\u0391\u039d\u0398\u03a1\u03a9\u03a0\u0399\u03a3\u03a4\u0399\u039a\u0395\u03a3 \u039f\u03a1\u0393\u0391\u039d\u03a9\u03a3\u0395\u0399\u03a3" }, image: CONTENT + "6642c542-18b4-4e87-980e-4e38f782e789.png" },
  { id: 45, name: { en: "GOVERNMENTAL SERVICES", gr: "\u039a\u03a5\u0392\u0395\u03a1\u039d\u0397\u03a4\u0399\u039a\u0395\u03a3 \u03a5\u03a0\u0397\u03a1\u0395\u03a3\u0399\u0395\u03a3" }, image: CONTENT + "a3e22e2d-35fd-45a8-820e-c5044a118701.png" },
  { id: 47, name: { en: "SPORTS & FITNESS", gr: "\u0391\u0398\u039b\u0397\u03a4\u0399\u03a3\u039c\u039f\u03a3 & \u0393\u03a5\u039c\u039d\u0391\u03a3\u03a4\u0399\u039a\u0397" }, image: CONTENT + "608d13ef-cf47-44f1-9578-42b6b1a0b823.png" },
  { id: 55, name: { en: "TRAVEL, TOURISM & ACCOMMODATION", gr: "\u03a4\u0391\u039e\u0399\u0394\u0399\u0391 & \u03a4\u039f\u03a5\u03a1\u0399\u03a3\u039c\u039f\u03a3" }, image: CONTENT + "9b1c9b90-597b-422c-80c6-92b2670c2231.png" },
  { id: 58, name: { en: "OTHER", gr: "\u0391\u039b\u039b\u0391" }, image: CONTENT + "8b01c1a1-0828-4f4b-aa88-0d4c1a986759.png" },
  { id: 59, name: { en: "GENERAL TRADE", gr: "\u0393\u0395\u039d\u0399\u039a\u039f \u0395\u039c\u03a0\u039f\u03a1\u0399\u039f" }, image: CONTENT + "6e92ae00-c171-41d3-a179-2a97ea6273ba.png" },
  { id: 60, name: { en: "PROPERTY MANAGEMENT & RENTALS", gr: "\u0394\u0399\u0391\u03a7\u0395\u0399\u03a1\u0399\u03a3\u0397 \u0391\u039a\u0399\u039d\u0397\u03a4\u03a9\u039d" }, image: CONTENT + "2dea32f9-923c-445d-9ef5-626c43a957c7.png" },
  { id: 61, name: { en: "GIFTS", gr: "\u0394\u03a9\u03a1\u0391" }, image: CONTENT + "31c333ef-7e99-42a6-aae5-4ffe86d92bfe.png" },
  { id: 62, name: { en: "CLOTHING, FOOTWEAR & ACCESSORIES", gr: "\u0395\u039d\u0394\u03a5\u039c\u0391\u03a4\u0391 & \u0391\u039e\u0395\u03a3\u039f\u03a5\u0391\u03a1" }, image: CONTENT + "17d37d9f-410a-4c11-9867-9d391ba567d3.png" },
  { id: 63, name: { en: "HOUSEHOLD EQUIPMENT & FURNITURE", gr: "\u0395\u0399\u0394\u0397 \u03a3\u03a0\u0399\u03a4\u0399\u039f\u03a5 & \u0395\u03a0\u0399\u03a0\u039b\u0391" }, image: CONTENT + "fda45ed1-caea-4e00-866c-9322ed5be50c.png" },
  { id: 64, name: { en: "UTILITY COMPANIES", gr: "\u0395\u03a4\u0391\u0399\u03a1\u0395\u0399\u0395\u03a3 \u039a\u039f\u0399\u039d\u0397\u03a3 \u03a9\u03a6\u0395\u039b\u0395\u0399\u0391\u03a3" }, image: CONTENT + "23cebeb8-96e4-425c-8d30-1cf41080a2cf.png" },
  { id: 65, name: { en: "CORPORATE SERVICES", gr: "\u0395\u03a4\u0391\u0399\u03a1\u0399\u039a\u0395\u03a3 \u03a5\u03a0\u0397\u03a1\u0395\u03a3\u0399\u0395\u03a3" }, image: CONTENT + "106139eb-d589-40a7-bb84-bf65e6385b5f.png" },
  { id: 66, name: { en: "ELECTRONICS & INFORMATION TECHNOLOGY", gr: "\u0397\u039b\u0395\u039a\u03a4\u03a1\u039f\u039d\u0399\u039a\u0391 & \u03a0\u039b\u0397\u03a1\u039f\u03a6\u039f\u03a1\u0399\u039a\u0397" }, image: CONTENT + "c4cb59a2-5ba0-46a9-a34c-9663f05db623.png" },
  { id: 67, name: { en: "JEWELLERY, WATCHES & ACCESSORIES", gr: "\u039a\u039f\u03a3\u039c\u0397\u039c\u0391\u03a4\u0391 & \u03a1\u039f\u039b\u039f\u0393\u0399\u0391" }, image: CONTENT + "69177722-3466-4d45-8cfb-cea8c433952e.png" },
  { id: 68, name: { en: "SOFTWARE, APPS & PLATFORMS", gr: "\u039b\u039f\u0393\u0399\u03a3\u039c\u0399\u039a\u039f & \u0395\u03a6\u0391\u03a1\u039c\u039f\u0393\u0395\u03a3" }, image: CONTENT + "458342d8-babd-4093-9d20-f9aee6558a7e.png" },
  { id: 69, name: { en: "ACCOUNTING, AUDIT & TAX", gr: "\u039b\u039f\u0393\u0399\u03a3\u03a4\u0399\u039a\u0391 & \u03a6\u039f\u03a1\u039f\u039b\u039f\u0393\u0399\u039a\u0391" }, image: CONTENT + "be509e1a-3abc-45f2-8d66-60665ee267bd.png" },
  { id: 70, name: { en: "MOTORING", gr: "\u0391\u03a5\u03a4\u039f\u039a\u0399\u039d\u0397\u03a4\u039f" }, image: CONTENT + "3ac69d95-777b-4d1d-91b5-a30346029a9f.png" },
  { id: 71, name: { en: "MECHANICAL & ELECTRICAL", gr: "\u039c\u0397\u03a7\u0391\u039d\u039f\u039b\u039f\u0393\u0399\u039a\u0391 & \u0397\u039b\u0395\u039a\u03a4\u03a1\u039f\u039b\u039f\u0393\u0399\u039a\u0391" }, image: CONTENT + "c863d471-5309-4cf8-945c-1539be3a6a52.png" },
  { id: 72, name: { en: "LEGAL SERVICES", gr: "\u039d\u039f\u039c\u0399\u039a\u0395\u03a3 \u03a5\u03a0\u0397\u03a1\u0395\u03a3\u0399\u0395\u03a3" }, image: CONTENT + "b99dd80b-99bb-4cca-be72-d120769a2cf2.png" },
  { id: 73, name: { en: "CONFERENCES, EXHIBITIONS & WEDDINGS", gr: "\u03a3\u03a5\u039d\u0395\u0394\u03a1\u0399\u0391 & \u0395\u039a\u0394\u0397\u039b\u03a9\u03a3\u0395\u0399\u03a3" }, image: CONTENT + "73b12e89-81aa-4eda-aec1-445ecc5358a3.png" },
  { id: 74, name: { en: "SECURITY SYSTEMS", gr: "\u03a3\u03a5\u03a3\u03a4\u0397\u039c\u0391\u03a4\u0391 \u0391\u03a3\u03a6\u0391\u039b\u0395\u0399\u0391\u03a3" }, image: CONTENT + "2f2a5f50-cc99-4105-91e0-963866144782.png" },
  { id: 75, name: { en: "FOOD, BEVERAGE & ENTERTAINMENT", gr: "\u03a6\u0391\u0393\u0397\u03a4\u039f & \u0394\u0399\u0391\u03a3\u039a\u0395\u0394\u0391\u03a3\u0397" }, image: CONTENT + "5cbb14f2-bc6d-4dad-909a-2f04d5ba44be.png" },
  { id: 76, name: { en: "HEALTH, BEAUTY & WELLBEING", gr: "\u03a5\u0393\u0395\u0399\u0391 & \u039f\u039c\u039f\u03a1\u03a6\u0399\u0391" }, image: CONTENT + "7000b75c-3bc8-4f7a-935d-5a2999fd4262.png" },
  { id: 77, name: { en: "WATER TREATMENT", gr: "\u0395\u03a0\u0395\u039e\u0395\u03a1\u0393\u0391\u03a3\u0399\u0391 \u039d\u0395\u03a1\u039f\u03a5" }, image: CONTENT + "06069889-5a90-414a-82ad-705e95028a95.png" },
  { id: 78, name: { en: "FLOWERS & GARDEN", gr: "\u039b\u039f\u03a5\u039b\u039f\u03a5\u0394\u0399\u0391 & \u039a\u0397\u03a0\u039f\u03a3" }, image: CONTENT + "72bb6558-c273-40f6-ae24-ba7e46a81690.png" },
  { id: 79, name: { en: "MEDIA & ADVERTISING SERVICES", gr: "\u039c\u0395\u03a3\u0391 & \u0394\u0399\u0391\u03a6\u0397\u039c\u0399\u03a3\u0397" }, image: CONTENT + "8467db6d-9bb4-40ca-8c84-85ad238f1f67.png" },
  { id: 80, name: { en: "MUSIC STORE", gr: "\u039c\u039f\u03a5\u03a3\u0399\u039a\u0391 \u039a\u0391\u03a4\u0391\u03a3\u03a4\u0397\u039c\u0391\u03a4\u0391" }, image: CONTENT + "efb39125-264a-41b4-9fd6-6b3d1febc065.png" },
  { id: 81, name: { en: "MARINE", gr: "\u039d\u0391\u03a5\u03a4\u0399\u039b\u0399\u0391" }, image: CONTENT + "8b77fd3e-ea87-43de-88fb-ee3afe881984.png" },
  { id: 82, name: { en: "ART GALLERIES", gr: "\u0393\u039a\u0391\u039b\u0395\u03a1\u0399 \u03a4\u0395\u03a7\u039d\u0397\u03a3" }, image: CONTENT + "30124198-e438-4fe2-9047-6c7fe23be0ad.png" },
  { id: 83, name: { en: "MOVING & COURIER SERVICES", gr: "\u039c\u0395\u03a4\u0391\u03a6\u039f\u03a1\u0395\u03a3 & COURIER" }, image: CONTENT + "c6837d1d-07c8-4c26-ad94-6c887399b6e2.png" },
  { id: 84, name: { en: "INTERNET & TELEPHONY", gr: "\u0399\u039d\u03a4\u0395\u03a1\u039d\u0395\u03a4 & \u03a4\u0397\u039b\u0395\u03a6\u03a9\u039d\u0399\u0391" }, image: CONTENT + "3b1aebac-41ab-4ce7-a665-8f9a9417fc13.png" },
  { id: 85, name: { en: "SERVICES FOR AIRPORTS & CRUISE", gr: "\u0391\u0395\u03a1\u039f\u0394\u03a1\u039f\u039c\u0399\u0391 & \u039a\u03a1\u039f\u03a5\u0391\u0396\u0399\u0395\u03a1\u0391" }, image: CONTENT + "4d6b3b67-e19f-4c3a-bfaa-5b8a24eebf13.png" },
  { id: 86, name: { en: "GAMES, HOBBIES & CRAFTS", gr: "\u03a0\u0391\u0399\u03a7\u039d\u0399\u0394\u0399\u0391 & \u03a7\u039f\u039c\u03a0\u0399" }, image: CONTENT + "d6cf070a-8114-4b57-ab9e-85de2d1b29db.png" },
  { id: 87, name: { en: "BOOKSTORES & STATIONERY", gr: "\u0392\u0399\u0392\u039b\u0399\u039f\u03a0\u03a9\u039b\u0395\u0399\u0391 & \u03a7\u0391\u03a1\u03a4\u0399\u039a\u0391" }, image: CONTENT + "b794dded-4d12-4d46-affe-abb95fc7b1b7.png" },
  { id: 88, name: { en: "ARCHITECTS & TOPOGRAPHERS", gr: "\u0391\u03a1\u03a7\u0399\u03a4\u0395\u039a\u03a4\u039f\u039d\u0395\u03a3 & \u03a4\u039f\u03a0\u039f\u0393\u03a1\u0391\u03a6\u039f\u0399" }, image: CONTENT + "fd62cad0-c991-4aaf-992c-bffb11356b97.png" },
  { id: 89, name: { en: "DISTRICT LOCAL GOVERNMENT ORGANISATIONS-DLGO", gr: "\u0395\u03a0\u0391\u03a1\u03a7\u0399\u0391\u039a\u039f\u0399 \u039f\u03a1\u0393\u0391\u039d\u0399\u03a3\u039c\u039f\u0399" }, image: CONTENT + "cb9e2784-a976-4757-8d38-b2a7794770fc.png" }
];

export const features = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBwYXltZW50fGVufDB8fHx8MTc4OTg4NDU2OXww&ixlib=rb-4.1.0&q=85",
    title: { en: "Stay in control of your payments", gr: "\u0388\u03bb\u03b5\u03b3\u03c7\u03bf\u03c2 \u03c4\u03c9\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ce\u03bd \u03c3\u03bf\u03c5" },
    text: {
      en: "JCCsmart is the easiest way to perform and manage all your bill payments through a single online portal that is also available as a native mobile app",
      gr: "\u03a4\u03bf JCCsmart \u03b5\u03af\u03bd\u03b1\u03b9 \u03bf \u03b5\u03c5\u03ba\u03bf\u03bb\u03cc\u03c4\u03b5\u03c1\u03bf\u03c2 \u03c4\u03c1\u03cc\u03c0\u03bf\u03c2 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03af\u03b6\u03b5\u03c3\u03b1\u03b9 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ad\u03c2 \u03c3\u03bf\u03c5 \u03bc\u03ad\u03c3\u03c9 \u03bc\u03b9\u03b1\u03c2 \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03c4\u03c5\u03b1\u03ba\u03ae\u03c2 \u03c0\u03cd\u03bb\u03b7\u03c2"
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBwYXltZW50fGVufDB8fHx8MTc4OTg4NDU2OXww&ixlib=rb-4.1.0&q=85",
    title: { en: "One-stop payment portal with thousands of registered businesses", gr: "\u039c\u03af\u03b1 \u03c0\u03cd\u03bb\u03b7 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ce\u03bd \u03bc\u03b5 \u03c7\u03b9\u03bb\u03b9\u03ac\u03b4\u03b5\u03c2 \u03b5\u03c0\u03b9\u03c7\u03b5\u03b9\u03c1\u03ae\u03c3\u03b5\u03b9\u03c2" },
    text: { en: "", gr: "" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHNoaWVsZHxlbnwwfHx8fDE3ODk4ODQ1Njl8MA&ixlib=rb-4.1.0&q=85",
    title: { en: "Secured transactions based on the PCI DSS security standard", gr: "\u0391\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03bc\u03b5 \u03c4\u03bf \u03c0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf PCI DSS" },
    text: { en: "", gr: "" }
  }
];

export const paymentLogos = [
  { name: "Visa", src: "https://cdn.simpleicons.org/visa/1A1F71" },
  { name: "Mastercard", src: "https://cdn.simpleicons.org/mastercard/EB001B" },
  { name: "American Express", src: "https://cdn.simpleicons.org/americanexpress/2E77BC" },
  { name: "Apple Pay", src: "https://cdn.simpleicons.org/applepay/000000" },
  { name: "Google Pay", src: "https://cdn.simpleicons.org/googlepay/5F6368" }
];

export const appBadges = [
  { name: "App Store", store: "apple", label: "Download on the", store_name: "App Store", href: "https://apps.apple.com/cy/app/jccsmart/id1442771243" },
  { name: "Google Play", store: "google", label: "GET IT ON", store_name: "Google Play", href: "https://play.google.com/store/apps/details?id=com.jccsmart" },
  { name: "App Gallery", store: "huawei", label: "EXPLORE IT ON", store_name: "AppGallery", href: "https://appgallery.huawei.com/app/C103362711" }
];

export const mastercardLogo = "https://cdn.simpleicons.org/mastercard/EB001B";
export const businessImage = "https://images.pexels.com/photos/7772128/pexels-photo-7772128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

// Logged-in app data
export const paymentServices = [
  { id: "electricity", icon: "Zap", name: { en: "Electricity", gr: "\u0397\u03bb\u03b5\u03ba\u03c4\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2" } },
  { id: "mobile", icon: "Smartphone", name: { en: "Mobile Prepaid", gr: "\u039a\u03b1\u03c1\u03c4\u03bf\u03ba\u03b9\u03bd\u03b7\u03c4\u03ae" } },
  { id: "athk", icon: "Wifi", name: { en: "CYTA Account", gr: "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u0391\u03a4\u0397\u039a" } },
  { id: "redcross", icon: "Cross", name: { en: "Red Cross", gr: "\u0395\u03c1\u03c5\u03b8\u03c1\u03cc\u03c2 \u03a3\u03c4\u03b1\u03c5\u03c1\u03cc\u03c2" } },
  { id: "university", icon: "GraduationCap", name: { en: "University", gr: "UNIC" } },
  { id: "fares", icon: "Bus", name: { en: "Fares", gr: "\u039a\u03cc\u03bc\u03b9\u03c3\u03c4\u03c1\u03b1" } },
  { id: "communities", icon: "Building2", name: { en: "Communities", gr: "\u039a\u03bf\u03b9\u03bd\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2" } },
  { id: "municipal", icon: "Landmark", name: { en: "Municipal Services", gr: "\u0394\u03b7\u03bc\u03bf\u03c4\u03b9\u03ba\u03ad\u03c2 \u03a5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2" } }
];

const GOV = { en: "GOVERNMENTAL SERVICES", gr: "\u039a\u03a5\u0392\u0395\u03a1\u039d\u0397\u03a4\u0399\u039a\u0395\u03a3 \u03a5\u03a0\u0397\u03a1\u0395\u03a3\u0399\u0395\u03a3" };
const TEL = { en: "TELEPHONY & INTERNET", gr: "\u03a4\u0397\u039b\u0395\u03a6\u03a9\u039d\u0399\u0391 & \u0394\u0399\u0391\u0394\u0399\u039a\u03a4\u03a5\u039f" };
const UTIL = { en: "UTILITY COMPANIES", gr: "\u0395\u03a4\u0391\u0399\u03a1\u0395\u0399\u0395\u03a3 \u039a\u039f\u0399\u039d\u0397\u03a3 \u03a9\u03a6\u0395\u039b\u0395\u0399\u0391\u03a3" };

export const popularBusinesses = [
  { id: 7549876, name: { en: "Cyprus Telecommunications Authority (CYTA)", gr: "\u0391\u03c1\u03c7\u03ae \u03a4\u03b7\u03bb\u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ce\u03bd \u039a\u03cd\u03c0\u03c1\u03bf\u03c5 (CYTA)" }, category: TEL, logo: RESIZED + "4559b165-892c-4688-8899-ee60b485a8ec.png" },
  { id: 4888277, name: { en: "Hunting License Renewals", gr: "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7 \u0391\u03b4\u03b5\u03b9\u03ce\u03bd \u039a\u03c5\u03bd\u03b7\u03b3\u03af\u03bf\u03c5" }, category: GOV, logo: RESIZED + "a3a850d9-2469-411c-8fbd-d7baf63adb8a.png" },
  { id: 4888749, name: { en: "Annual Company Fee", gr: "\u0395\u03c4\u03ae\u03c3\u03b9\u03bf \u03a4\u03ad\u03bb\u03bf\u03c2 \u0395\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1\u03c2" }, category: GOV, logo: RESIZED + "8a089fda-ef2f-45fb-8a67-f7f60f88380b.png" },
  { id: 10614048, name: { en: "Epic Mobile", gr: "Epic Mobile" }, category: TEL, logo: RESIZED + "fccf6bf3-55d4-4f81-817a-b494ae484240.png" },
  { id: 13279021, name: { en: "Primetel", gr: "Primetel" }, category: TEL, logo: RESIZED + "33f793bf-d20e-4081-8a9c-0a657cd4d561.png" },
  { id: 4888160, name: { en: "Road Tax Renewals", gr: "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7 \u0391\u03b4\u03b5\u03b9\u03ce\u03bd \u039a\u03c5\u03ba\u03bb\u03bf\u03c6\u03bf\u03c1\u03af\u03b1\u03c2" }, category: GOV, logo: RESIZED + "c60514b8-6417-48df-a46d-05c36141a6a0.png" },
  { id: 4888541, name: { en: "Cyprus Police", gr: "\u0391\u03c3\u03c4\u03c5\u03bd\u03bf\u03bc\u03af\u03b1 \u039a\u03cd\u03c0\u03c1\u03bf\u03c5 (Cyprus Police)" }, category: GOV, logo: RESIZED + "61af8c09-f7d9-4a89-99d9-c8fa86d83ec1.png" },
  { id: 4888723, name: { en: "Tax Department", gr: "\u03a4\u03bc\u03ae\u03bc\u03b1 \u03a6\u03bf\u03c1\u03bf\u03bb\u03bf\u03b3\u03af\u03b1\u03c2" }, category: GOV, logo: RESIZED + "265fa259-b3a6-4146-800a-1fa8f585fd56.png" },
  { id: 9999053, name: { en: "Mobile Phone Top Ups-Data", gr: "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7 \u03a7\u03c1\u03cc\u03bd\u03bf\u03c5 \u039f\u03bc\u03b9\u03bb\u03af\u03b1\u03c2-\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1" }, category: TEL, logo: RESIZED + "6d6ca60c-f4d6-4ff0-b079-782d1fed18cd.png" },
  { id: 17033028, name: { en: "Electricity Authority of Cyprus (EAC)", gr: "\u0391\u03c1\u03c7\u03ae \u0397\u03bb\u03b5\u03ba\u03c4\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u039a\u03cd\u03c0\u03c1\u03bf\u03c5 (\u0391\u0397\u039a)" }, category: UTIL, logo: RESIZED + "93f081ee-3028-476c-9071-cb735ce06e66.png" }
];

// gradient pairs for colorful category cards
export const categoryGradients = [
  ["#f2a83c", "#e78a24"],
  ["#8ec63f", "#5fa733"],
  ["#b455c9", "#8e3bb0"],
  ["#6a5de0", "#4f3fc4"],
  ["#57b96a", "#3f9f57"],
  ["#e05fa8", "#c53f8e"],
  ["#c8c23a", "#a7a02a"]
];

