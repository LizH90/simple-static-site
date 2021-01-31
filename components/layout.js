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
      <Link href="/details">
          <a className={styles.navlink}>Details</a>
        </Link>
        <Link href="/location">
          <a className={styles.navlink}>Location</a>
        </Link>
        <Link href="/lodging">
          <a className={styles.navlink}>Lodging</a>
        </Link>
        <Link href="/gifts">
          <a className={styles.navlink}>Gifts</a>
        </Link>
      </div>
    </nav>
    {children}
  </>
);

export default Layout;