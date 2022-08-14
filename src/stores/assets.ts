import { defineStore } from "pinia";
import qiong from '@/assets/qio.ng.gif';
import qundao from '@/assets/qundao.png';

export interface Domain {
  domain: string;
  image: string | undefined;
}

export const useAssetsStore = defineStore({
  id: "assets",
  state: () => ({
    domains: [
      {
        domain: 'Crew.cm',
      },
      {
        domain: 'nb2.com',
      },
      {
        domain: 'Git.cm',
      },
      {
        domain: 'nai.ba',
      },
      {
        domain: 'BoringProduction.com',
      },
      {
        domain: 'GG0.com',
      },
      {
        domain: 'Gk4.com',
      },
      {
        domain: 'Jf4.com',
      },
      {
        domain: 'JG0.com',
      },
      {
        domain: 'Jh4.com',
      },
      {
        domain: 'Jn4.com',
      },
      {
        domain: 'Lajilao.com',
      },
      {
        domain: 'Oh1.com',
      },
      {
        domain: 'P14yground.com',
      },
      {
        domain: 'Pi4.com',
      },
      {
        domain: 'Qio.ng',
        image: qiong
      },
      {
        domain: 'TheBigPicture.cn'
      },
      {
        domain: 'Qundao.com',
        image: qundao
      },
      {
        domain: 'Solitud.es',
      },
      {
        domain: '5.nu',
      },
      {
        domain: 'Xzg.com.cn',
      }
    ] as Domain[],
  }),
});
