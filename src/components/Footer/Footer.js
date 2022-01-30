import NavLogo from '../Header/NavLogo';
import './Footer.scss';

function Footer({ footerConfig }) {
  const { logo } = footerConfig;
  return <footer>{/* <NavLogo logo={logo} /> */}</footer>;
}

export default Footer;
