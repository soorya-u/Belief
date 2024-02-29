import dev_soo from "@/assets/img/devs/soorya.jpg";
import dev_saa from "@/assets/img/devs/saanvi.jpg";
import dev_ai from "@/assets/img/devs/aishwarya.jpg";
import dev_de from "@/assets/img/devs/devi.jpg";
import dev_pr from "@/assets/img/devs/pratham.jpg";

import Header from "@/components/custom/Header";
import Static from "./Static";
import Avatar from "./Avatar";
import Gradient from "@/components/custom/Gradient";

const devs = [
  {
    name: "Soorya U",
    usn: "4AI21AI052",
    image: dev_soo,
  },
  {
    name: "Saanvi MJ",
    usn: "4AI21AI044",
    image: dev_saa,
  },
  {
    name: "Aishwarya HA",
    usn: "4AI21AI003",
    image: dev_ai,
  },
  {
    name: "Devika M",
    usn: "4AI21AI015",
    image: dev_de,
  },
  {
    name: "Pratham KR",
    usn: "4AI21AI039",
    image: dev_pr,
  },
];

const About = () => {
  return (
    <>
      <Header heading="About our Team" />
      <Gradient />
      <Static />
      <section className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-[#1da1f2] text-[2rem] font-bold">Teammates</h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Dev 1 */}
          {devs.map((dev) => (
            <Avatar {...dev} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
