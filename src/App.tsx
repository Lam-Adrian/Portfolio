import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ExternalLink, Star, Users, Search, BarChart3, Lightbulb, Target, Zap, ChevronDown, ChevronUp, Award, BookOpen, Coffee, User, MessageCircle, TrendingUp, Handshake } from 'lucide-react';
import CaseStudy from './components/CaseStudy';
import CaseStudy2 from './components/CaseStudy2';
import CaseStudy3 from './components/CaseStudy3';
import DetailedAbout from './components/DetailedAbout';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<number | null>(null);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [showDetailedAbout, setShowDetailedAbout] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const caseStudies = [
    {
      title: "End-to-end UX Overhaul of Educator Resource Hub",
      description: "Led research, design, and implementation of new website, design system and product templates.",
      image: "https://i.imgur.com/7AZbs92.jpeg",
      tags: [ "UX Research", "Product Redesign", "Usability Testing", "Design System","Information Architecture"],
      metrics: "70% increase in downloads, 50% faster navigation",
      timeline: "25 weeks (Part-time)"
    },
    {
      title: "Information Architecture Redesign for Shared Knowledge Systems",
      description: "Solo research and IA redesign, untangling years of file sprawl into a sustainable knowledge systems.",
      image: "https://www.utoronto.ca/sites/default/files/UofT86459_u-of-t-engineering_50091714792_o.jpg",
      tags: ["Information Architecture","Card Sorting","Tree Testing","User Interviews", "Digital Transformation"],
      metrics: "40% faster retrieval, 100% user adoption",
      timeline: "16 weeks"
    },
    {
      title: "XXXXXX XXXXXXXX XXX XXXXX XXXXXXX",
      description: "A cool prooject that I haven't figured out how to talk about yet",
      image: "https://i.imgur.com/WDiiHIC.jpeg",
      tags: ["Rocket Science", "Time Travel", "Cute Cats"],
      metrics: "A really impressive metric",
      timeline: ""
    }
  ];

  if (activeCaseStudy === 1) {
    return <CaseStudy onBack={() => { setActiveCaseStudy(null); scrollToTop(); }} />;
  }

  if (activeCaseStudy === 2) {
    return <CaseStudy2 onBack={() => { setActiveCaseStudy(null); scrollToTop(); }} />;
  }

  if (activeCaseStudy === 3) {
    return <CaseStudy3 onBack={() => { setActiveCaseStudy(null); scrollToTop(); }} />;
  }

  if (showDetailedAbout) {
    return <DetailedAbout onBack={() => { setShowDetailedAbout(false); scrollToTop(); }} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              Adrian Lam
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'work'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {section === 'work' ? 'Case Studies' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'work'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  {section === 'work' ? 'Case Studies' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                UX Researcher &<br />
                <span className="text-blue-400">Design Strategist</span>
              </h1>
              <p className="text-xl text-gray-300 mb-3 max-w-2xl">
                I help teams ask the right questions, to get the right answers, to find smarter, more impactful insights that translate to action. 
              </p>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Through research, I validate design decisions, uncover hidden variables, and ensure we build things users truly want and love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  View My Work
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <MessageCircle size={32} className="text-blue-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">User Research</h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors mb-3">Working with users to see what makes sense for them </p>
                    
                    {/* Hover overlay with additional info */}
                    <div className="absolute inset-0 bg-blue-500 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                      <h3 className="font-semibold mb-3">User Research</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MessageCircle size={14} className="mr-2 text-blue-100" />
                          <span>Interviews</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-2 text-blue-100" />
                          <span>Usability Testing</span>
                        </div>
                        <div className="flex items-center">
                          <Search size={14} className="mr-2 text-blue-100" />
                          <span>Information Architecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <TrendingUp size={32} className="text-blue-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Mixed Methods Analysis</h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors mb-3">Using the right combination of methods to dig deeper into insights </p>
                    
                    {/* Hover overlay with additional info */}
                    <div className="absolute inset-0 bg-blue-500 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                      <h3 className="font-semibold mb-3">Mixed Methods Analysis</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <BarChart3 size={14} className="mr-2 text-blue-100" />
                          <span>Qualitative & Quantitative </span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp size={14} className="mr-2 text-blue-100" />
                          <span>Data Analytics</span>
                        </div>
                        <div className="flex items-center">
                          <Target size={14} className="mr-2 text-blue-100" />
                          <span>Triangulating & Validating Insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <Handshake size={32} className="text-blue-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Collaboration</h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors mb-3">Ensuring insights are clear, actionable, and drive informed decisions</p>
                    
                    {/* Hover overlay with additional info */}
                    <div className="absolute inset-0 bg-blue-500 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                      <h3 className="font-semibold mb-3">Collaboration</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Users size={14} className="mr-2 text-blue-100" />
                          <span>Stakeholder Management</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle size={14} className="mr-2 text-blue-100" />
                          <span>Presenting Insights</span>
                        </div>
                        <div className="flex items-center">
                          <Handshake size={14} className="mr-2 text-blue-100" />
                          <span>Team Alignment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <Lightbulb size={32} className="text-blue-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Strategy</h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors mb-3">Aligning research insights with product decisions and company strategy</p>
                    
                    {/* Hover overlay with additional info */}
                    <div className="absolute inset-0 bg-blue-500 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                      <h3 className="font-semibold mb-3">Strategy</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Lightbulb size={14} className="mr-2 text-blue-100" />
                          <span>Product roadmaps</span>
                        </div>
                        <div className="flex items-center">
                          <Target size={14} className="mr-2 text-blue-100" />
                          <span>Design systems</span>
                        </div>
                        <div className="flex items-center">
                          <BarChart3 size={14} className="mr-2 text-blue-100" />
                          <span>Evidence-based decisions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-800 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-700 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-600 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                About Me
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    I specialize in translating complex user behaviors into actionable insights that drive product direction. I believe in the power of asking the right questions and looking closely to the hows, whys, and buts behind how people think. 
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    With a Masters in UX and training in Economics, Sociology, and Business, I bring a multidisciplinary lens to research. I've led research on everything from initial design validation, to product redesigns, and systems overhauls. 
                  </p>
                  <p className="text-lg text-gray-300 mb-1">
                    What makes my approach unique is that I connect the dots from ambiguity, to insight, to action: 
                  </p>           
                  <p className="text-lg text-gray-300 mb-1">
                    • <b>Qualitative</b> depth: Working with users to find the "whys"
                  </p>
                  <p className="text-lg text-gray-300 mb-1">
                    • <b>Quantitative</b> validation: Supporting findings with data
                  </p>
                  <p className="text-lg text-gray-300 mb-1">
                    • <b>Business</b> Strategy: Translating insight into strategic direction 
                  </p>
                  

                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">My Research Philosophy</h3>
                    <p className="text-gray-200">
                      "Research and design should be holistic, asking questions across disciplines to deeply understand user behaviors and our broader impact on their lives. Rather than <i>moving fast and breaking things,</i> we should aim to move fast and fix them."
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium text-white">Masters of Information - UX Specialization</div>
                        <div className="text-gray-300">University of Toronto</div>
                      </div>
                      <div>
                        <div className="font-medium text-white">Bachelors in Applied Economics</div>
                        <div className="text-gray-300">Wilfrid Laurier University</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Full-width Expandable section */}
            <div className="w-full">
              <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="flex items-center justify-between w-full p-6 bg-blue-900/50 hover:bg-blue-800/50 rounded-lg transition-colors"
              >
                <span className="font-semibold text-lg text-white">Learn More About My Journey</span>
                <div className="text-blue-400">
                  {isAboutExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {isAboutExpanded && (
                <div className="mt-6 space-y-8 animate-in slide-in-from-top duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                      <div className="flex items-center mb-6">
                        <Award size={28} className="text-blue-400 mr-4" />
                        <h4 className="font-semibold text-xl text-white">Other Education</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">                       
                        <li>• Business Analytics Diploma</li>
                        <li>• Business Management Option (Minor+)</li>
                        <li>• Sociological Research Option (Minor+)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                      <div className="flex items-center mb-6">
                        <BookOpen size={28} className="text-blue-400 mr-4" />
                        <h4 className="font-semibold text-xl text-white">Specializations</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Behavioural Economics</li>
                        <li>• Accessibility & Inclusive Design</li>
                        <li>• Mixed Methods Research</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <Coffee size={28} className="text-blue-400 mr-4" />
                      <h4 className="font-semibold text-xl text-white">When I'm Not Researching</h4>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-200">
                      You'll find me trying new recipies I found on the internet (to varying degrees of success), playing and designing board games, or making cool replica props. If you couldn't tell already, I really like making things. Most recently I've also been working with public organizations to promote accessibility across their services and events.
                    </p>
                  </div>
                  
                  {/* Button to detailed about page */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => { setShowDetailedAbout(true); window.scrollTo({ top: 0, behavior: 'auto' }); }}
                      className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                      <User size={20} className="mr-2" />
                      Read My Complete Story
                      <ChevronRight size={20} className="ml-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-1">
              Case Studies
            </h2>
            
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className={`bg-gray-900 rounded-xl shadow-sm transition-shadow duration-300 overflow-hidden group ${index === 2 ? 'opacity-60' : 'hover:shadow-2xl cursor-pointer'}`}>
                <div 
                  className="relative overflow-hidden"
                  onClick={index === 2 ? undefined : () => setActiveCaseStudy(index + 1)}
                >
                  <img
                    src={study.image} 
                    alt={study.title} 
                    className={`w-full h-48 object-cover transition-transform duration-300 ${index === 2 ? '' : 'group-hover:scale-105'}`}
                  />
                  {index === 2 ? (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="bg-yellow-600/90 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-white font-semibold">Under Construction</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <ExternalLink size={20} className="text-blue-500" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 
                    className={`text-xl font-semibold text-white mb-3 transition-colors ${index === 2 ? '' : 'group-hover:text-blue-400 cursor-pointer'}`}
                    onClick={index === 2 ? undefined : () => setActiveCaseStudy(index + 1)}
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span>{study.metrics}</span>
                    <span>{study.timeline}</span>
                  </div>
                  {index === 2 ? (
                    <div className="inline-flex items-center text-yellow-500 font-medium">
                      <span>Coming Soon</span>
                    </div>
                  ) : (
                    <button 
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      onClick={() => { setActiveCaseStudy(index + 1); window.scrollTo({ top: 0, behavior: 'auto' }); }}
                    >
                      <span>View Case Study</span>
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;