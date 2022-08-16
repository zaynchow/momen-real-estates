import Image from "next/image";
import wireframe from "../../public/building-wireframe.png";

const Contact = () => {
  return (
    <div className="home-contact-section">
      <div>
        <h2>Let&apos;s sit down and talk about your property</h2>
        <a href="/contact">Contact Us Now</a>
      </div>

      <Image
        src={wireframe}
        alt="logo"
        className="wireframe-pic"
        layout="fixed"
      />
    </div>
  );
};

export default Contact;
