import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => (
  <>
    <nav>
      <div>
        <Link href="/">
          <a className={styles.navlink}>Home</a>
        </Link>
      </div>
      <div >
        <Link href="/wedding">
          <a className={styles.navlink}>Wedding</a>
        </Link>
        <Link href="/location">
          <a className={styles.navlink}>Location</a>
        </Link>
        <Link href="/accommodation">
          <a className={styles.navlink}>Accom</a>
        </Link>
      </div>
    </nav>
    {children}
  </>
);

export default Layout;