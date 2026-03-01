import { Navigate, Route, Routes } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { HomePage } from '@/features/Laboratory/views/HomePage';
import { ExplorationPage } from '@/features/Laboratory/views/ExplorationPage';
import { AboutPage } from '@/features/Laboratory/views/AboutPage';

export const AppRoutes = () => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="exploration" element={<ExplorationPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);
