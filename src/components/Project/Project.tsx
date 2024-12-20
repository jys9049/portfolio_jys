import React from 'react';
import ContentsContainer from '../ContentsContainer';
import { PROJECT_DATA } from './const';
import styles from './Project.module.scss';
function Project() {
  return (
    <ContentsContainer title="Project">
      {PROJECT_DATA.map((project) => (
        <div className={styles.projectContainer}>
          <p className={styles.title}>{project.title}</p>
          <div className={styles.contentsContainer}>
            <p className={styles.ellipsis}>{project.desc}</p>
          </div>
        </div>
      ))}
    </ContentsContainer>
  );
}

export default Project;
