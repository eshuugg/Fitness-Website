import styles from "./style.module.css";

const Banner = ({ bg, children, wrap }) => {
  return wrap ? (
    <div className={styles.bannerWrap}>
      <section
        style={{
          backgroundColor: bg || "#00aeed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: wrap ? "1rem" : "0",
        }}
        className={styles.banner}
      >
        {children}
      </section>
    </div>
  ) : (
    <section
      style={{
        background: bg || "#00aeed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: wrap ? "1rem" : "0",
      }}
      className={styles.banner}
    >
      {children}
    </section>
  );
};

export default Banner;
