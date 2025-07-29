import React from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, Quote, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  const [expandedTimelineItem, setExpandedTimelineItem] = React.useState<number | null>(null);
  const [isPSExpanded, setIsPSExpanded] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projectDetails = {
    title: "End-to-end UX Overhaul of Educator Resource Hub",
    client: "Teaching and Learning Research in Action (TLRA)",
    duration: "25 weeks (part-time)",
    team: "4 members",
    role: "Lead UX Researcher, UX designer (design system)",
    outcome: "70% increase in downloads, 50% faster navigation"
  };

  const researchMethods = [
    "User Interviews (15 participants)",
    "Usability Testing Sessions",
    "Card Sorting",
    "Tree Testing",
    "Competitor Research",
    "Journey Mapping"
  ];

  const keyFindings = [
    {
      title: "Difficult Navigation",
      description: "Resource pages were hard to find and difficult to navigate, so users couldn't find resources relevant to them.",
      impact: "High"
    },
    {
      title: "Unclear Organization Goals",
      description: "Users struggled to understand the organization's goal, leading to confusion around how to use the site.",
      impact: "Medium"
    },
    {
      title: "Impractical Resources",
      description: "Even after finding relevant resources, teachers were unsure about how to practically apply them in the classroom. This was outside the scope of the website redesign we were initially tasked with, but was critical to the user journey. Even if we made navigation perfect, it wouldn't matter if the resources were unusable.",
      impact: "High"
    }
  ];

  const timelineDetails = [
    {
      title: "Every week",
      subtitle: "Stakeholder check-in, Peer/mentor review, Project status presentations",
      details: [
        "Weekly stakeholder meetings to align on progress, direction, and priorities",
        "Project status presentations with peers and mentors to track progress, validate methodology, and set next steps",
        "Incorporating feedback to cover gaps and planning for future iteration"  
      ]
    },
    {
      title: "Week 1-3: Discovery & Planning",
      subtitle: "Project kickoff, Stakeholder interview, Analytics review, Competitor research, Research plan, Heuristics evaluation, Content audit",
      details: [
        "Project kickoff meeting with stakeholders to define scope, objectives, business goals, constraints, and success metrics",
        "Analytics review of existing site performance and user behavior",
        "Competitor analysis of similar educational resource platforms",
        "Developed detailed research plan with methodologies and timeline",
        "Heuristic evaluation of the current site using Nielsen's 10 usability principles",
        "Complete content audit cataloging all existing resources and pages, along with their current information architecture structure"
      ]
    },
    {
      title: "Week 4-6: User Research",
      subtitle: "User interviews, Usability testing, Contextual inquiry, Card sorting, Tree testing",
      details: [
        "10 in-depth user interviews with educators from diverse backgrounds",
        "Contextual inquiry sessions observing teachers preparing lesson plans",
        "Moderated usability testing with 10 participants using think-aloud protocol",
        "Open card sorting with 15 participants to understand mental models",
        "Closed card sorting using metrics from open card sort to validate proposed information architecture",
        "Tree testing to evaluate findability of key resources"
      ]
    },
    {
      title: "Week 7-9: Analysis & Synthesis",
      subtitle: "Journey mapping, Persona creation, Affinity diagramming, Problem identification, Priority matrix",
      details: [
        "Affinity diagramming workshop with 100+ insights from user research",
        "Created detailed user journey maps for 3 primary user scenarios (finding resources, learning about the organization, and getting involved",
        "Developed 3 research-backed personas for educators at varying levels of experience with goals, frustrations, and behaviors",
        "Problem identification and categorization using Priority matrix to measure impact vs. effort",
        "Gap analysis between 'as-is' vs 'to-be' user experience along mapped journeys",
        "Opportunity mapping for quick wins and long-term improvements"      
      ]
    },
    {
      title: "Week 10-12: Ideation and Design",
      subtitle: "Group ideation, Hill/How-might-we statements, Information architecture redesign, Low/mid-fidelity prototypes, Style tile, Component library, Resource redesign",
      details: [
        "Collaborative ideation workshops to brainstorm potential solutions",
        "Generated hill/how-might-we statements and user stories to solidly define the problem and the goals of our solution",
        "Complete information architecture redesign based on card sorting results",
        "Low-fidelity wireframes for key user flows and pages, and mid-fidelity prototypes with improved navigation and content structure",
        "Style tile development based on Material design, establishing visual identity and aesthetic",
        "Component library creation for consistent patterns and design system",
        "Resource template redesign for improved clarity and practical useability in classrooms"
      ]
    },
    {
      title: "Week 13-14: Validation and Revision",
      subtitle: "Rapid testing, User interviews, Usability testing, Contextual inquiry, High-fidelity, and Iterations",
      details: [
        "Rapid prototype testing with 8 participants for quick feedback",
        "Follow-up interviews with original participants to validate solutions",
        "Moderated usability testing of new navigation and resource structure with new participants",
        "A/B testing of different resource page layouts",
        "High-fidelity prototype development incorporating all feedback",
        "Multiple design iterations based on testing results and final stakeholder review"
      ]
    },
    {
      title: "Week 15-25: Implementation",
      subtitle: "TRANSITION FROM SCHOOL PROJECT TO PAID CLIENT WORK. Learning wordpress, converting figma design to wordpress, implementing deeper analytics, tracking new site metrics",
      details: [
        "The scope of our initial project with the school ended, but TLRA liked us so much that they hired us to implement our design!",
        "WordPress theme development and customization",
        "Custom post types creation for different resource categories",
        "User acceptance testing with real educators",
        "Post-launch monitoring and metric tracking setup"
      ]
    }
  ];

  const solutions = [
    {
      title: "Streamlined Navigation + Visual Facelift",
      description: "Redesigned information architecture and front page meant 1 click to start looking at resources, and easier navigation to find the right kinds of resources",
      result: "50% reduction in bounce rate"
    },
    {
      title: "Communicating Purpose",
      description: "Added mission statement, organization info, and social proof so people could know TLRA's goals and trust them",
      result: "25% increase in email subscriptions"
    },
    {
      title: "Resource Redesign",
      description: "Redesigned content of resource posters, improving clarity on the concept, its purpose, and how to practically apply it",
      result: "70% increase in download rate"
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
                A full UX overhaul from research to redesign that transformed TLRA's website and product offerings. Restructured information architecture, modernized UI, and revamped content strategy resulting in significant improvements in navigation, clarity, adoption, and user retention.
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">+70%</div>
                  <div className="text-gray-300 text-sm">Download Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">+50%</div>
                  <div className="text-gray-300 text-sm">Faster Navigation</div>
                </div>
              </div>
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
            src="https://i.imgur.com/E5ojDad.jpeg" 
            alt="Laptop with old and updated website for TLRA"
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
                  Teaching and Learning Research in Action (TLRA) is a non-profit that helps educators apply teaching and learning practices derived from cutting-edge pedagogical research. While they attracted interested educators to their site, there was a significant dropoff in engagement with 70% of users bouncing after seeing their home page and even fewer making it to their resource pages. TLRA was failing to translate interest into interaction, and needed to understand how to give educators the help they were looking for. 
                </p>
                <p className="text-gray-300">
                  Our goal was to identify pain points in the navigation flow, understand why users were falling off, and redesign their website to improve usability and increase adoption rates TLRA's resources.
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
                "I don't really know what to do with this- it's neat information but I can't really use this poster for anything. "
              </blockquote>
              <cite className="text-gray-300">— Study Participant</cite>
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
                  <div className="text-4xl font-bold text-blue-400 mb-2">70%</div>
                  <div className="text-gray-300">Download Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
                  <div className="text-gray-300">Faster Navigation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-gray-300">Users Failed Navigation</div>
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
                    Even small friction points can cause users to disengage, and we can't assume that any step in the user journey is frictionless. Thorough research doesn't just validate known problems, but can discover invisible problems we weren't even aware of.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Strong visuals alone aren’t enough; information architecture plays an equally critical role in how users navigate and understand a site. Layouts should feel intuitive even before the UI adds polish.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Good research can only do so much. Clear communication is required to turn insights into impact, and to make sure we're asking the right questions in the first place. Aligning on goals and direction is the most critical step to making research meaningful and actionable. 
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
                    For fellow researchers and process enthusiasts - deeper methodological insights
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
                      <h3 className="text-lg font-semibold text-white mb-3">Project Scoping </h3>
                      <p className="text-gray-300 mb-3">
                        Our initial mandate from stakeholders at TLRA was to give their website a simple facelift. They knew that their existing visuals were bare bones, and believed a modernized look would encourage users to engage with their site more. However in our early research we discovered that users were struggling at multiple key points in the journey beyond just the UI. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        During usability testing users were confused about the purpose and mission of the organization, and were unsure about the intended purpose of the site. In tree tests users struggled to find key content, indicating underlying problems with their information architecture. Even when given full context about TLRA's mission and being directly handed their resources, users were unsure about how to apply the materials in real classroom settings. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        We presented these findings to our stakeholders, walking them through journey maps and user quotes, showing that the problem was broader than the UI, but included the information architecture, page contents, and the resources (product) that they produce. This evidence helped to align TLRA on the need for a larger redesign, and to shift the scope of the project from UI to a full product and content experience redesign looking at the holistic user journey.
                      </p>
                      <p className="text-gray-300 mb-3" >
<b>Takeaway/Skills Demonstrated:</b> This phase of the project taught me that the problem space is rarely what it first appears to be. By going beyond the original brief and uncovering issues with architecture, content, and strategy, I was able to help our stakeholders reframe their understanding of the real user barriers in this project and in the rest of their work. It was a valuable lesson in how research isn’t just about gathering data, but is about translating findings into a compelling narrative that influences direction. This part of the project gave me the opportunity to demonstrate not just my research chops, but also strategic thinking, user advocacy, and flexibility to rescope the project based on new findings.

                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Research Method Selection</h3>
                      <p className="text-gray-300 mb-3">
One of the hardest parts of this project was the tight deadline and lack of resources in the research phase. We had no budget for participant recruitment or research tools, and had to rely on our personal networks and snowball recruitment (fortunately, our sample was pretty broad, with both early-career and experienced educators). While we were all familiar with teaching, none of us had formal experience in the problem space, and even our stakeholders had limited insight on how teachers were actually using their site. Given these constraints, we had to move quickly, choose methods strategically, and be ready to pivot as new information came up. 
                      </p>
                      <p className="text-gray-300 mb-3">
                       After our project kickoff where we discussed TLRA's organizational goals, we immediately reached out to our networks and personal contacts to get an understanding of the participants we could expect along with potential gaps. We crafted a multi-layered research plan to build understanding quickly while leaving room for adaptation. To understand the problem space we started with secondary research and competitor analysis, along with semi-structured user interviews about how educators develop their skills, and an unmoderated usability test of the website. Our secondary research and user interviews revealed how educators currently try to expand their teaching, along with common barriers that they face, while the usability testing uncovered first impressions, natural behaviour, and desired behaviours when interacting with the site. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        Using the findings from this first phase we began to map our user journey, looked at competitors mentioned in user interviews, and set navigation and comprehension tasks for our next phase of moderated usability tests. Since we noticed a deeper problem than the UI, we also added information architecture testing with multiple rounds of tree testing and card sorting, pivoting to closed card sorts and changing the tree layout to validate potential changes after a few rounds of testing. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        <b>Takeaways/Skills Demonstrated:</b> This phase of the project taught me the power of adaptive research in the face of uncertainty. Since we had limited time, budget, and participants, I had to reprioritize what research would yield the highest value early on, and what research could help set direction to minimize wasted time. 
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
                    <div className="font-medium text-white">Education</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 p-6 rounded-xl border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Optimal Workshop', 'Zoom', 'Google Analytics', 'Wordpress'].map((tool, index) => (
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

export default CaseStudy;