import React from 'react';

// Définition du type d'un compte
type AccountData = {
  id: number;
  title: string;
  amount: string;
  description: string;
};

// Déclaration des props attendues par le composant
interface AccountProps {
  accounts: AccountData[]; // Le composant reçoit un tableau de comptes
}

const Account: React.FC<AccountProps> = ({ accounts }) => {
  return (
    <section>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <div key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Account;
