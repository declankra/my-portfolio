import React from 'react';
import { useLocation } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';

const routeTitles = {
  '/': 'Home | Declan Kramper',
  '/projects': 'Projects | Declan Kramper',
  '/about': 'About | Declan Kramper',
  '/health': 'Health | Declan Kramper',
  '/bcg': 'BCG | Declan Kramper',
  '/goals': 'Goals | Declan Kramper',
  '/resume': 'Resume | Declan Kramper',
  '/manual': 'Manual | Declan Kramper',
};

function TitleManager({ children }) {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Declan Kramper';
  useDocumentTitle(title);

  return <>{children}</>;
}

export default TitleManager;