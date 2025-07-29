import React from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, CheckCircle, Quote, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CaseStudy2Props {
  onBack: () => void;
}

export default function CaseStudy2({ onBack }: CaseStudy2Props) {
  const [expandedTimelineItem, setExpandedTimelineItem] = React.useState<number | null>(null);
  const [isPSExpanded, setIsPSExpanded] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projectDetails = {
    title: "Information Architecture Redesign for Shared Knowledge Systems",
    client: "Institute for Studies in Transdisciplinary Engineering Education and Practice (ISTEP/ILEAD)",
    duration: "16 weeks",
    team: "Solo",
    role: "UX Researcher, Information Architect, Product Designer",
    outcome: "40% reduction in information retrieval time, 100% increase in system adoption"
  };

  const researchMethods = [
    "Stakeholder/User Interviews",
    "Usability Testing Sessions",
    "Card Sorting",
    "Tree Testing",
    "Content Audit",
    "Data Analysis"
  ];

  const keyFindings = [
        {
      title: "Disorganized File Structure",
      description: "The existing Sharepoint had no standard file structure and thousands of files dumped into the main folder. Documents were named and stored however individual users decided in the moment, so navigating the system and locating specific files was very difficult and time-consuming",
      impact: "High"
    },
    {
      title: "File Duplication",
      description: "Files were frequently downloaded, attached, and reuploaded in multiple locations. This led to duplicated documents, mismatched content, and confusion about which version is authoritative and up-to-date",
      impact: "High"
    },
    {
      title: "Difficult Onboarding",
      description: "Users found SharePoint unintuitive and overwhelming, unsure where to start and anxious about the messing things up. They often kept documents on personal drives instead, leading to version control issues, siloed information, and barriers to team-wide visibility",
      impact: "High"
    }
  ];

  const timelineDetails = [
    {
      title: "Week 1: Project Setup & Stakeholder Alignment",
      subtitle: "Stakeholder interviews, project scope definition, problem space research",
      details: [
        "Conducted 3 stakeholder interviews to understand business objectives and business structure",
        "Informal interviews to map team roles, content types, and use cases and set preliminary framework of how content was created, access, and shared between users",
        "Defined research questions, scope, and success metrics to guide the project",
        "Created research plan to align timeline with goals with stakeholders"
      ]
    },
    {
      title: "Week 2-4: User Research & Data Collection",
      subtitle: "User interviews, usability testing, data analytics, contextual inquiry",
      details: [
        "Reviewed analytics for use and structure of existing files",
        "Conducted contextual inquiry of projects and team meetings to see how files are being shared, stored, and saved in practice",
        "10+ in-depth user interviews with users about duties, expectations, practices, and mental models around file storage",
        "10+ moderated usability tests to assess current problems with navigation"
      ]
    },
    {
      title: "Week 5-6: Analysis & Synthesis",
      subtitle: "Data analysis, mental models, persona creation, system mapping",
      details: [
        "Conducted affinity mapping of 100+ insights from user interviews about use cases, expectations, and pain points",
        "Mapped common user journeys and interaction patterns, highlighting key problem areas where the system broke down",
        "Analyzed user mental models to identify misalignment between system structure, user goals, and disconnects with other users' organizational approaches",
        "Developed 3 detailed user personas based on behavioral patterns, user groups, and use cases to differentiate distinct problems faced by each group",
        "Defined core challanges to guide direction for next phase of research and information architecture design"
      ]
    },
    {
      title: "Week 7-9: Additional User Research Rounds",
      subtitle: "Information architecture, card sorts, tree tests, user interviews",
      details: [
        "Developed information architecture framework including revised folder heirarchy and labels based on user logic",
        "Conducted open and closed card sorting to evaluate user mental models around content organization and labelling",
        "Ran tree testing to evaluate clarity and navigability of existing and proposed folder structures",
        "Iterated on proposed tree structure and card groups based on user feedback, repeating testing to validate and refine new structures",
        "Held follow-up interviews to dig deeper into user concerns around initial adoption and onboarding"
      ]
    },
    {
      title: "Week 9-10: Additional Analysis and Synthesis",
      subtitle: "IA framework, policy accaptance criteria, proposals for review",
      details: [
        "Reviewed research findings to solidify common concepts and identify remaining gaps in structure and terminology",
        "Finalized proposal of folder structure and labelling framework",
        "Defined acceptance criteria for the new information architecture and policy, grounded in pain points around new user adoption",
        "Presented research findings, formalized problem areas, proposed IA redesign, and policy framework to stakeholders for feedback and review"
      ]
    },
    {
      title: "Week 11-14: Implementation",
      subtitle: "User handbook, policy, folder restructuring, file labelling, redesigned front page, design handoff",
      details: [
        "Migrated and labelled over 1000 files into the new folder structure, archiving outdated versions and maintaining consistent access controls",
        "Formalized content governance policy to support long-term sustainability of the redesigned system with minimal ongoing effort from individual users",
        "Developed a user handbook covering common tasks for different user groups, aiding adoptions and reducing barrier to entry for new and less tech-confident users",
        "Developed administrative guide for for system maintenance and future updates",
        "Built new front page to streamline navigation, improve visibility into shared resources, and reduce administrative load",
        "Presented full findings, changes, and immediate impact on their workflow to users" 
      ]
    },
    {
      title: "Week 15-16: Post-implementation support",
      subtitle: "Monitoring adoption, refining handbook, collecting feedback, future improvements",
      details: [
        "Monitored system adoption and policy adherence to identify any pain points in learning or usage",
        "Refined user handbook based on feedback, clarifying wording, adding screenshots, and expanding on other tasks",
        "Collected informal user feedback on usage of the new system by speaking with users",
        "Identified and presented potential avenues for future development, scaling, and amendments"
      ]
    }
  ];

  const solutions = [
    {
      title: "Navigation Architecture",
      description: "Redesigned information architecture with clear folder structure and labelling system, ensuring intuitive consistency with how users actually think and work",
      result: "40% faster navigation, 80% fewer failed navigations"
    },
    {
      title: "Data Organization Policy",
      description: "Developed a lightweight, low-maintenance content governance policy to ensure long-term sustainability of redesigned structure without burdening individual users",
      result: "Staff described the framework as intuitive and easy to follow"
    },
    {
      title: "Onboarding & Support Materials",
      description: "Created a comprehensive user handbook and how-to-start guides to streamline onboarding. Documented design rationale and provided clear instructions for future maintainence and upgrades",
      result: "100% user adoption"
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
                Comprehensive Information Architecture overhaul, redesigning folder structure, file labelling practice, and governance policy for knowledge retention and management on Sharepoint. Focused on ease of adoption and intuitive navigation to ensure long-term sustainability with minimal user effort.
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
                  <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">User Adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">+40%</div>
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
            src="https://www.utoronto.ca/sites/default/files/UofT86459_u-of-t-engineering_50091714792_o.jpg" 
            alt="Troost ILEAD Building"
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
                  When the COVID pandemic hit, the Troost Institute for Leadership Education in Engineering (ILEAD, within ISTEP, at UofT) faced mass turnover together with a top-down mandate for centralized filekeeping. Retiring leadership meant nobody to steer the ship, resulting in decades of content being dumped while incoming staff were left sifting through the clutter. The new team couldn't find what they needed, didn't know what was important, and couldn't understand how anything was organized. This resulted in wasted time, difficulty collaborating, and knowledge being lost in the transition. At the same time some of the old staff still hadn't transfered their work to Sharepoint, and had been left behind in the scuffle with no guidance.       
                </p>
                <p className="text-gray-300">
                  I was brought in to overhaul the system's information architecture and untangle the mess, designing a system that works for the people using it rather than one they have to struggle through. This meant restructuring existing files and folders, designing a storage policy, and making the system simple enough to use that it wouldn't default back to clutter. 
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
                "I don't really get Sharepoint, and I don't want to use it because I know I'll mess something up...I don't really see the point [in trying to learn] when everything's already a mess."
              </blockquote>
              <cite className="text-gray-300">— Tenured Professor and Study Participant</cite>
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
                  <div className="text-4xl font-bold text-blue-400 mb-2">-80%</div>
                  <div className="text-gray-300">Fewer Failed Navigations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">+40%</div>
                  <div className="text-gray-300">Faster Navigation Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-300">User Adoption </div>
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
                    Systems that rely on continuous user input must make success effortless. If a system needs continuous success from users to stay functional (like saving files in the right place), even small barriers or ambiguities will compound over time. We must design default behaviours and the path of least resistance to also be the path to long-term sustainability
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    A well-designed system is useless if it fails to onboard new users, and adopting new systems can be daunting for many users. Part of our job is to lower the barrier of entry and make it easy to start, whether that's with support materials, or by designing a space that feels intuitive and aligned with how they already work
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    Collaborative systems requires a shared understanding with insight from all users' mental models to work. Every user brings different asssumptions, priorities, and mental models to a system, and these are never perfectly aligned with others. Part of the research process is uncovering these disconnects and designing structures that bridge the gap, creating a system that everyone can understand and agree on. 
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
                      <h3 className="text-lg font-semibold text-white mb-3">Starting Research in an Ambiguous Space</h3>
                      <p className="text-gray-300 mb-3">
                        I was brought in to ILEAD as on outside contractor specifically for this project to "organize the clutter in the SharePoint"- a vague mandate with few specifics and no clear success criteria. I determined that before I get started with the information architecture, I would need to know more about the organization and how it functions. In a very UX-y fashion, this wasn't about building a theoretically clean product, but rather a structure that needed to adhere to real user behaviours. By building a better picture of who our users were, what they did, and how they collaborated, I could then assess how the Sharepoint was (or wasn't) supporting them. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        In the first round of research I ran semi-structured interviews asking about roles and duties, how and when collaboration happened (or didn't), and their expectations and practices around file storage and sharing. This research helped identify distinct user groups, each with differing needs, assumptions, and expectations around collaboration. It also revealed gaps and overlaps in mental models, highlighting where and how friction occured from misalignment. The results of this phase were foundational for the rest of the project, mapping problem areas and defining success criteria for each group. 
                      </p>
                    <p className="text-gray-300 mb-3">
                      The most interesting discovery from this phase was a consistent attitude of "my own system works for me, and everyone else can figure it out." Users were aware that the Sharepoint was a problem, but had no time to fix it and no ownership stake, so they continued to do whatever was easiest for themselves. This resulted in increasingly chaotic clutter and siloed information, as each users "quick fix" system piled beside everyone else's. From this finding I had my most important insight: the system is a living, breathing organism. Every user continuously contributes to its order or its chaos, unwittingly and passively, just by using it. In order for the new system to survive, it must either change the default behaviour of its users, or be resilient enough survive the chaos. 
                    </p>
                    <p className="text-gray-300 mb-3">
                    <b>Takeaways/Skills Demonstrated:</b> This insight reframed my approach to the problem- rather than designing for an intentional, active task completion, I needed to design for a messy default behaviour. This meant prioritizing low-friction structures where the "right" way to use the system was a natural and immediately intuitive. Conversely, even if a user deviates from the intended behaviour, the system had to be both forgiving and resilient. Small missteps should be absorbed by the system without leaving remnants that could compound into systemic failure, and larger missteps should be restricted entirely. 
                    </p>
                    <p className="text-gray-300 mb-3">
                      In this phase I heavily demonstrated my exploratory research chops, working through multiple distinct user groups with highly varied problems and use cases, to map out a problem space and chart a course for the rest of the project. I also gained insight into the complexity of systems design and change management, learning about the problems that cause systems to fail and what is needed to sustain them. 
                    </p>

                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Systems and Policy Design as UX</h3>
                      <p className="text-gray-300 mb-3">
                        The whole reason we ended up in a chaotic state where this project was needed was because of an unclear, top-down mandate from upper management. With no leadership and no direction, users didn't know when or how to use Sharepoint, or why it might even be useful for them. With no policy or defined structure users had no idea what to do, simultaneously defaulting to personal habits while being painfully aware that the system wasn't working. 
                      </p>                      
                      <p className="text-gray-300 mb-3">
                        I knew from the first round of research that the architecture would need to be designed to be intuitively correct- that the default behaviour would be the correct one that sustains the system. To aid with information architecture design I thought about policy. For a system like this, policy isn't just rules from management, but is about the way users "should" use the system- how users should behave. In other words, policy acts as a blueprint of the intended user journey. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        Using this framing for policy design helped me think about the gaps in the architecture, and the nudges, restrictions, and patterns needed to ensure the desired behaviour. In a way, the policy was like behavioural scaffolding needed to guide the construction of the structure. In an ideal world a perfect system would be so intuitive that users would always do the right thing, but in the real world policy is required to handle edge cases, explain shared norms, and provide a tangible explanation for why the system needs to be a certain way. Policy can also be used as a design document, outlining the structure of the system for change if parts of the system aren't working, or user needs have changed. 
                      </p>
                      <p className="text-gray-300 mb-1">
                        With all of these things in mind, This led me to design policies that:
                      </p>
                      <p className="text-gray-300 mb-1">
                       • Give people clarity and confidence about correct operation of the system,
                      </p>
                      <p className="text-gray-300 mb-1">
                       • Are intuitive and purposeful, so employees know why the policy exists and want to engage with it because they know how it supports them,
                      </p>
                      <p className="text-gray-300 mb-1">
                       • Have low friction, being easy to follow with minimal effort,
                      </p>
                      <p className="text-gray-300 mb-3">
                       • Can be flexible and forgiving, allowing for user discretion for edge cases, and absorbing deviation without breaking
                      </p>
                      <p className="text-gray-300 mb-3">                     
                        <b>Takeaways/Skills Demonstrated:</b> This is probably the most complex thing I've designed to date. While I've done journey design in the past, I had previously been designing for simpler systems and task completion. This was my first time designing for larger scale system sustainability in an ecosystem for diverse users with competing needs. All of this meant a very tight design, and a lot of back and forth redesigning to trim and balance anything that may cause the users to fail, or the system to collapse. 
                      </p>
                      <p className="text-gray-300">
                        PPS: Funnily, if you've read my "about me" you'll know that this is the exact same thought I had about economic policy that set me down the path of behavioural economics, and eventually to here. Policy fails when it assumes people are perfect, and good policy must account for users being human.
                      </p>
                    </div>
                    <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Designing for Competing User Needs</h3>
                      <p className="text-gray-300 mb-1">
                        During my initial research into the problem space and organization I quickly realized that the different user groups who were using the system had drastically different workflows, expectations, and needs. I conducted foundational interviews and usability tests along with contextual inquiry (shadowing in meetings + looking at past communications) to get a practical and realistic look at current practices with each group. This unearthed all the ways that users were currently working around the system: 
                      </p> 
                      <p className="text-gray-300 mb-1">
                        • <b>Professors</b> were storing files in personal drives, avoiding bureaucracy (while also having difficulty adopting new systems),
                      </p>
                      <p className="text-gray-300 mb-1">
                        • <b>Students</b> were asking secondary sources for info rather than interfacing with the system,
                      </p>
                      <p className="text-gray-300 mb-1">
                        • <b>Core Staff</b> were duplicating and emailing documents to bypass broken permissions.
                      </p>
                    <p className="text-gray-300 mb-3">
                      All of this was happening while admin wanted to tighten policy and file controls for better reporting and data retention. While users aligned on a few easy wins like the need for improved top-level folder structure and standardized name/date conventions, two critical conflicts emerged. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        Firstly, core staff needed instant collaboration with external users for events and partnerships, while admin demanded airtight security with fear of data leaks. Without a quick way to give external users access, staff were forced into risky workarounds like emailing documents or using other file sharing services. This meant hiccups in external collaboration, duplication of files, or failure to retain most recent versions of external-facing documents. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        In order to balance these needs I worked with both the staff and management to find a compromise. I introduced new roles for guests with siloed permissions, allowing core staff to assign guest roles and view/edit permissions at their discretion through a metadata tagging system. Ultimately management agreed that immediate access and data retention were more important than a complete closed garden system, whereas core staff were doing about the same amount of work by assigning roles and labels, while getting instant collaboration and improved version control. This metadata tagging also gave management better transparency on which documents are shared externally, and improved overall searchability for files.
                      </p>
                      <p className="text-gray-300 mb-3">
                        The second big conflict was between professors and management. Professors were resistant to adopting formalized systems, preferring to rely on personal storage out of habit and convenience. They were worried that strict controls would slow their research process, and that formal structures wouldn't fit the variable nature of research projects. Meanwhile, management wanted strict structure and metadata tagging for file retention, navigability, and long-term knowledge archiving.  
                      </p>
                      <p className="text-gray-300 mb-3">
                        The solution to this problem was twofold- one part system design and one part framing- with a little compromise from each group. Professors were assigned their own area for academic projects, with a very basic folder structure for new projects (data, working space, papers, etc), and were given free reign over the structure of their "working space." For professors the broad folder categories meant minimal friction added to their workflow and still having full ownership of their own space. I also developed a handbook for professors that detailed how to start, control mechanisms, and common tasks to alleviate their concerns about transitioning to Sharepoint, and further reinforce their sense of control. 
                      </p>
                      <p className="text-gray-300 mb-3">
                        For management this meant prioritizing long-term sustainability and buy-in. While they relaxed some goals about granular control, they gained consistent participation and better visibility into active research projects, all without hindering the pace of research for faculty. 
                      </p>
                      <p className="text-gray-300 mb-3">                     
                        <b>Takeaways/Skills Demonstrated:</b> This project demonstrated some core UX research/design skills like user segmentation, mixed methods research, problem identification, and systems design. More interestingly, it became an unusual exercise in stakeholder management and representing users within organizational constraints. Rather than designing a path or product, I was designing a system that users would have to concurrently use and maintain. Rather than simple task completion, I was balancing user needs, workflows, and management oversight. Users weren't distant customers, but co-workers. They collaborated directly with management, and their work shaped the system day-to-day. My job wasn't just to represent users, but to facilitate a two-way dialogue about workflows, needs, and policy. Ultimately this meant brokering a shared understanding and organizational alignment about what the system should do, and making compromises that resulted in a larger-scale systemic benefit for everyone involved. 
                      </p>
                      <p className="text-gray-300 mb-3">  
                        PPS Again: For you economics fans, there are no externalities- everyone is a part of the system for good and bad, and that means maximizing utility rather than maximizing profit, which is a designers dream :) 
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
                    <div className="font-medium text-white">Leadership Education</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 p-6 rounded-xl border border-gray-700">
                <h3 className="font-semibold text-white mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['Optimal Workshop', 'Sharepoint', 'Microsoft Excel', 'Tableau', 'Notion', 'Google Sheets'].map((tool, index) => (
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
}