const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare sales report",
        description: "Generate monthly sales report",
        date: "2025-11-20",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Attend morning meeting with team",
        date: "2025-11-19",
        category: "Meeting",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update client records",
        description: "Modify and update client CRM entries",
        date: "2025-11-22",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product testing",
        description: "Test new product features",
        date: "2025-11-17",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskCounts: { active: 0, newTask: 0, completed: 3, failed: 1 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix bugs",
        description: "Resolve frontend bugs assigned last week",
        date: "2025-11-18",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security audit",
        description: "Failed to complete the audit on time",
        date: "2025-11-16",
        category: "Security",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create UI mockups",
        description: "Design mockups for new dashboard",
        date: "2025-11-23",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Research competitors",
        description: "Study competitor features",
        date: "2025-11-19",
        category: "Research",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile and submit the monthly financial report",
        date: "2025-11-20",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client meeting",
        description: "Attend the scheduled meeting with Client XYZ",
        date: "2025-11-18",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Organize documents",
        description: "Sort and organize documentation",
        date: "2025-11-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 6,
    firstName: "Rohit",
    email: "employee6@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design landing page",
        description: "Create a modern landing page layout for new product",
        date: "2025-11-23",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix responsive issues",
        description: "Improve responsiveness for tablet screens",
        date: "2025-11-19",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare wireframes",
        description: "Create initial wireframes for new dashboard",
        date: "2025-11-17",
        category: "Design",
      },
    ],
  },
  {
    id: 7,
    firstName: "Meera",
    email: "employee7@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database cleanup",
        description: "Remove duplicate records and optimize database tables",
        date: "2025-11-21",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team training",
        description: "Conduct training session for new interns",
        date: "2025-11-23",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server migration",
        description: "Failed to complete server migration due to errors",
        date: "2025-11-18",
        category: "IT",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Vikash",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    admin: JSON.parse(localStorage.getItem("admin")) || [],
  };
};
