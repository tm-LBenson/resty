/** @format */
import styles from './header.module.scss';
function Header() {
  return (
    <header data-testid="header" className={styles['header']}>
      <h1>RESTy</h1>
    </header>
  );
}

export default Header;
