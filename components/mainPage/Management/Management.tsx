import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

import { useVisibility } from '../../hooks/useVisibility';
import styles from './management.module.scss';

export const Management = () => {
  const visibility = useVisibility('Management', 0.3);

  return (
    <section id="Management" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <Container fixed className={styles.container}>
          <div className={styles.title}>
            <div className={styles.tag}>Лидерство</div>
            <div className={styles.titleText}>
              Есть опыт в менторинге стажеров
            </div>
          </div>
          <div className={styles.text}>
            Выступал в качестве наставника для новых сотрудников. Рассказывал о внутренних системах,
            проводил ревью кода и активно помогал в решении задач на ранних этапах.
          </div>
        </Container>
      </Fade>
    </section>
  );
};
