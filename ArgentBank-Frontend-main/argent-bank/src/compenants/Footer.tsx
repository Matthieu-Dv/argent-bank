import React from 'react';

// Déclaration d'un type pour les props (ici vide mais prêt à évoluer)
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
