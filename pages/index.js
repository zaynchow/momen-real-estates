import {
  Contact,
  Tutorial,
  Statistics,
  About,
  Area,
  Featured,
  Hero,
} from "../components/Home";
import Header from "../components/Header";

import { useRouter } from "next/router";

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
