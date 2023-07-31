import { ReactNode, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';

import { useVisibility } from '../../hooks/useVisibility';

import styles from './about.module.scss';

type PointType = {
  key: number;
  number: string;
  text: string;
  description: ReactNode;
};

const points: PointType[] = [
  {
    key: 1,
    number: '3',
    text: 'Года опыта',
    description: 'Работал над различными проектами',
  },
  {
    key: 2,
    number: '3000+',
    text: 'Коммитов',
    description: <>Решил большое количество бизнес&#8209;задач</>,
  },
  {
    key: 3,
    number: '4',
    text: 'Года обучения',
    description: <>Закончил бакалавриат, факультет автоматики и вычислительной техники</>,
  },
];

export const About = () => {
  const visibility = useVisibility('About');

  return (
    <section id="About" className={styles.section}>
      <Fade in={visibility} timeout={1500}>
        <Container fixed className={styles.container}>
          <div className={styles.title}>
            <div className={styles.tag}>Опыт</div>
            <div className={styles.titleText}>
              Обладаю значительным опытом, который помогает выполнять
              бизнес&#8209;задачи
            </div>
          </div>
          <div className={styles.points}>
            {points.map(({ key, number, text, description }: PointType) => {
              return (
                <div key={key} className={styles.point}>
                  <div className={styles.pointNumber}>{number}</div>
                  <div className={styles.pointText}>{text}</div>
                  <div className={styles.pointDescription}>{description}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </Fade>
    </section>
  );
};
