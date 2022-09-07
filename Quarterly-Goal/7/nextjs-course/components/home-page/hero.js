import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image1.jpg"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm smit</h1>
      <p>
        A blog about web devlopment - especially frontend frameworks like React
        or Vue.
      </p>
    </section>
  );
}

export default Hero;
