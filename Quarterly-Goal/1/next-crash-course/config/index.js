const dev = process.env.NEXT_DEV !== "production";

export const server = process.env.NEXT_DEV
  ? "http://localhost:3001"
  : "https://yourwebsite.com";
