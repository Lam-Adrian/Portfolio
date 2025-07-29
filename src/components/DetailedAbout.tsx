import React from 'react';
import { ArrowLeft, MapPin, Calendar, Globe, Heart, Lightbulb, Users, Target, Award, BookOpen, Coffee, ChefHat, Hammer, Gamepad2, Headphones, Brain, Star, ChevronRight } from 'lucide-react';

interface DetailedAboutProps {
  onBack: () => void;
}

const DetailedAbout: React.FC<DetailedAboutProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const timeline = [
    {
      year: "2023-Now",
      title: "Accessibility Consultant",
      company: "Self-Employed",
      description: "Collaborating with public organizations to improve the accessibility of their products and services",
      achievements: ["Coordinated cross-organization initiatives and public facing events", "Improved public access to adaptive technologies for accessibility needs"]
    },
    {
      year: "2023",
      title: "UX Researcher and Information Systems Designer (Project Contract)",
      company: "ISTEP",
      description: "Led full redesign of internal knowledge systems from research and problem identification to implementation",
      achievements: ["Redesigned information architecture and navigation flow to reduce information retrieval time by 40%", "Conducted 20+ in-depth interviews, usability tests, card sorts, and tree tests", "Created documentation for maintenance and development of updated system, allowing for easy iteration and improvement"]
    },
    {
      year: "2023",
      title: "Information Architect (Co-op)",
      company: "Precision Content",
      description: "Assisted content conversion for Big 3 client. Learned about practical applications for information architecture and technical writing",
      achievements: ["Improved speed and reduced error rate of content conversion by 20% by rewriting DITA XML transformation scenarios", "Converted client documents to fit information architectre standards in XML", "Led research project to create consistent standards for business communication"]
    },
    {
      year: "2022-2023",
      title: "Makerspace Lab Assistant",
      company: "Knowledge Media Design Institute",
      description: "Maintained lab space and assisted faculty and students with Maker technology",
      achievements: ["Developed programs and activities to educate faculty and students about uses of Makerspace technology", "Facilitated projects using 3d printing, scanning, and VR, including adaptive technology for accessibility and product prototypes"]
    },
    {
      year: "2018-2019",
      title: "Project Control Officer and Architectural Review Board Co-chair",
      company: "Scotiabank",
      description: "Tracked and reported detailed project status information for IT development team",
      achievements: ["Managed contracts and budgets for over $5M of project expenditure", "Collaborated with Project Managers and Solutions Architects to craft estimates, audit deliverables, budget costs, and communicate project requirements", "Assisted in development of Architectural Review Board, tracking new projects to monitor and plan for potential technical debt"]
    }
  ];

  const skills = [
    { category: "Research Methods", items: ["User Interviews", "Usability Testing", "A/B Testing", "Card Sorting", "Tree Testing", "Diary Studies", "Survey Design", "Data Analytics (Longitudinal, Census, Etc.)", "Eye Tracking/Heatmaps","Web Analytics"] },
    { category: "Analysis & Strategy", items: [ "Journey Mapping", "Persona Development", "Competitive Analysis", "Heuristic Evaluation", "Information Architecture", "Affinity Mapping", "Statistical Analysis" ] },
    { category: "Tools & Software", items: ["Figma", "UserTesting", "Qualtrics", "Google Analytics", "SPSS", "R", "Notion", "Miro"] },
    { category: "Soft Skills", items: ["Stakeholder Management", "Cross-functional Collaboration", "Presentation Skills", "Workshop Facilitation", "Strategic Thinking"] }
  ];

  const personalInterests = [
    { icon: ChefHat, title: "Cooking", description: "Trying new recipies and doing my best to capture feelings and memories in a taste" },
    { icon: Hammer, title: "Prop Making", description: "Building cool physical props from your favorite movies and tv shows- it's nice to work with my hands and make something I can hold" },
    { icon: Gamepad2, title: "Board Game Design", description: "My favorite kind of UX- designing something that's both fun and challenging is a lot more interesting than designing for task completion and efficiency" },
    { icon: Headphones, title: "Podcasting", description: "Listening to all types of designers talk through their thought process, because there's unique insights and learnings from each discipline" },
    { icon: BookOpen, title: "Behavioural Economics Books", description: "Reading all about modern behavioural economics theories (and debunking problematic ones- sorry Freakonomics)" },
    { icon: Heart, title: "Accessibility", description: "Learning about the latest and greatest in accessibility technology, and making sure others can learn too! (ask me more about this!!)" }
  ];

  const philosophies = [
    {
      title: "Empathy-Driven Research: Empathy as a goal",
      description: "Everyone has a unique context- personal truths that that shape their behaviour and perception. As a researcher it's my job to find and validate these truths. Empathy-driven research is about more than just kindness, but a is about developing a rigorous, thorough understanding. More than just listening, it's about asking the right questions to dig deep into the hows, whys, and buts behind behaviour. Empathy as a research goal means identifying and solving root problems, and not just symptoms."
    },
    {
      title: "Triangulating Insights: Quant and Qual together",
      description: "Data can tell you what, when, and where a problem happens, but you need user research to tell you why and how. Data without user insights can show us a problem exists, but not why it's happening or where it comes from. User insights can show us a problem's nature, but not how widespread and impactful it is. We need to triangulate with both qualitative and quantitative research to understand how to fix a problem, and prioritize which ones to fix."
    },
    {
      title: "Inclusive Research: Who's not in the room?",
      description: "Technology should adapt for diverse users, not the other way around. When researching and designing we have to consider not just who we're designing for, but who we're leaving out. These aren't just outliers, but real people whose needs aren't being met. I actively champion accessibility and inclusive research practices including intentional recruitment and adaptive tech testing focused on exposing blind spots, because failing to consider edge cases means designing for systemic exclusion."
    },
    {
      title: "Collaboration: Communication is impact",
      description: "Collaboration is essential for excellent research and research impact. I work with a broad range of stakeholders early and often to give a deeper understanding of the problem space- clarifying goals, uncovering constraints, and ensuring that we're doing research that stakeholders can agree with and believe in. By building alignment from the beginning we ensure buy-in when it comes time to design and launch, ultimately giving us the highest chance of making a real impact. "
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-5xl font-bold text-white mb-6">
                My Journey inside and outside UX
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                From Behavioural Economics, Sociology, and business to UX research and strategy design, here's the complete story of how I discovered my passion for UX and user advocacy.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2 text-blue-400" />
                  Toronto, Ontario, Canada
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2 text-blue-400" />
                  4+ Years Experience
                </div>
                <div className="flex items-center text-gray-400">
                  <Globe size={16} className="mr-2 text-blue-400" />
                  Quantitative + Qualitative Experience
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-300 text-sm">User Interviews Conducted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-300 text-sm">Research Projects Led</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-gray-300 text-sm">End-to-end Redesigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Origin Story */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">How It All Started</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">The Spark</h3>
                <p className="text-gray-200 mb-4">
                  In my undergrad I studied economics. Economics loves models and assumptions- things that work if humans have perfect information and are perfectly rational. We know neither of these things are realistic, and it bothered me that economic policy was often ineffective because it failed to capture how people truly behave. 
                </p>
                <p className="text-gray-200">
                  I wanted to understand how real people make decisions, and this led me to studying Behavioural Economics- looking at where results don't align with models, and studying the human reasons behind why. Since my school only had one course on Behavioural Economics, I reached out to my professor to do my own independent research study looking at effects on anonymous honesty when there's money on the line. (Surprisingly, people aren't more likely to cheat at higher stakes.) I didn't know it at the time, but I was already doing user research. 
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Brain size={24} className="text-blue-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Behavioural Economics Foundation</h4>
                <p className="text-gray-300 text-sm">BA in Applied Economics from Wilfrid Laurier University, focusing on Behavioural Economics</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Lightbulb size={24} className="text-blue-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">First Research Project</h4>
                <p className="text-gray-300 text-sm">Studied how anonymity and financial incentive impacts honesty and self-reeporting behaviour</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Target size={24} className="text-blue-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Career Pivot</h4>
                <p className="text-gray-300 text-sm">Transitioned from economics/business management path to UX research after realizing the tangible impact on people</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Career Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <div className="text-blue-400 font-bold text-lg">{item.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 mr-8 relative">
                    {index !== timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-700"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <div className="text-blue-400 mb-3">{item.company}</div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm text-gray-400">
                          <Star size={12} className="text-blue-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Philosophy */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Research Philosophy & Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{philosophy.title}</h3>
                <p className="text-gray-300 leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Beyond Research</h2>
          <p className="text-gray-300 mb-8 text-lg">
            I believe that diverse interests make better researchers. Here's what fuels my curiosity outside of work:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInterests.map((interest, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                <interest.icon size={32} className="text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-300 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailedAbout;