import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import ChristmasTreeIcon from '@/src/icons/ChristmasTreeIcon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const openCard = () => {
    const envelope: any = document.querySelector('.envelope');
    const santa: any = document.querySelector('.santa');
    santa.style.display = 'none';
    envelope.style.display = 'none';
  }

  const setVh = () => {
    const root = document.documentElement;
    const vh = window.innerHeight * 0.01;
    root.style.setProperty('--vh', vh + 'px');
  }


  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== 'undefined') {
      const documents: any = document;
      setVh();
      window.addEventListener('resize', setVh);
      documents.querySelector('.card__open-btn').addEventListener('click', openCard);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Merry Christmas</title>
        <meta name="description" content="Ông già Nôen tới chơi Hô Hô Hô" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="wrapper">
          <div className="container">
            <div className="background">
              <div className="snow-wrap front">
                <div className="snow snow__top">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
                <div className="snow snow__mid">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
                <div className="snow snow__bot">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
              </div>
              <div className="snow-wrap back">
                <div className="snow snow__top">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
                <div className="snow snow__mid">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
                <div className="snow snow__bot">
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                  <span className="snowflake" />
                </div>
              </div>
            </div>
            <div className="contents">
              <div className="santa">
                <ul className="santa__hat">
                  <li className="hat__pompon" />
                  <li className="hat__crown" />
                  <li className="hat__banding" />
                </ul>
                <ul className="santa__head">
                  <li className="head__hair" />
                  <li className="head__face" />
                  <li className="head__nose" />
                  <li className="head__left-eye" />
                  <li className="head__right-eye" />
                  <li className="head__left-ear" />
                  <li className="head__right-ear" />
                  <li className="head__left-cheek" />
                  <li className="head__right-cheek" />
                  <li className="head__mustache">
                    <ul className="mustache-wrap">
                      <li className="mustache__top-left" />
                      <li className="mustache__top-right" />
                      <li className="mustache__left" />
                      <li className="mustache__right" />
                      <li className="mustache__bottom-left" />
                      <li className="mustache__bottom-right" />
                    </ul>
                  </li>
                </ul>
                <ul className="santa__body">
                  <li className="body__clothes" />
                </ul>
              </div>
              <div className="envelope">
                <div className="cover">
                  <span className="heart card__open-btn" />
                </div>
              </div>
              <div className="card">
                <div className="card__title">
                  <div className="merry">
                    <h2>
                      <span className="heart" />
                      <span className="title__text">M</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">E</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">R</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">R</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">Y</span>
                    </h2>
                  </div>
                  <div className="christmas">
                    <h2>
                      <span className="heart" />
                      <span className="title__text">X</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">-</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">M</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">A</span>
                    </h2>
                    <h2>
                      <span className="heart" />
                      <span className="title__text">S</span>
                    </h2>
                  </div>
                </div>
                <div className="card__contents">
                  <div className="letter-wrap">
                      <div className="letter">
                        {/* <div className="dear">
                          <span></span>
                        </div>
                        <p>
                        </p>
                        <p>
                        </p>
                        <div className="from">
                          <span></span>
                        </div> */}
                      </div>
                      <ChristmasTreeIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
