import Image from "next/image"
import styles from "./page.module.css"
import Blog from "../../assets/home/Blog.png"
import YouTube from "../../assets/home/YouTube.png"
import Dynamatics from "../../assets/home/Dynamatics.png"
import Shilpwellness from "../../assets/home/Shilpwellness.png"
import WebHosting from "../../assets/home/Website_Hosting.svg"
import CallWithAkshay from "../../assets/home/Call_With_Akshay.svg"
import Community from "../../assets/home/Tech_Show_Comm.svg"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedium, faBlogger, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="section">
          <div className="container">
            <div>
              <h1>Media</h1>
              <p className={styles.home_desc} id="Media">
                Tech YouTube Channel & Blog with more than 30,000 Views Every Month <br />
                <sup>*</sup>Lifetime: 3.1M Views on YouTube and 7.6L on Blog
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link href="/Media">
                  <button data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
                    Learn More
                  </button>
                </Link>
                <div style={{ display: "flex", gap: "3px" }} data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
                  <Link href="https://youtube.com/akshaybhopani">
                    <FontAwesomeIcon icon={faYoutube} style={{ width: "32px", height: "32px", color: "#f7da73" }} />
                  </Link>
                  <Link href="https://www.yourtechshow.com">
                    <FontAwesomeIcon icon={faBlogger} style={{ width: "32px", height: "32px", color: "#f7da73" }} />
                  </Link>
                  <Link href="https://medium.com/the-tech-show">
                    <FontAwesomeIcon icon={faMedium} style={{ width: "32px", height: "32px", color: "#f7da73" }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={YouTube} width={"50%"} height={200} alt="YouTube" />
              <Image src={Blog} width={"50%"} height={200} alt="Blog" />
            </div>
          </div>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>Development</h1>
              <p>We just don't build websites we build websites that brings sales.</p>
              <br />
              <div style={{ display: "flex", gap: "5px" }} data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
                <Link href="/Develop">
                  <button className="buttonSecondary">Learn More</button>
                </Link>
                <Link href="/Contact">
                  <button className="buttonSecondary">Contact Us</button>
                </Link>
              </div>
            </div>
            <div className={styles.threeDimage} data-aos="fade-left">
              <Image src={Dynamatics} width={"50%"} height={200} alt="Blog" />
              <Image src={Shilpwellness} width={"50%"} height={200} alt="YouTube" />
            </div>
          </div>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>

        <div className="section">
          <div className="container">
            <div>
              <h1>Hosting</h1>
              <p>Affordable Website Hosting with 99% Uptime</p>
              <br />
              <div style={{ display: "flex", gap: "5px" }} data-aos="fade-up" data-aos-offset="200">
                <Link href="/Hosting">
                  <button>Learn More</button>
                </Link>
                <Link href="/Contact">
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left">
              <Image src={WebHosting} width={"100%"} height={200} alt="YouTube" />
            </div>
          </div>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="section">
          <div className="container">
            <div>
              <h1>1:1 Call</h1>
              <p>Book a call with Akshay Bhopani and ask anyting in Consumer and Dev Tech.</p>
              <br />
              <Link href="/Call">
                <button data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
                  Learn More
                </button>
              </Link>
            </div>
            <div data-aos="fade-left">
              <Image src={CallWithAkshay} width={"100%"} height={200} alt="CallWithAkshay" />
            </div>
          </div>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
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
              <br />
              <Link href="/Community">
                <button data-aos="fade-up" data-aos-offset="200" data-aos-delay="800">
                  Learn More
                </button>
              </Link>
            </div>
            <div data-aos="fade-left">
              <Image src={Community} width={"100%"} height={200} alt="Community" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
