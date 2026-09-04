// Each program gets its own tailored application form — different questions,
// different support options, matched to what that stage actually needs to know.

export const formConfigs = {
  'idea-validation': {
    sections: [
      {
        title: 'Your Details',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
          { name: 'startupName', label: 'Startup Name', type: 'text' },
          { name: 'currentStage', label: 'Current Stage', type: 'programSelect', full: true },
        ],
      },
      {
        title: 'Your Idea',
        fields: [
          { name: 'idea', label: 'What is your startup idea?', type: 'textarea' },
          { name: 'problem', label: 'What problem are you solving?', type: 'textarea' },
          { name: 'customers', label: 'Who are your target customers?', type: 'textarea' },
          { name: 'unique', label: 'What makes your idea unique?', type: 'textarea' },
        ],
      },
      {
        title: 'Traction',
        fields: [
          { name: 'talkedToCustomers', label: 'Have you talked to customers?', type: 'radio' },
          { name: 'hasMvp', label: 'Do you have an MVP?', type: 'radio' },
        ],
      },
      {
        title: 'Support Needed',
        fields: [
          {
            name: 'support',
            type: 'checkboxGroup',
            options: ['Idea Validation', 'Market Research', 'Business Model', 'Mentorship'],
          },
        ],
      },
    ],
  },

  'pre-incubation': {
    sections: [
      {
        title: 'Your Details',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
          { name: 'startupName', label: 'Startup Name', type: 'text', required: true },
          { name: 'industry', label: 'Industry', type: 'text', required: true },
          { name: 'currentStage', label: 'Current Stage', type: 'programSelect', full: true },
        ],
      },
      {
        title: 'Your Startup',
        fields: [
          { name: 'idea', label: 'Describe your startup', type: 'textarea' },
          { name: 'problem', label: 'Problem you are solving', type: 'textarea' },
          { name: 'customers', label: 'Target Customers', type: 'textarea' },
        ],
      },
      {
        title: 'Readiness',
        fields: [
          { name: 'validatedIdea', label: 'Have you validated your idea?', type: 'radio' },
          { name: 'hasPrototype', label: 'Do you have a prototype?', type: 'radio' },
          { name: 'hasTeam', label: 'Do you have a team?', type: 'radio' },
        ],
      },
      {
        title: 'Support Required',
        fields: [
          {
            name: 'support',
            type: 'checkboxGroup',
            options: ['Product Planning', 'Prototype Development', 'Business Registration', 'Pitch Preparation', 'Mentorship'],
          },
        ],
      },
      {
        title: 'Materials',
        fields: [
          { name: 'pitchDeck', label: 'Upload Pitch Deck (Optional)', type: 'file' },
        ],
      },
    ],
  },

  incubation: {
    sections: [
      {
        title: 'Your Details',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
          { name: 'startupName', label: 'Startup Name', type: 'text', required: true },
          { name: 'industry', label: 'Industry', type: 'text', required: true },
          { name: 'currentStage', label: 'Current Stage', type: 'programSelect', full: true },
        ],
      },
      {
        title: 'Your Startup',
        fields: [
          { name: 'idea', label: 'Describe your startup', type: 'textarea' },
          { name: 'product', label: 'Current Product / MVP', type: 'textarea' },
          { name: 'customers', label: 'Target Customers', type: 'textarea' },
        ],
      },
      {
        title: 'Traction',
        fields: [
          { name: 'hasMvp', label: 'Do you have an MVP?', type: 'radio' },
          { name: 'payingCustomers', label: 'Do you have paying customers?', type: 'radio' },
          { name: 'monthlyRevenue', label: 'Monthly Revenue', type: 'text' },
          { name: 'teamSize', label: 'Team Size', type: 'text' },
        ],
      },
      {
        title: 'Support Required',
        fields: [
          {
            name: 'support',
            type: 'checkboxGroup',
            options: ['Technical Support', 'Product Development', 'Business Development', 'Marketing', 'Legal Support', 'Financial Planning', 'Mentorship'],
          },
        ],
      },
      {
        title: 'Materials',
        fields: [
          { name: 'pitchDeck', label: 'Pitch Deck Upload', type: 'file' },
          { name: 'demoUrl', label: 'Product Demo / Website URL', type: 'text' },
        ],
      },
    ],
  },

  acceleration: {
    sections: [
      {
        title: 'Your Details',
        fields: [
          { name: 'fullName', label: 'Full Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
          { name: 'startupName', label: 'Startup Name', type: 'text', required: true },
          { name: 'industry', label: 'Industry', type: 'text', required: true },
          { name: 'currentStage', label: 'Current Stage', type: 'programSelect', full: true },
        ],
      },
      {
        title: 'Your Startup',
        fields: [
          { name: 'idea', label: 'Describe your startup', type: 'textarea' },
          { name: 'product', label: 'Current Product / Service', type: 'textarea' },
          { name: 'targetMarket', label: 'Target Market', type: 'textarea' },
        ],
      },
      {
        title: 'Traction',
        fields: [
          { name: 'payingCustomers', label: 'Do you have paying customers?', type: 'radio' },
          { name: 'monthlyRevenue', label: 'Monthly Revenue', type: 'text' },
          { name: 'teamSize', label: 'Team Size', type: 'text' },
          { name: 'raisedFunding', label: 'Have you raised funding?', type: 'radio' },
        ],
      },
      {
        title: 'Support Required',
        fields: [
          {
            name: 'support',
            type: 'checkboxGroup',
            options: ['Fundraising Support', 'Investor Readiness', 'Sales Strategy', 'Global Market Expansion', 'Customer Growth', 'Team Building'],
          },
        ],
      },
      {
        title: 'Materials',
        fields: [
          { name: 'pitchDeck', label: 'Upload Pitch Deck', type: 'file' },
          { name: 'financialSummary', label: 'Financial Summary (Optional)', type: 'file' },
          { name: 'demoUrl', label: 'Website / Product Demo URL', type: 'text' },
        ],
      },
    ],
  },
};
