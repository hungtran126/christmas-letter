import '@/styles/christmasTree.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js" strategy='beforeInteractive' />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MotionPathPlugin.min.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/Physics2DPlugin3.min.js" />
      <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/EasePack3.min.js" />
      <Script src="./animateTree.js" strategy='lazyOnload' />
    </>
  )
}
