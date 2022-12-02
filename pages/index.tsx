import Head from "next/head";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Skills from "../components/Skills/Skills";
import Layout from "../components/Layout";
import PersonalProjects from "../components/PersonalProjects/PersonalProjects";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Portfolio | Yasindu Nethmina - Frontend Web Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className="flex items-center h-screen relative bottom-10 w-full">
            <div className="w-7/12 relative">
              <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
                YASINDU NETHMINA
              </h4>
              <h1 className="title-text font-extrabold mb-4 text-[#0f141e] text-6xl">
                Interactive frontend
                <br />
                Web developer
              </h1>
              <h6 className="bio-text font-semibold mb-4 text-[#878a8f]">
                Over the past 9 years, as an art director and designer, I’ve
                worked with big companies and up-and-coming startups to
                successfully help them reach their full potential and attract
                new customers.
              </h6>
              <div className="flex items-center">
                <button className="font-bold text-sm hover:underline decoration-2 transition-all hover:-translate-y-1 hover:scale-105 ease-in-out duration-500 underline-offset-4 decoration-[#0f141e] text-[#0f141e]">
                  View Projects
                </button>
                <h6 className="font-semibold text-[#878a8f] mx-4">or</h6>
                <button className="font-bold text-sm hover:underline decoration-2 transition-all hover:-translate-y-1 hover:scale-105 ease-in-out duration-500 underline-offset-4 decoration-[#0f141e] text-[#0f141e]">
                  Read About Me
                </button>
              </div>
            </div>
            <div className="">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
                alt="google"
              /> */}
            </div>
          </div>

          {/* Bounce */}
          <div className="border-2 justify-center items-center flex border-black h-6 absolute bottom-7 w-4 rounded-full">
            <span className="animate-bounce">•</span>
          </div>
          {/* Case Studies */}
          <div className="case-studies-section w-full">
            <CaseStudies />
          </div>
          <Skills />
          <PersonalProjects />

          <div className="contact-me-section relative top-96">
            <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
              NEEDA FRONTEND DEVELOPER?
            </h4>
            <h1 className="title-text font-extrabold hover:underline transition ease-in-out delay-150 duration-700 my-4 text-[#0f141e] text-6xl">
              LET'S WORK TOGETHER
              <TrendingFlatIcon style={{ fontSize: "4rem" }} />
            </h1>
          </div>
          <Footer />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}
