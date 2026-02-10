import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Code, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gamma-bg">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gamma-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gamma-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gamma-bg via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-gamma-card/50 backdrop-blur border border-gamma-border px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-gamma-text uppercase tracking-widest">Available for hire</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gamma-primary to-gamma-accent">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gamma-muted mb-8 font-light max-w-2xl mx-auto">
          {PERSONAL_INFO.role}
        </p>
        
        <p className="text-md text-gray-400 mb-10 max-w-lg mx-auto font-mono">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="#coding" className="px-8 py-3 bg-gamma-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center">
            <Code className="w-4 h-4 mr-2" /> View Coding Skills
          </a>
          <a href="#technical" className="px-8 py-3 bg-gamma-card hover:bg-gray-800 border border-gamma-border text-white rounded-lg font-medium transition-all flex items-center">
            <Brain className="w-4 h-4 mr-2" /> Explore AI Stack
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
