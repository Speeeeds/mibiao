import { defineStore } from "pinia";
import qiong from '@/assets/qio.ng.gif';
import qundao from '@/assets/qundao.png';
import shasheng from '@/assets/shasheng.png';
import tusun from '@/assets/logo.png';
import xzg from '@/assets/xzg.com.cn.png';

export interface Domain {
  domain: string;
  image: string | undefined;
}

export const useAssetsStore = defineStore({
  id: "assets",
  state: () => ({
    domains: [
      {
        domain: 'BigToysCompany.com',
        image: tusun
      },
      {
        domain: 'nb2.com',
      },
      {
        domain: 'nai.ba',
        image: 'https://lifelonglearn.ing/static/cactus/images/logo.png'
      },
      {
        domain: 'Gg0.com',
      },
      {
        domain: 'Gk4.com',
      },
      {
        domain: 'Jf4.com',
      },
      {
        domain: 'Jg0.com',
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
        domain: '5.nu',
      },
      {
        domain: 'Xzg.com.cn',
        image: xzg
      },
      {
        domain: 'shasheng.com',
        image: shasheng
      },
      {
        domain: 'Fredeburg.com',
      },
      {
        domain: 'LifelongLearn.ing',
        image: 'https://lifelonglearn.ing/static/cactus/images/logo.png'
      },
    ] as Domain[],
  }),
});
