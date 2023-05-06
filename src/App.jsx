import styles from "./style";

import {
  About,
  Contact,
  Footer,
  Focus,
  Hero,
  Navbar,
  Services,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-wood ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} w-[80%]`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Focus />
          <Services />
          <About />
          <Contact />
        </div>
      </div>

      <div className={`bg-tertiary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
