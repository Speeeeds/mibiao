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
        domain: 'nb2.com',
      },
      {
        domain: 'nai.ba',
      },
      {
        domain: 'boringproduction.com',
      },
      {
        domain: 'crew.cm',
      },
      {
        domain: 'gg0.com',
      },
      {
        domain: 'git.cm',
      },
      {
        domain: 'gk4.com',
      },
      {
        domain: 'jf4.com',
      },
      {
        domain: 'jg0.com',
      },
      {
        domain: 'jh4.com',
      },
      {
        domain: 'jn4.com',
      },
      {
        domain: 'lajilao.com',
      },
      {
        domain: 'oh1.com',
      },
      {
        domain: 'p14yground.com',
      },
      {
        domain: 'pi4.com',
      },
      {
        domain: 'qio.ng',
        image: qiong
      },
      {
        domain: 'thebigpicture.cn'
      },
      {
        domain: 'qundao.com',
        image: qundao
      },
      {
        domain: 'solitud.es',
      },
      {
        domain: '5.nu',
      },
      {
        domain: 'xzg.com.cn',
      }
    ] as Domain[],
  }),
});
