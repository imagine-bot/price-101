// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to our SaaS app!</h1>
      <Link href="/pricing">
        <a>Check out our pricing</a>
      </Link>
    </div>
  );
};

export default HomePage;