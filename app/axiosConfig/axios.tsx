import axios from "axios";

export const  instance = axios.create({
  baseURL: 'https://api-setlist-interludio.vercel.app/',
});