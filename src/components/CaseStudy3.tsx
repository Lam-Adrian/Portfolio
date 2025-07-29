import React from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, Quote, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CaseStudy3Props {
  onBack: () => void;
}

const CaseStudy3: React.FC<CaseStudy3Props> = ({ onBack }) => {
  const [expandedTimelineItem, setExpandedTimelineItem] = React.useState<number | null>(null);
  const [isPSExpanded, setIsPSExpanded] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projectDetails = {
    title: "Healthcare Dashboard Design System",
    client: "MedTech Solutions",
    duration: "16 weeks",
    team: "5 members",
    role: "Lead UX Researcher & Design System Architect",
    outcome: "40% faster task completion, 95% accessibility compliance"
  };

  const researchMethods = [
    "Stakeholder Interviews (20 participants)",
    "Contextual Inquiries",
    "Accessibility Testing",
    "Design System Audit",
    "Component Usability Testing",
    "Workflow Analysis"
  ];

  const keyFindings = [
    {
      title: "Inconsistent Interface Patterns",
      description: "Healthcare professionals were losing critical time navigating between different interface patterns across various dashboard sections, leading to potential medical errors.",
      impact: "High"
    },
    {
      title: "Accessibility Barriers",
      description: "The existing system failed to meet WCAG 2.1 AA standards, creating barriers for healthcare workers with disabilities and limiting system adoption.",
      impact: "High"
    },
    {
      title: "Information Hierarchy Issues",
      description: "Critical patient information was not properly prioritized in the visual hierarchy, causing healthcare professionals to miss important alerts and updates.",
      impact: "Medium"
    }
  ];

  const timelineDetails = [
    {
      title: "Week 1-3: Discovery & Stakeholder Research",
      subtitle: "Stakeholder interviews, current system audit, workflow analysis",
      details: [
        "20 stakeholder interviews across different healthcare roles (doctors, nurses, administrators)",
        "Comprehensive audit of existing design patterns and components",
        "Workflow analysis of critical healthcare tasks and processes",
        "Accessibility evaluation using automated and manual testing",
        "Technical constraints assessment with development team",
        "Competitive analysis of healthcare design systems",
        "Regulatory compliance requirements research (HIPAA, FDA)",
        "Current pain points documentation and prioritization"
      ]
    },
    {
      title: "Week 4-6: User Research & Contextual Studies",
      subtitle: "Contextual inquiries, usability testing, accessibility research",
      details: [
        "Contextual inquiries in hospital settings with 15 healthcare professionals",
        "Task analysis of critical workflows (patient lookup, medication management, etc.)",
        "Usability testing of existing dashboard components",
        "Accessibility testing with healthcare workers with disabilities",
        "Cognitive load assessment during high-stress scenarios",
        "Error analysis and near-miss incident documentation",
        "Time-motion studies to understand efficiency bottlenecks",
        "Cross-departmental workflow mapping"
      ]
    },
    {
      title: "Week 7-9: Analysis & Design Principles",
      subtitle: "Data synthesis, design principles creation, component strategy",
      details: [
        "Affinity mapping of 400+ research insights",
        "Healthcare-specific design principles development",
        "Component inventory and rationalization strategy",
        "Accessibility guidelines tailored for healthcare contexts",
        "Information architecture for design system documentation",
        "Token system design (colors, typography, spacing) for healthcare",
        "Component priority matrix based on usage frequency and impact",
        "Design system governance model creation"
      ]
    },
    {
      title: "Week 10-12: Component Design & Development",
      subtitle: "Component library creation, accessibility implementation, documentation",
      details: [
        "High-priority component design and development",
        "Accessibility implementation with ARIA patterns",
        "Interactive component documentation creation",
        "Design tokens implementation in code",
        "Component testing framework setup",
        "Usage guidelines and best practices documentation",
        "Healthcare-specific component variants (alerts, patient cards, etc.)",
        "Cross-browser and assistive technology testing"
      ]
    },
    {
      title: "Week 13-14: Validation & Testing",
      subtitle: "Component usability testing, accessibility validation, stakeholder review",
      details: [
        "Component-level usability testing with healthcare professionals",
        "Accessibility validation with screen reader users",
        "Performance testing of component library",
        "Integration testing with existing healthcare systems",
        "Stakeholder review sessions and feedback incorporation",
        "Documentation usability testing with developers",
        "Compliance verification with healthcare regulations"
      ]
    },
    {
      title: "Week 15-16: Implementation & Training",
      subtitle: "System rollout, team training, adoption support",
      details: [
        "Design system rollout to development teams",
        "Training sessions for designers and developers",
        "Implementation guidelines and migration strategy",
        "Success metrics definition and tracking setup",
        "Feedback collection system implementation",
        "Ongoing support documentation creation",
        "Change management strategy for healthcare teams",
        "Post-launch monitoring and iteration planning"
      ]
    }
  ];

  const solutions = [
    {
      title: "Unified Component Library",
      description: "Created a comprehensive component library with consistent patterns, reducing cognitive load and improving task efficiency for healthcare professionals",
      result: "40% faster task completion across all dashboard functions"
    },
    {
      title: "Healthcare-Focused Accessibility",
      description: "Implemented WCAG 2.1 AA compliance with healthcare-specific considerations, including high contrast modes and keyboard navigation optimized for medical workflows",
      result: "95% accessibility compliance score"
    },
    {
      title: "Critical Information Hierarchy",
      description: "Redesigned information architecture to prioritize critical patient data and alerts, reducing the risk of missed important information",
      result: "78% reduction in information-seeking time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-white mb-4">
                {projectDetails.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Created a comprehensive design system for healthcare professionals, focusing on accessibility, consistency, and efficiency in critical medical workflows. The system prioritizes patient safety while improving user experience across complex healthcare dashboards.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center text-gray-400">
                  <Clock size={16} className="mr-2 text-blue-400" />
                  {projectDetails.duration}
                </div>
                <div className="flex items-center text-gray-400">
                  <Users size={16} className="mr-2 text-blue-400" />
                  {projectDetails.team}
                </div>
                <div className="flex items-center text-gray-400">
                  <Target size={16} className="mr-2 text-blue-400" />
                  {projectDetails.role}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
              <h3 className="font-semibold text-white mb-4">Project Impact</h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Task Completion</div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">Client</div>
                <div className="font-medium text-white">{projectDetails.client}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Healthcare dashboard interface"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Challenge */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 mb-4">
                  MedTech Solutions was struggling with inconsistent user interfaces across their healthcare dashboard suite. Healthcare professionals were reporting increased cognitive load, longer task completion times, and concerns about patient safety due to interface inconsistencies. The lack of a unified design system was creating barriers to efficient healthcare delivery.
                </p>
                <p className="text-gray-300">
                  Our goal was to create a comprehensive design system that would standardize interfaces, improve accessibility for healthcare workers with disabilities, and ultimately enhance patient care through more efficient and reliable user experiences.
                </p>
              </div>
            </section>

            {/* Research Process */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Research Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {researchMethods.map((method, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-900/30 rounded-lg">
                    <CheckCircle size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">{method}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Research Timeline</h3>
                <div className="space-y-3">
                  {timelineDetails.map((item, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg">
                      <button
                        onClick={() => setExpandedTimelineItem(expandedTimelineItem === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center flex-1">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="font-medium text-white">{item.title}</div>
                            <div className="text-gray-300 text-sm">{item.subtitle}</div>
                          </div>
                        </div>
                        <div className="ml-4 text-blue-400">
                          {expandedTimelineItem === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      
                      {expandedTimelineItem === index && (
                        <div className="px-4 pb-4 border-t border-gray-600">
                          <div className="ml-7 pt-3">
                            <h4 className="font-medium text-white mb-3">Detailed Activities:</h4>
                            <ul className="space-y-2">
                              {item.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Findings */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Key Findings</h2>
              <div className="space-y-6">
                {keyFindings.map((finding, index) => (
                  <div key={index} className="border border-gray-700 rounded-xl p-6 bg-gray-800">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{finding.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        finding.impact === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {finding.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-300">{finding.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* User Quote */}
            <section className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-2xl p-8">
              <Quote size={32} className="text-blue-400 mb-4" />
              <blockquote className="text-xl text-white mb-4 italic">
                "Every time I switch between different parts of the system, I have to relearn how things work. In healthcare, that cognitive overhead can be dangerous when you're dealing with patient care."
              </blockquote>
              <cite className="text-gray-300">— Dr. Sarah Chen, Emergency Medicine</cite>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Solutions & Impact</h2>
              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                    <div className="bg-green-900/30 p-6 rounded-xl text-center">
                      <TrendingUp size={24} className="text-green-400 mx-auto mb-2" />
                      <div className="font-semibold text-green-300">{solution.result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Final Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-gray-300">Faster Task Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Accessibility Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">78%</div>
                  <div className="text-gray-300">Reduced Information Seeking</div>
                </div>
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Key Learnings</h2>
              <div className="bg-blue-900/30 p-6 rounded-xl">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Healthcare design systems require specialized accessibility considerations beyond standard WCAG guidelines
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Consistency in high-stakes environments directly impacts patient safety and care quality
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Contextual research in healthcare settings reveals critical insights not captured in lab testing
                  </li>
                </ul>
              </div>
            </section>

            {/* PS Section */}
            <section>
              <button
                onClick={() => setIsPSExpanded(!isPSExpanded)}
                className="flex items-center justify-between w-full p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border-l-4 border-blue-400"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white mb-2">PS: Behind the Research</h2>
                  <p className="text-gray-300 italic text-sm">
                    For fellow researchers and practitioners - deeper methodological insights
                  </p>
                </div>
                <div className="text-blue-400">
                  {isPSExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {isPSExpanded && (
                <div className="mt-4 bg-gray-800 border-l-4 border-blue-400 p-8 rounded-r-xl">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Research in Healthcare Environments</h3>
                      <p className="text-gray-300 mb-3">
                        Healthcare research requires IRB approval and HIPAA compliance, which meant we couldn't record sessions or access real patient data. We developed simulation scenarios using synthetic data that maintained clinical realism while protecting privacy.
                      </p>
                      <p className="text-gray-300">
                        The constraint actually improved our research - synthetic scenarios let us test edge cases and error states that would be unethical to create with real patient data.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Testing Under Pressure</h3>
                      <p className="text-gray-300 mb-3">
                        Healthcare interfaces must work during high-stress situations. We developed "pressure testing" scenarios where participants had to use components while managing simulated interruptions and time pressure.
                      </p>
                      <p className="text-gray-300">
                        This revealed that consistent patterns become even more critical under stress - when cognitive load is high, users rely heavily on muscle memory and visual consistency to navigate interfaces quickly and safely.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Component Testing Approach</h3>
                      <p className="text-gray-300 mb-3">
                        We used a two-phase testing approach: isolated component testing for usability, then integrated workflow testing for context. This helped separate component-level issues from system-level problems.
                      </p>
                      <p className="text-gray-300">
                        The isolated testing caught micro-interaction issues that would have been lost in complex workflow testing, while integrated testing revealed how components needed to work together in real clinical scenarios.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Beyond Standard Accessibility</h3>
                      <p className="text-gray-300 mb-3">
                        Healthcare accessibility goes beyond WCAG guidelines. We researched "situational accessibility" - how interfaces work when users are wearing gloves, in low light, or dealing with hand tremors from long shifts.
                      </p>
                      <p className="text-gray-300">
                        This led to larger touch targets, higher contrast ratios, and voice confirmation options that improved usability for all healthcare workers, not just those with permanent disabilities.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Connecting UX to Patient Safety</h3>
                      <p className="text-gray-300">
                        The most challenging aspect was connecting UX improvements to patient safety outcomes. We worked with hospital quality teams to track how interface changes affected medical error rates and patient satisfaction scores. This data was crucial for getting buy-in from clinical leadership who initially saw design as "nice to have" rather than essential for patient care.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-400">Duration</div>
                    <div className="font-medium text-white">{projectDetails.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Team Size</div>
                    <div className="font-medium text-white">{projectDetails.team}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">My Role</div>
                    <div className="font-medium text-white">{projectDetails.role}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Industry</div>
                    <div className="font-medium text-white">Healthcare Technology</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 p-6 rounded-xl border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Storybook', 'axe DevTools', 'NVDA', 'Dovetail', 'Miro'].map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy3;