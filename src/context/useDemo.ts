import { useContext } from 'react';
import { DemoContext } from './demoContextValue';

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
