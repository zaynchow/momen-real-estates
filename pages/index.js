import {
  Contact,
  Tutorial,
  Statistics,
  About,
  Area,
  Featured,
  Hero,
} from "../components/Home";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Area />
      <About />
      <Statistics />
      <Tutorial />
      <Contact />
    </div>
  );
}
