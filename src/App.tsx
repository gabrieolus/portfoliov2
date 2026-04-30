/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-aura-green selection:text-aura-black">
      <Navbar onHomeClick={handleBack} />
      <main>
        {activeProject ? (
          <ProjectDetail 
            projectId={activeProject} 
            onBack={handleBack} 
            onProjectClick={handleProjectClick}
          />
        ) : (
          <>
            <Hero />
            <Projects onProjectClick={handleProjectClick} />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
