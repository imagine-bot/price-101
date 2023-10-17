// pages/pricing.tsx
import React from 'react';
import Pricing from '../components/Pricing';

const pricingTypes = [
  {
    name: 'Basic',
    price: 10,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    cta: 'Get Basic',
  },
  {
    name: 'Pro',
    price: 20,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    cta: 'Get Pro',
  },
  {
    name: 'Enterprise',
    price: 30,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    cta: 'Contact Us',
  },
];

const PricingPage: React.FC = () => {
  return <Pricing pricingTypes={pricingTypes} />;
};

export default PricingPage;