/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-aura-green selection:text-aura-black">
        <Navbar />
        <main className="max-w-[1720px] mx-auto px-6">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="border-t border-hextech-green/10 my-12" />
                <Projects />
              </>
            } />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/cases/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
