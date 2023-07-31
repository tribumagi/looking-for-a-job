import Container from '@mui/material/Container';
import styles from './banner.module.scss';

export const Banner = () => {
  return (
    <section className={styles.section}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <Container className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Frontend developer</h1>
          <div className={styles.text}>
            Меня зовут Мурад и я ищу работу
            <br />
            Ключевые навыки:
          </div>
          <div className={styles.skills}>React, Redux, Typescript</div>
        </div>
      </Container>
    </section>
  );
};
