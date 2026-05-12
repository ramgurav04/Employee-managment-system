const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        id: 1,
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern homepage design with responsive layout",
        taskDate: "2024-05-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 2,
        taskTitle: "Fix Navigation Bug",
        taskDescription: "Resolve mobile menu navigation issue",
        taskDate: "2024-05-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 3,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with client",
        taskDate: "2024-05-20",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "vivaan@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        id: 1,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly backup of the production database",
        taskDate: "2024-05-12",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 2,
        taskTitle: "API Integration",
        taskDescription: "Connect payment gateway API to checkout page",
        taskDate: "2024-05-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        taskTitle: "Security Patch",
        taskDescription: "Apply latest security updates to the server",
        taskDate: "2024-05-11",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        id: 4,
        taskTitle: "UI Review",
        taskDescription: "Audit the new dashboard for accessibility",
        taskDate: "2024-05-22",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },

  {
    id: 3,
    firstName: "Ishaan",
    email: "ishaan@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        id: 1,
        taskTitle: "Content Writing",
        taskDescription: "Draft three blog posts regarding AI trends",
        taskDate: "2024-05-09",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 2,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize landing page keywords",
        taskDate: "2024-05-14",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        taskTitle: "Social Media Ads",
        taskDescription: "Set up Facebook ad campaign",
        taskDate: "2024-05-10",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        id: 4,
        taskTitle: "Bug Hunting",
        taskDescription: "Test the beta release for crashes",
        taskDate: "2024-05-25",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 5,
        taskTitle: "Team Briefing",
        taskDescription: "Internal meeting for project milestones",
        taskDate: "2024-05-26",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },

  {
    id: 4,
    firstName: "Ananya",
    email: "ananya@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        id: 1,
        taskTitle: "User Interviews",
        taskDescription: "Conduct feedback sessions with 5 users",
        taskDate: "2024-05-13",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 2,
        taskTitle: "Wireframe Updates",
        taskDescription: "Refine wireframes based on user feedback",
        taskDate: "2024-05-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        taskTitle: "Internal Audit",
        taskDescription: "Review department budget spend",
        taskDate: "2024-05-12",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      }
    ]
  },

  {
    id: 5,
    firstName: "Krishna",
    email: "krishna@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        id: 1,
        taskTitle: "Server Migration",
        taskDescription: "Move assets to the new AWS bucket",
        taskDate: "2024-05-14",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 2,
        taskTitle: "Unit Testing",
        taskDescription: "Write tests for the login component",
        taskDate: "2024-05-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 3,
        taskTitle: "Code Review",
        taskDescription: "Review PR #442 for logic errors",
        taskDate: "2024-05-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 4,
        taskTitle: "Documentation",
        taskDescription: "Update API documentation for v2",
        taskDate: "2024-05-11",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        id: 5,
        taskTitle: "Legacy Support",
        taskDescription: "Help customer with legacy system import",
        taskDate: "2024-05-23",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 6,
        taskTitle: "Optimization",
        taskDescription: "Reduce bundle size by 20%",
        taskDate: "2024-05-24",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  }
];
 

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// export const setLocalStorage = () => {
//   localStorage.setItem("employees", JSON.stringify(employees));
//   localStorage.setItem("admin", JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem("employees"));

//   const admin = JSON.parse(localStorage.getItem("admin"));

//   return { employees, admin };
// };


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];  
  const admin = JSON.parse(localStorage.getItem("admin")) || []; // Add fallback
  return { employees, admin };
};