import styles from './todos-client-feature-home.module.css';
import { Nav } from './Nav';
import { Todos } from './Todos';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <Nav />
      <Todos />
    </div>
  );
}

export default HomePage;
