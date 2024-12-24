import React from 'react';
import iconChat from '../img/icon-chat.webp';
import iconMoney from '../img/icon-money.webp';
import iconSecurity from '../img/icon-security.webp';

const Texts: React.FC = () => {
  const features = [
    {
      icon: iconChat,
      alt: 'Chat Icon',
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: iconMoney,
      alt: 'Money Icon',
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: iconSecurity,
      alt: 'Security Icon',
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.icon} alt={feature.alt} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </>
  );
};

export default Texts;
