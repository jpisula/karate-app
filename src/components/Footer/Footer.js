import NavLogo from '../Header/NavLogo';
import './Footer.scss';

function Footer({ footerConfig }) {
  const { logo } = footerConfig;
  return (
    <footer className='footer'>
      <section>
        <NavLogo logo={logo} />
        <div className='footer-info'>
          <p>Michał Bodziony</p>
          <p>tel. 000 000 000</p>
        </div>
      </section>
      <div className='formal-info'>
        <p className='creator-ad'>
          This website was created in collaboration with{' '}
          <span>Gancle Studio</span>{' '}
        </p>
        <p className='copyright'>
          <small>&copy;</small> Copyright {new Date().getFullYear()},
          oyama-karate.eu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
