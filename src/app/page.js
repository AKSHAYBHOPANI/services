import Image from "next/image"
import styles from "./page.module.css"
import Blog from "../../assets/home/Blog.png"
import YouTube from "../../assets/home/YouTube.png"
import Dynamatics from "../../assets/home/Dynamatics.png"
import Shilpwellness from "../../assets/home/Shilpwellness.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="section">
          <div className="container">
            <div>
              <h1>Media</h1>
              <p className={styles.home_desc}>
                Tech YouTube Channel & Blog with more than 30,000 Views Every Month <br />
                <sup>*</sup>Lifetime: 3.1M Views on YouTube and 7.6L on Blog
              </p>
              <button>Learn More</button>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={YouTube} width={"50%"} height={200} alt="YouTube" />
              <Image src={Blog} width={"50%"} height={200} alt="Blog" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>Development</h1>
              <p>We just don't build websites we build websites that brings sales.</p>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={Dynamatics} width={"50%"} height={200} alt="Blog" />
              <Image src={Shilpwellness} width={"50%"} height={200} alt="YouTube" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>Hosting</h1>
              <p>Affordable Website Hosting with 99% Uptime</p>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={YouTube} width={"50%"} height={200} alt="YouTube" />
              <Image src={Blog} width={"50%"} height={200} alt="Blog" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>1:1 Call</h1>
              <p>Book a call with Akshay Bhopani and ask anyting in Consumer and Dev Tech.</p>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={YouTube} width={"50%"} height={200} alt="YouTube" />
              <Image src={Blog} width={"50%"} height={200} alt="Blog" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>Community</h1>
              <p>
                Join our awesome community of like minded individuals to talk and share tech.
                <br />
                <sup>*</sup>240+ The Tech Show Newsletter Subsribers
              </p>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={YouTube} width={"50%"} height={200} alt="YouTube" />
              <Image src={Blog} width={"50%"} height={200} alt="Blog" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
