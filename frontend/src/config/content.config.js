// Content sourced & adapted from the Startup Incubator Workflow brief.
import { images } from '../assets/media';

export const brand = {
  name: 'Lokha Innovation',
  tagline: 'Build, Launch, Scale — Globally.',
};

export const programs = [
  {
    id: 'idea-validation',
    n: '01',
    name: 'Idea Validation',
    short: 'For a hunch, not yet a company.',
    stage: 'Stage 0 · Pre-idea to validated concept',
    description:
      'We help founders pressure-test a business idea before a single line of code is written — through market research, customer discovery, and business model design.',
    includes: [
      'Idea Evaluation',
      'Business Model Canvas',
      'Customer Validation',
      'Market Research',
      'Product Strategy',
    ],
    events: [
      { name: 'Idea Clinic', cadence: 'Weekly', detail: '45-minute working sessions where founders stress-test assumptions with a mentor.' },
      { name: 'Customer Discovery Sprint', cadence: 'Monthly', detail: 'A 5-day guided sprint to run 20+ customer interviews and synthesize findings.' },
      { name: 'Business Model Jam', cadence: 'Bi-weekly', detail: 'Group workshop building and critiquing Business Model Canvases live.' },
    ],
  },
  {
    id: 'pre-incubation',
    n: '02',
    name: 'Pre-Incubation',
    short: 'You have the idea — not yet the MVP.',
    stage: 'Stage 1 · Validated idea to first build',
    description:
      'Designed for entrepreneurs with a validated idea but no MVP. We cover the fundamentals of company-building, from planning to pitch.',
    includes: [
      'Startup Fundamentals',
      'Product Planning',
      'Business Registration Guidance',
      'Prototype Planning',
      'Pitch Preparation',
    ],
    events: [
      { name: 'Founders Fundamentals', cadence: 'Cohort intake', detail: 'A structured curriculum covering legal, product, and go-to-market basics.' },
      { name: 'Prototype Lab', cadence: 'Ongoing', detail: 'Hands-on studio hours to plan and scope your first prototype.' },
      { name: 'Pitch Prep Workshop', cadence: 'Monthly', detail: 'Build and rehearse your first investor-ready narrative.' },
    ],
  },
  {
    id: 'incubation',
    n: '03',
    name: 'Incubation',
    short: 'You shipped an MVP — now build the company.',
    stage: 'Stage 2 · Early product to early traction',
    description:
      'Full incubation support for startups with an MVP or early product: dedicated mentorship, workspace, technical, legal, financial and marketing support.',
    includes: [
      'Dedicated Mentorship',
      'Office Space',
      'Technical Support',
      'Product Development',
      'Business Development',
      'Legal Assistance',
      'Financial Planning',
      'Marketing Strategy',
    ],
    events: [
      { name: 'Build Weeks', cadence: 'Quarterly', detail: 'Focused sprints with embedded technical mentors to ship product milestones.' },
      { name: 'Founder Office Hours', cadence: 'Weekly', detail: '1:1 sessions across legal, finance and go-to-market with domain mentors.' },
      { name: 'Demo Friday', cadence: 'Monthly', detail: 'Internal showcase of what each cohort startup shipped that month.' },
    ],
  },
  {
    id: 'acceleration',
    n: '04',
    name: 'Acceleration',
    short: 'You have traction — now scale globally.',
    stage: 'Stage 3 · Early traction to scale',
    description:
      'Designed for startups ready to scale: fundraising support, investor readiness, sales strategy, global market expansion and team building.',
    includes: [
      'Fundraising Support',
      'Investor Readiness',
      'Sales Strategy',
      'Global Market Expansion',
      'Customer Growth',
      'Team Building',
    ],
    events: [
      { name: 'Demo Day', cadence: 'Twice a year', detail: 'Cohort startups pitch to a curated room of angels, VCs and corporate investors.' },
      { name: 'Investor Readiness Bootcamp', cadence: '2-week intensive', detail: 'Data room, term sheets, cap table and diligence preparation.' },
      { name: 'Global Expansion Clinic', cadence: 'Quarterly', detail: 'Market-entry playbooks for founders expanding beyond their home market.' },
    ],
  },
];

export const services = [
  {
    name: 'Startup Mentorship',
    tag: 'Guidance',
    description: 'One-on-one guidance from experienced entrepreneurs and industry experts, matched to your stage and sector.',
  },
  {
    name: 'Business Development',
    tag: 'Growth',
    description: 'Support in developing sustainable business models, pricing, and growth strategies that hold up under scale.',
  },
  {
    name: 'Product Development',
    tag: 'Build',
    description: 'Technical assistance for web, mobile, AI, SaaS, and cloud applications — from architecture to shipping.',
    sub: ['Technology Consulting', 'AI Solutions', 'Cloud Architecture', 'Cybersecurity', 'DevOps', 'Software Development'],
  },
  {
    name: 'Legal Support',
    tag: 'Protect',
    description: 'Everything from incorporation to IP protection, handled by counsel who understand startups.',
    sub: ['Company Registration', 'Intellectual Property', 'Trademark Guidance', 'Compliance'],
  },
  {
    name: 'Financial Support',
    tag: 'Capital',
    description: 'Financial modelling, grant assistance and warm introductions to the right investors at the right time.',
    sub: ['Financial Planning', 'Grant Assistance', 'Investor Connections', 'Fundraising Strategy'],
  },
  {
    name: 'Marketing Support',
    tag: 'Reach',
    description: 'Brand, demand and growth marketing built for founders who need results before they need a full team.',
    sub: ['Branding', 'Digital Marketing', 'SEO', 'Social Media', 'Growth Marketing'],
  },
];

export const ecosystemStats = [
  { icon: 'startups', value: '500+', label: 'Startups Supported' },
  { icon: 'mentors', value: '200+', label: 'Mentors & Experts' },
  { icon: 'investors', value: '150+', label: 'Investor Partners' },
  { icon: 'countries', value: '30+', label: 'Countries Reached' },
  { icon: 'funds', value: '$50M+', label: 'Funds Raised' },
];

export const resources = {
  learningHub: ['Startup Guides', 'Business Templates', 'Business Model Canvas', 'Pitch Deck Templates', 'Financial Templates', 'Founder Handbook'],
  knowledgeCenter: ['Blogs', 'Articles', 'Videos', 'Podcasts', 'Webinars', 'Research Papers'],
};

export const mentors = [
  {
    name: 'Lokesh Kammara',
    role: 'CEO',
    expertise: 'Go-to-Market, Business Operations',
    experience: '7+ years',
    startupExperience: 'Co-founder, TechWave Academy',
    img: 'Lokesh_Kammara.jpeg',
    linkedin: 'https://linkedin.com/in/lokeshkammara/',
  },
  {
    name: 'Nagaraju Balija',
    role: 'Tech Lead — LIE Services',
    expertise: 'Product Strategy, Full-Stack Engineering',
    experience: '8+ years',
    startupExperience: 'Founder, LailaGo Platform',
    img: 'Nagaraju_Balija.jpeg',
    linkedin: 'https://www.linkedin.com/in/nagaraju-balija-0113b62a5',
  },
  {
    name: 'Syed Mukheeth',
    role: 'Tech Lead — Website Development',
    expertise: 'Financial Planning, Investor Relations',
    experience: '10+ years',
    startupExperience: 'Ex-Analyst, Venture Capital',
    img: 'Syed_Ali.png',
    linkedin: 'https://www.linkedin.com/in/syedmukheeth',
  },
  {
    name: 'Saad Khazi Ahmed',
    role: 'Tech Lead — SpaceOut (Parking)',
    expertise: 'AI Solutions, Cloud Architecture',
    experience: '6+ years',
    startupExperience: 'Founding Engineer, two exits',
    img: 'Saad_Khazi_Ahmed.jpeg',
    linkedin: 'https://www.linkedin.com/in/saadahmed05',
  },
];

export const directors = [
  {
    name: 'Savithri Kammara',
    role: 'Director, LIE Services',
    linkedin: 'https://www.linkedin.com/in/savithrikammari-msc',
    img: 'Savithri_Kammari',
    quote: 'At Lokha Innovation, we are building a startup incubator that empowers founders with the right guidance, connections, and opportunities to turn ideas into impactful ventures.',
  },
  {
    name: 'Jyothi Kammara',
    role: 'Director, LIE Services',
    linkedin: 'https://www.linkedin.com/in/umamaheswari-kammara-39a00065',
    img: 'Umamaheswari_Kammara',
    quote: 'Lokha Innovation is committed to nurturing bold ideas, connecting ambitious founders with the right ecosystem, and creating pathways for startups to build, grow, and make a lasting impact.',
  },
];

export const investorTypes = [
  { name: 'Angel Investors', description: 'Individual, early-stage backers who invest capital and personal experience at idea and pre-incubation stage.', image: images.investorsAngel },
  { name: 'Venture Capital Firms', description: 'Institutional partners for startups with traction, ready to lead priced rounds from seed to Series A and beyond.', image: images.investorsVenture },
  { name: 'Corporate Investors', description: 'Strategic capital from corporates seeking innovation partnerships, pilots, and acquisition pathways.', image: images.investorsCorporate },
  { name: 'Government Funding Programs', description: 'Non-dilutive grants and matching-fund schemes for eligible early-stage and deep-tech startups.', image: images.investorsGovernment },
];

export const startupDirectory = [
  { name: 'LailaGo', industry: 'Logistics · SaaS', funding: 'Seed', description: 'A route-optimization platform for last-mile delivery fleets across South Asia.', founder: 'Nagaraju Balija' },
  { name: 'FinLeaf', industry: 'Fintech', funding: 'Pre-Seed', description: 'Micro-savings and financial literacy app for gig-economy workers.', founder: 'Syed Ali' },
  { name: 'CloudNest AI', industry: 'Artificial Intelligence', funding: 'Series A', description: 'Vertical AI copilots for property management teams.', founder: 'Saad Khazi Ahmed' },
  { name: 'GrowthLoop', industry: 'MarTech', funding: 'Seed', description: 'Growth-marketing automation for D2C brands entering new geographies.', founder: 'Lokesh Kammara' },
];

export const events = [
  {
    slug: 'founders-fundamentals-bootcamp',
    name: 'Founders Fundamentals Bootcamp',
    type: 'Bootcamp',
    program: 'Pre-Incubation',
    date: 'Aug 2026',
    description: 'A five-day intensive covering the fundamentals every first-time founder needs before building.',
    image: images.bg11,
    duration: '5 Days',
    about: [
      'The Founders Fundamentals Bootcamp is a five-day immersive program designed to help aspiring founders validate their ideas, understand their customers, build a solid business model, and prepare for the next stage of their startup journey.',
      'Through practical sessions, real-world frameworks, and mentor guidance, you\'ll build the right foundation before you build anything else.',
    ],
    learn: [
      { icon: 'search', label: 'Problem & Opportunity Discovery' },
      { icon: 'users', label: 'Customer Validation' },
      { icon: 'sitemap', label: 'Business Model Fundamentals' },
      { icon: 'rocket', label: 'MVP Planning' },
      { icon: 'trendingUp', label: 'Go-to-Market Basics' },
      { icon: 'presentation', label: 'Pitch & Storytelling' },
    ],
    journey: [
      { day: 'Day 01', title: 'Discover', icon: 'lightbulb', image: images.bg7, description: 'Identify the right problem and understand your target customer.' },
      { day: 'Day 02', title: 'Validate', icon: 'search', image: images.bg12, description: 'Test your assumptions and validate your idea with real customers.' },
      { day: 'Day 03', title: 'Build', icon: 'cube', image: images.bg3, description: 'Define your MVP and build a strong business model.' },
      { day: 'Day 04', title: 'Grow', icon: 'trendingUp', image: images.bg6, description: 'Learn go-to-market strategies and early growth fundamentals.' },
      { day: 'Day 05', title: 'Pitch', icon: 'presentation', image: images.bg9, description: 'Craft your pitch and present your startup with confidence.' },
    ],
    whoShouldAttend: [
      'Aspiring founders with a startup idea',
      'Students and early-stage entrepreneurs',
      'First-time founders building their first startup',
      'Anyone preparing to enter an incubator',
    ],
    takeaways: [
      'A validated problem and customer understanding',
      'A clear business model and MVP direction',
      'Go-to-market strategy for your startup',
      'A strong pitch and next steps to move forward',
    ],
    ctaLabel: 'Apply for the Bootcamp',
  },
  {
    slug: 'ai-build-week',
    name: 'AI Build Week',
    type: 'Hackathon',
    program: 'Incubation',
    date: 'Sep 2026',
    description: 'Cohort startups ship an AI feature end-to-end with embedded technical mentors.',
    image: images.bg2,
    duration: '5 Days',
    about: [
      'AI Build Week is a five-day sprint where Incubation-stage teams ship a real, working AI feature — from first prototype to a demo-ready build — with technical mentors embedded in every team for the full week.',
      'You\'ll leave with a shipped feature, a clear integration playbook, and direct feedback from engineers who\'ve built production AI systems.',
    ],
    learn: [
      { icon: 'lightbulb', label: 'Use-Case Framing' },
      { icon: 'sitemap', label: 'Model & Tooling Selection' },
      { icon: 'cube', label: 'Rapid Prototyping' },
      { icon: 'checkCircle', label: 'Testing & Evaluation' },
      { icon: 'rocket', label: 'Shipping to Production' },
      { icon: 'presentation', label: 'Demo Prep' },
    ],
    whoShouldAttend: [
      'Incubation-cohort startups with a product in market',
      'Technical co-founders and product engineers',
      'Teams looking to ship an AI feature quickly',
    ],
    takeaways: [
      'A shipped, working AI feature',
      'Direct feedback from embedded technical mentors',
      'A reusable integration playbook',
      'A demo-ready build for your next milestone',
    ],
    ctaLabel: 'Apply for AI Build Week',
  },
  {
    slug: 'demo-day-cohort-9',
    name: 'Demo Day — Cohort 9',
    type: 'Demo Day',
    program: 'Acceleration',
    date: 'Oct 2026',
    description: 'Nine startups pitch to a curated room of angels, VCs and corporate partners.',
    image: images.bg4,
    duration: '1 Day',
    about: [
      'Demo Day is the culmination of Cohort 9\'s acceleration program — nine startups take the stage to pitch to a curated room of angel investors, VC firms, and corporate partners actively looking to invest.',
      'Each founder gets a tight pitch slot followed by investor Q&A, with warm introductions facilitated after the session.',
    ],
    learn: [
      { icon: 'presentation', label: 'Pitch Delivery' },
      { icon: 'users', label: 'Investor Q&A' },
      { icon: 'sitemap', label: 'Data Room Readiness' },
      { icon: 'trendingUp', label: 'Closing the Room' },
    ],
    whoShouldAttend: [
      'Cohort 9 founders presenting on stage',
      'Invited angel investors, VCs and corporate partners',
      'Alumni founders and ecosystem partners',
    ],
    takeaways: [
      'A pitch delivered to a curated investor room',
      'Direct investor introductions post-event',
      'Feedback to sharpen your fundraising narrative',
    ],
    ctaLabel: 'Request an Invite',
  },
  {
    slug: 'investor-meetup-fintech-focus',
    name: 'Investor Meetup: Fintech Focus',
    type: 'Investor Meetup',
    program: 'Acceleration',
    date: 'Nov 2026',
    description: 'Closed-door roundtable connecting fintech founders with sector-focused investors.',
    image: images.investorsHero,
    duration: 'Half Day',
    about: [
      'A closed-door roundtable bringing together fintech founders from our Acceleration cohort with investors who focus specifically on financial technology — payments, lending, insurtech, and infrastructure.',
      'Expect small-group conversations over a formal pitch format, designed for real dialogue rather than a stage performance.',
    ],
    learn: [
      { icon: 'users', label: 'Sector-Focused Networking' },
      { icon: 'sitemap', label: 'Fintech Market Landscape' },
      { icon: 'trendingUp', label: 'Fundraising Positioning' },
    ],
    whoShouldAttend: [
      'Fintech founders in the Acceleration program',
      'Sector-focused angel investors and VCs',
      'Corporate innovation teams in financial services',
    ],
    takeaways: [
      'Direct conversations with fintech-focused investors',
      'A sharper read on current investor priorities',
      'Warm introductions for follow-up conversations',
    ],
    ctaLabel: 'Request an Invite',
  },
  {
    slug: 'customer-discovery-sprint',
    name: 'Customer Discovery Sprint',
    type: 'Workshop',
    program: 'Idea Validation',
    date: 'Monthly',
    description: 'A guided sprint to run structured customer interviews and synthesize findings.',
    image: images.bg9,
    duration: '3 Days',
    about: [
      'The Customer Discovery Sprint is a hands-on workshop that walks early-stage founders through running structured customer interviews, spotting patterns, and turning raw conversations into a clear set of validated insights.',
      'Runs monthly for founders at the Idea Validation stage — come with a hypothesis, leave with evidence.',
    ],
    learn: [
      { icon: 'search', label: 'Interview Design' },
      { icon: 'users', label: 'Running Discovery Conversations' },
      { icon: 'sitemap', label: 'Synthesizing Findings' },
      { icon: 'target', label: 'Validating Your Hypothesis' },
    ],
    whoShouldAttend: [
      'Founders at the Idea Validation stage',
      'Teams testing a new problem hypothesis',
      'Anyone who has not yet spoken to real customers',
    ],
    takeaways: [
      'A structured customer interview guide',
      'A synthesized set of validated insights',
      'Clarity on whether — and how — to move forward',
    ],
    ctaLabel: 'Join the Next Sprint',
  },
  {
    slug: 'global-expansion-clinic',
    name: 'Global Expansion Clinic',
    type: 'Webinar',
    program: 'Acceleration',
    date: 'Quarterly',
    description: 'Market-entry playbooks for founders expanding beyond their home market.',
    image: images.bg5,
    duration: '2 Hours',
    about: [
      'A quarterly webinar clinic for Acceleration-stage founders planning a move into a new market — covering legal setup, localization, go-to-market sequencing, and the common mistakes that slow first-time expansion.',
      'Includes a live Q&A with founders and advisors who have expanded internationally.',
    ],
    learn: [
      { icon: 'sitemap', label: 'Market-Entry Frameworks' },
      { icon: 'checkCircle', label: 'Legal & Regulatory Basics' },
      { icon: 'trendingUp', label: 'Go-to-Market Sequencing' },
      { icon: 'users', label: 'Localization & Hiring' },
    ],
    whoShouldAttend: [
      'Acceleration-stage founders planning expansion',
      'Teams evaluating a second or third market',
      'Operators leading international go-to-market',
    ],
    takeaways: [
      'A market-entry framework you can apply directly',
      'Awareness of common expansion pitfalls',
      'Access to the recording and clinic playbook',
    ],
    ctaLabel: 'Register for the Clinic',
  },
];

export const successStories = [
  {
    name: 'LailaGo',
    headline: 'From whiteboard sketch to Series-ready platform in 14 months.',
    fundingRaised: '$1.2M raised',
    awards: 'Techstars-style Demo Day — Audience Choice',
    customerGrowth: '0 → 40,000 monthly active riders',
    testimonial: 'The incubator gave us the technical mentorship and investor access we could not have found on our own.',
    person: 'Nagaraju Balija, Founder',
  },
  {
    name: 'CloudNest AI',
    headline: 'A two-person team that became a 14-person Series A company.',
    fundingRaised: '$3.4M raised',
    awards: 'Featured, Regional Startup Awards',
    customerGrowth: '12 → 180 paying customers',
    testimonial: 'Legal and financial support let us focus entirely on product for the first year.',
    person: 'Saad Khazi Ahmed, Founder',
  },
];

export const faqs = [
  { q: 'Who can apply?', a: 'Founders, aspiring entrepreneurs, students, researchers, and early-stage startup teams can apply based on the program requirements.' },
  { q: 'What is the selection process?', a: 'Applications are reviewed based on the startup idea, problem being solved, market potential, team capabilities, and overall fit with the program.' },
  { q: 'What support does Lokha Innovation provide?', a: 'We support startups through mentorship, business guidance, industry connections, networking opportunities, startup resources, and access to the wider innovation ecosystem.' },
  { q: 'Is funding provided?', a: 'Funding opportunities may be available through selected programs, investor connections, or ecosystem partners. Funding is not guaranteed and depends on eligibility, startup potential, and investor interest.' },
  { q: 'How long is the incubation program?', a: 'Program duration varies depending on the type of incubation or support program. Details will be shared with selected participants.' },
  { q: 'Is there any application fee?', a: 'Application fees depend on the specific program. Any applicable fee will be clearly communicated before you apply.' },
  { q: 'Can international startups apply?', a: 'Yes, international founders and startups may apply to eligible programs, subject to program requirements and applicable regulations.' },
  { q: 'How can I get started?', a: 'Submit your application through our website with your startup or business details. Our team will review your information and guide you through the next steps.' },
];

export const blogPosts = [
  { title: 'What Investors Look for in Early-Stage Startups', category: 'Funding & Investment', excerpt: 'Understand the key factors investors consider when evaluating a startup, from market opportunity and traction to the strength of the founding team.', image: 'blogFunding', dayOffset: -6 },
  { title: 'How AI Is Changing the Way Startups Build', category: 'Artificial Intelligence', excerpt: 'Explore how early-stage founders are using AI tools to develop products faster, improve operations, and create better customer experiences.', image: 'blogAi', dayOffset: -3 },
  { title: 'From Idea to Market: Building a Startup That Scales', category: 'Business Growth', excerpt: 'Practical insights for founders on validating an idea, finding product-market fit, building a strong team, and preparing for sustainable growth.', image: 'blogGrowth', dayOffset: -1 },
  { title: 'Inside the Founder Journey: From Vision to Venture', category: 'Founder Stories', excerpt: 'Real experiences, challenges, lessons, and milestones from entrepreneurs building their businesses through the startup ecosystem.', image: 'blogFounder', dayOffset: 0 },
  { title: 'Why the Right Startup Community Matters', category: 'Startup Ecosystem', excerpt: 'Discover how mentors, founders, investors, industry experts, and ecosystem partners can help startups move forward with confidence.', image: 'blogEcosystem', dayOffset: 5 },
  { title: 'Building Smarter Products with Emerging Technology', category: 'Technology & Innovation', excerpt: 'Explore new technologies and practical approaches that help startups solve real problems and build products for a changing market.', image: 'blogTech', dayOffset: 9 },
];

export const quickLinks = ['Programs', 'Services', 'Mentors', 'Investors', 'Events', 'Blog'];

export const footerInfo = {
  email: 'hello@lokhainnovation.com',
  phone: '+91 98765 43210',
  address: 'D.No. 76/97, L. Venkaiah Nagar, Ballari Road, Kurnool, Andhra Pradesh – 518004',
};
