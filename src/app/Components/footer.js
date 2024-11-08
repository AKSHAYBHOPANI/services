import Image from "next/image"
import Link from "next/link"
import Hamburger from "../../../assets/icons/Hamburger.svg"
import Brand from "../../../assets/icons/logo.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Image src={Brand} width={100} height={60} alt="Brand" />
        <div className="footer-menu">
          <div>
            <h3>Blogs</h3>
            <ul>
              <li>Main Blog</li>
              <li>Downloads</li>
              <li>Medium</li>
            </ul>
          </div>
          <div>
            <h3>Shop</h3>
            <ul>
              <li>Tech Store</li>
              <li>Amazon Storefront</li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>Facebook</li>
              <li>X</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
