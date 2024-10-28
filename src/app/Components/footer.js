import Image from "next/image"
import Link from "next/link"
import Hamburger from "../../../assets/icons/Hamburger.svg"
import Brand from "../../../assets/icons/logo.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Image src={Brand} width={100} height={60} alt="Brand" />
      </div>
    </footer>
  )
}
