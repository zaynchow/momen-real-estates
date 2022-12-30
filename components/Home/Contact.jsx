import Image from "next/image";
import wireframe from "../../public/building-wireframe.png";

const Contact = () => {
  return (
    <div className="home-contact-wrapper">
      <div className="home-contact-section">
        <div>
          <h2>Let&apos;s sit down and talk about your property</h2>
          <a href="/contact">Contact Us Now</a>
        </div>
        <div className="home-contact-image">
          <Image src={wireframe} alt="logo" className="wireframe-pic" fill />
        </div>
      </div>
    </div>
  );
};

export default Contact;
