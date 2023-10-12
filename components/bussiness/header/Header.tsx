import React from 'react';
import PCHeader from './PCHeader';
import MobileHeader from './MobileHeader';

export default function Header({ isFixed = false }) {
  return (
    <>
      <PCHeader />
      <MobileHeader isFixed={isFixed} />
    </>
  );
}
