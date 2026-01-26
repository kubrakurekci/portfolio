import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} </p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
    <LinkedInIcon style={{ width: '24px', height: '24px' }} />
    </a>
    <a>
      <GitHubIcon style={{ width: '24px', height: '24px' }} />
    </a>
  </nav>
</footer>
  );
}
export default Footer;
