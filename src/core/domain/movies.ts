import type { Base } from "./base";

export interface Movie extends Base {
  name: string;
  year: number;
  genre: string[];
  imageUrl: string;
}
