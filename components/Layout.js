import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
        <Link href='/' passHre>
          <a>
            <div className={styles.container}>
              <svg
                id='Layer_5'
                enable-background='new 0 0 64 64'
                height='200'
                viewBox='0 0 64 64'
                width='200'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <linearGradient
                  id='SVGID_1_'
                  gradientUnits='userSpaceOnUse'
                  x1='32'
                  x2='32'
                  y1='63'
                  y2='1'
                >
                  <stop offset='0' stop-color='#9f2fff' />
                  <stop offset='1' stop-color='#0bb1d3' />
                </linearGradient>
                <path
                  d='m14 15v-1c0-.551-.449-1-1-1h-2c-1.654 0-3-1.346-3-3v-3h3v-2h2v2c1.654 0 3 1.346 3 3h-2c0-.551-.449-1-1-1h-3v1c0 .551.449 1 1 1h2c1.654 0 3 1.346 3 3v3h-3v2h-2v-2c-1.654 0-3-1.346-3-3h2c0 .551.449 1 1 1zm-13-3c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11-11-4.935-11-11zm2 0c0 4.962 4.038 9 9 9s9-4.038 9-9-4.038-9-9-9-9 4.038-9 9zm-2 40c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11-11-4.935-11-11zm2 0c0 4.962 4.038 9 9 9s9-4.038 9-9-4.038-9-9-9-9 4.038-9 9zm34-23c0 1.193-.525 2.267-1.357 3 .832.733 1.357 1.807 1.357 3 0 2.206-1.794 4-4 4v2h-2v-2h-2v-14h2v-2h2v2c2.206 0 4 1.794 4 4zm-2 6c0-1.103-.897-2-2-2h-2v4h2c1.103 0 2-.897 2-2zm0-6c0-1.103-.897-2-2-2h-2v4h2c1.103 0 2-.897 2-2zm15.414 2h-5.465c.026.331.051.662.051 1s-.025.669-.051 1h5.465l2 2h4.77c.414-1.161 1.514-2 2.816-2 1.654 0 3 1.346 3 3s-1.346 3-3 3c-1.302 0-2.402-.839-2.816-2h-5.598l-2-2h-4.949c-1.13 4.76-4.877 8.506-9.637 9.637v4.949l2 2v5.598c1.161.414 2 1.514 2 2.816 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.302.839-2.402 2-2.816v-4.77l-2-2v-5.465c-.331.026-.662.051-1 .051s-.669-.025-1-.051v5.465l-2 2v4.77c1.161.414 2 1.514 2 2.816 0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.302.839-2.402 2-2.816v-5.598l2-2v-4.949c-4.76-1.13-8.506-4.877-9.637-9.637h-4.949l-2 2h-5.598c-.414 1.161-1.514 2-2.816 2-1.654 0-3-1.346-3-3s1.346-3 3-3c1.302 0 2.402.839 2.816 2h4.77l2-2h5.465c-.026-.331-.051-.662-.051-1s.025-.669.051-1h-5.465l-2-2h-4.77c-.414 1.161-1.514 2-2.816 2-1.654 0-3-1.346-3-3s1.346-3 3-3c1.302 0 2.402.839 2.816 2h5.598l2 2h4.949c1.13-4.76 4.877-8.506 9.637-9.637v-4.949l-2-2v-5.598c-1.161-.414-2-1.514-2-2.816 0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.302-.839 2.402-2 2.816v4.77l2 2v5.465c.331-.026.662-.051 1-.051s.669.025 1 .051v-5.465l2-2v-4.77c-1.161-.414-2-1.514-2-2.816 0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.302-.839 2.402-2 2.816v5.598l-2 2v4.949c4.76 1.13 8.506 4.877 9.637 9.637h4.949l2-2h5.598c.414-1.161 1.514-2 2.816-2 1.654 0 3 1.346 3 3s-1.346 3-3 3c-1.302 0-2.402-.839-2.816-2h-4.77zm8.586-3c0 .551.449 1 1 1s1-.449 1-1-.449-1-1-1-1 .449-1 1zm-24-24c0 .551.449 1 1 1s1-.449 1-1-.449-1-1-1-1 .449-1 1zm-8 0c0 .551.449 1 1 1s1-.449 1-1-.449-1-1-1-1 .449-1 1zm-22 24c0-.551-.449-1-1-1s-1 .449-1 1 .449 1 1 1 1-.449 1-1zm0 8c0-.551-.449-1-1-1s-1 .449-1 1 .449 1 1 1 1-.449 1-1zm24 24c0-.551-.449-1-1-1s-1 .449-1 1 .449 1 1 1 1-.449 1-1zm8 0c0-.551-.449-1-1-1s-1 .449-1 1 .449 1 1 1 1-.449 1-1zm22-24c0 .551.449 1 1 1s1-.449 1-1-.449-1-1-1-1 .449-1 1zm-16-4c0-6.065-4.935-11-11-11s-11 4.935-11 11 4.935 11 11 11 11-4.935 11-11zm20-20c0 6.065-4.935 11-11 11s-11-4.935-11-11 4.935-11 11-11 11 4.935 11 11zm-2 0c0-4.962-4.038-9-9-9s-9 4.038-9 9 4.038 9 9 9 9-4.038 9-9zm2 40c0 6.065-4.935 11-11 11s-11-4.935-11-11 4.935-11 11-11 11 4.935 11 11zm-2 0c0-4.962-4.038-9-9-9s-9 4.038-9 9 4.038 9 9 9 9-4.038 9-9zm-9-45c1.103 0 2 .897 2 2h2c0-2.206-1.794-4-4-4s-4 1.794-4 4h-2v2h2v2h-2v2h2c0 2.206 1.794 4 4 4s4-1.794 4-4h-2c0 1.103-.897 2-2 2s-2-.897-2-2h2v-2h-2v-2h2v-2h-2c0-1.103.897-2 2-2zm4.707 39.707-1.414-1.414-3.293 3.293-3.293-3.293-1.414 1.414 3.707 3.707v.586h-2v2h2v2h-2v2h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-.586zm-48.707 12.293h7v-2h-5v-4h2v-2h-2v-1c0-1.654 1.346-3 3-3h2v-2h-2c-2.757 0-5 2.243-5 5v1h-2v2h2z'
                  fill='url(#SVGID_1_)'
                />
              </svg>
            </div>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
