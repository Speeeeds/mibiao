import { defineStore } from "pinia";
import logo from '@/assets/logo.png';

export interface Domain {
  domain: string;
  description: string;
  image: string | undefined;
}

export const useAssetsStore = defineStore({
  id: "assets",
  state: () => ({
    domains: [
      {
        domain: 'test.com',
        description: 'Test',
        image: logo,
      },
      {
        domain: 'example.com',
        description: 'Example',
        image: logo,
      },
      {
        domain: 'example2.com',
        description: 'Example2',
        image: logo,
      },
      {
        domain: 'C.example.com',
        description: 'Example2',
      },
      {
        domain: 'B.example.com',
        description: 'Example2',
      }
    ] as Domain[],
  }),
});
