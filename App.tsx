import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { SKILL_DATA, LANGUAGES, PROJECTS, BLOG_POSTS, PERSONAL_INFO } from './constants';
import { SkillBarChart, SkillRadarChart } from './components/Charts';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import { Github, Linkedin, Mail, Twitter, Globe, Book, Facebook, Instagram, MessageCircle, Send, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const codingSkills = SKILL_DATA.find(s => s.title === "Coding Proficiency");
  const techSkills = SKILL_DATA.find(s => s.title === "Technical & AI Arsenal");
  const softSkills = SKILL_DATA.find(s => s.title === "Soft Skills");
  const habitSkills = SKILL_DATA.find(s => s.title === "Habits & Discipline");
  const knowledgeSkills = SKILL_DATA.find(s => s.title === "Knowledge Domains");
  const otherSkills = SKILL_DATA.find(s => s.title === "Specialized Skills");

  const handleLanguageClick = (data: any) => {
    if (data.name === 'Python') {
      setSelectedLanguage(selectedLanguage === 'Python' ? null : 'Python');
    } else {
      setSelectedLanguage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gamma-bg text-gamma-text font-sans selection:bg-gamma-primary/30 scroll-smooth">
      <NavBar />
      
      <main>
        <Hero />

        {/* Section: Coding (Charts) */}
        <section id="coding" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12 border-l-4 border-gamma-primary pl-4 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-2">Coding Proficiency</h2>
            <p className="text-gamma-muted font-mono text-sm">Interactive Data • Click on <span className="text-blue-500 font-bold">Python</span> to see details</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
             {/* General Coding (Languages) */}
             <div className="bg-gamma-card/50 p-6 rounded-2xl border border-gamma-border backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Languages
                </h3>
                {codingSkills && (
                  <SkillBarChart 
                    data={codingSkills.skills} 
                    color="#6366f1" 
                    onClick={handleLanguageClick}
                  />
                )}
             </div>

             {/* Python Deep Dive - Conditional Render */}
             {selectedLanguage === 'Python' && (
               <div className="bg-gamma-card/50 p-6 rounded-2xl border border-gamma-border backdrop-blur-sm animate-fade-in-up">
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Python Ecosystem
                  </h3>
                  {codingSkills && <SkillBarChart data={codingSkills.skills.find(s => s.name === 'Python')?.subSkills || []} />}
               </div>
             )}
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="py-24 bg-black/40 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
             <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between animate-fade-in-up">
                <div className="border-l-4 border-white pl-4 mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
                  <p className="text-gamma-muted font-mono text-sm">Real-world applications of AI & Code</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} project={project} index={idx} />
                ))}
             </div>

             <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
               <a href="#" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gamma-card border border-gamma-border rounded-full hover:bg-gamma-primary hover:border-gamma-primary hover:shadow-[0_0_20px_rgba(66,133,244,0.4)]">
                 View All Projects
                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
          </div>
        </section>

        {/* Section: Technical (Cards & Grid) */}
        <section id="technical" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
           <div className="max-w-7xl mx-auto">
              <div className="mb-12 border-l-4 border-gamma-accent pl-4 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-2">Technical & AI Arsenal</h2>
                <p className="text-gamma-muted font-mono text-sm">Advanced Prompt Engineering • GenAI Tools</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techSkills?.skills.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} index={idx} />
                ))}
              </div>
           </div>
        </section>

        {/* Section: Soft Skills & Habits (Radar) */}
        <section id="soft" className="py-24 bg-gamma-card/20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Soft Skills Radar */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="mb-8 border-l-4 border-green-500 pl-4">
                <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                <p className="text-gamma-muted font-mono text-xs">Personality & Cognition</p>
              </div>
              {softSkills && <SkillRadarChart data={softSkills.skills} color="#22c55e" />}
            </div>

            {/* Habits Radar */}
            <div id="habits" className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="mb-8 border-l-4 border-yellow-500 pl-4">
                <h2 className="text-2xl font-bold text-white">Habits & Discipline</h2>
                <p className="text-gamma-muted font-mono text-xs">Daily Routine Analytics</p>
              </div>
              {habitSkills && <SkillRadarChart data={habitSkills.skills} color="#eab308" />}
            </div>

          </div>
        </section>

        {/* Section: Blog / Articles */}
        <section id="blog" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
           <div className="mb-12 border-l-4 border-pink-500 pl-4 animate-fade-in-up">
             <h2 className="text-3xl font-bold text-white mb-2">Latest Insights</h2>
             <p className="text-gamma-muted font-mono text-sm">Thoughts on AI, Development, and Philosophy</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, idx) => (
                <BlogCard key={idx} post={post} index={idx} />
              ))}
           </div>
        </section>

        {/* Section: Knowledge & Other (Masonry/Grid) */}
        <section id="knowledge" className="py-24 bg-black/40 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Book className="mr-2 text-gamma-primary" /> Study Skills
                </h3>
                <div className="space-y-3">
                  {knowledgeSkills?.skills.map((skill, idx) => (
                     <SkillCard key={idx} skill={skill} index={idx} />
                  ))}
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Globe className="mr-2 text-gamma-accent" /> Languages
                </h3>
                <div className="space-y-3 mb-8">
                  {LANGUAGES.map((skill, idx) => (
                     <SkillCard key={idx} skill={skill} index={idx} />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-6 mt-8">Specialized Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills?.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gamma-card border border-gamma-border rounded-full text-xs text-gray-300 hover:border-gamma-primary transition-colors cursor-default animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gamma-primary/5 pointer-events-none"></div>
           <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in-up">
              <h2 className="text-4xl font-bold text-white mb-6">Let's Create Something Legendary</h2>
              <p className="text-xl text-gamma-muted mb-12 max-w-2xl mx-auto">
                Whether you have a question, a project idea, or just want to discuss the future of AI, my inbox is always open.
              </p>

              <div className="bg-gamma-card border border-gamma-border rounded-2xl p-8 md:p-12 shadow-2xl">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <input type="text" placeholder="Your Name" className="w-full bg-gamma-bg border border-gamma-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gamma-primary transition-colors" />
                    <input type="email" placeholder="Your Email" className="w-full bg-gamma-bg border border-gamma-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gamma-primary transition-colors" />
                    <textarea placeholder="Your Message" rows={4} className="w-full bg-gamma-bg border border-gamma-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gamma-primary transition-colors md:col-span-2"></textarea>
                 </div>
                 
                 <button className="relative overflow-hidden group w-full md:w-auto px-10 py-4 bg-gradient-to-r from-gamma-primary to-gamma-accent text-white font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(66,133,244,0.5)]">
                   <span className="relative z-10 flex items-center justify-center">
                     Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                 </button>
              </div>

              <div className="mt-16">
                 <p className="text-sm font-mono text-gray-500 mb-6">CONNECT VIA SOCIALS</p>
                 <div className="flex justify-center gap-6">
                    <a href={PERSONAL_INFO.socials.facebook} className="p-3 bg-gamma-card rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300 text-gray-400">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href={PERSONAL_INFO.socials.instagram} className="p-3 bg-gamma-card rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 text-gray-400">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href={PERSONAL_INFO.socials.whatsapp} className="p-3 bg-gamma-card rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 text-gray-400">
                      <MessageCircle className="w-6 h-6" />
                    </a>
                    <a href={PERSONAL_INFO.socials.linkedin} className="p-3 bg-gamma-card rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 text-gray-400">
                      <Linkedin className="w-6 h-6" />
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gamma-border py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
               <h2 className="text-2xl font-bold font-mono text-white">DEB.BARMAN</h2>
               <p className="text-gray-500 text-sm mt-1">Python Developer | AI Enthusiast</p>
            </div>
            
            <div className="flex space-x-6">
               {/* Small Footer Links if needed */}
               <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Privacy Policy</a>
               <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 text-center md:text-left text-gray-700 text-xs font-mono">
            <p>&copy; {new Date().getFullYear()} Deb Barman. Engineered with precision.</p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;