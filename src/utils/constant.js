export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const USER_AVATAR = "https://netfree2.cc/img/user-account2.png";

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const profiles = [
  { id: 1, name: "Uttam singhal", color: "bg-yellow-500", emoji: "😊" ,image:'img/smile.jpg'},
  { id: 1, name: "Pratham singhal", color: "bg-yellow-500", emoji: "😊", image:'img/smile4.png'},
  { id: 3, name: "Children", color: "bg-purple-500", type: "kids" ,image:'img/child.png'}
];
export const menuItems = [
  { icon: "👤", text: "Account" },
  { icon: "❓", text: "Help Centre" }
];