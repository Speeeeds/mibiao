import { defineStore } from "pinia";
import qiong from '@/assets/qio.ng.gif';
import qundao from '@/assets/qundao.png';
import shasheng from '@/assets/shasheng.png';
import tusun from '@/assets/logo.png';
import xzg from '@/assets/xzg.com.cn.png';
import xinqi from '@/assets/xinqi.me.png';

export interface Domain {
  domain: string;
  image: string | undefined;
}

export const useAssetsStore = defineStore({
  id: "assets",
  state: () => ({
    domains: [
      {
        domain: 'LifelongLearni.ng',
        image: 'https://lifelonglearni.ng/static/cactus/images/logo.png'
      },
      {
        domain: 'BigToysCompany.com',
        image: tusun
      },
      {
        domain: 'nb2.com',
      },
      {
        domain: 'Git.cm',
      },
      {
        domain: 'nai.ba',
        image: 'https://lifelonglearni.ng/static/cactus/images/logo.png'
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
        domain: 'tusun.org',
        image: tusun
      },
      {
        domain: 'YueBan.org',
      },
      {
        domain: 'Taubenberg.com',
      },
      {
        domain: 'Crew.cm',
      },
      {
        domain: 'Fredeburg.com',
      },
      {
        domain: 'XinQi.me',
        image: xinqi
      },
      {
        domain: 'BoringBay.com',
        image: 'https://boringbay.com/api/favicon/boringbay.com'
      },
      {
        domain: 'X.com.ms'
      },
      {
        domain: 'naibaHQ.com',
      },
      {
        domain: 'LifelongLearn.ing',
        image: 'https://lifelonglearni.ng/static/cactus/images/logo.png'
      },
    ] as Domain[],
  }),
});
