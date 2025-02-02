export const sectionsData = {
  sectionTitles: {
    hero: { title: "Home", enabled: true },
    experience: { title: "Professional Journey", enabled: true },
    education: { title: "Education", enabled: true },
    certifications: { title: "Certifications", enabled: true },
    skills: { title: "Technical Expertise", enabled: true },
    sideProjects: { title: "Side Projects", enabled: true },
    projects: { title: "Featured Projects", enabled: true },
    contact: { title: "Get In Touch", enabled: true }
  },
  hero: {
    name: "Ariful Jannat Arif",
    title: "Software Engineer (iOS, Android)",
    description: "Software Engineer with 5+ years of specialized expertise in mobile application development across native iOS, Android, and Flutter platforms. Strong technical leadership experience in architecting scalable solutions, mentoring teams, and driving stakeholder communications.",
    profileImage: "/profile_image.jpeg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/cse-ariful/",
        icon: "fab fa-linkedin"
      },
      {
        platform: "GitHub",
        url: "https://github.com/cse-ariful/",
        icon: "fab fa-github"
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/arifuljannatarif",
        icon: "fab fa-facebook"
      }
    ],
    quotes: [
      "Code is poetry in motion",
      "Building tomorrow's solutions today",
      "Turning coffee into code",
      "Debug like a detective, code like an artist",
      "Making the complex simple",
      "Creating digital experiences that matter",
      "Innovation through iteration",
      "Clean code, clear mind",
      "Crafting pixel-perfect experiences",
      "Mobile-first, user always"
    ]
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Enosis Solutions",
      companyUrl: "https://www.enosisbd.com/",
      period: "Aug 2022 – Present",
      location: "Sylhet, Bangladesh",
      achievements: [
        "Integrated VoIP/SIP technology in an iOS app with 99% call reliability",
        "Analyzed project requirements and improved sprint efficiency by 25%",
        "Led and mentored iOS and Android developers, improving productivity by 30%",
        "Improved code quality and development efficiency by 35%",
        "Managed tasks in JIRA, reducing project delivery time by 10%"
      ]
    },
    {
      title: "Software Engineer",
      company: "Inverse.AI",
      companyUrl: "https://inverseai.com/",
      period: "Aug 2021 – Aug 2022",
      location: "Sylhet, Bangladesh",
      achievements: [
        "Worked as a Mobile Development Lead with a team of 5 members",
        "Led development and maintained mobile applications for Android",
        "Owned project execution and planned sprints",
        "Analyzed user data and integrated insights into feature development",
        "Optimized software architecture and modularized features"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Leading University",
      period: "2015 - 2019",
      location: "Sylhet, Bangladesh",
      achievements: [
        "CGPA: 3.92",
        "Relevant coursework: Data Structures, Algorithms, Software Engineering",
        "Final year project: Smart Home Automation System"
      ]
    }
  ],
  certifications: [
    {
      title: "Managing and Leading Developers",
      issuedBy: "LinkedIn",
      issueDate: "March 23, 2023",
      credentialUrl: "https://www.linkedin.com/learning/certificates/2b23e1dcf0e4125af7cf48bdcd26213e88e1f7cbdd983b579e8086fa6fd7d72d",
      credentialId: "2b23e1dcf0e4"
    },
    {
      title: "Tech Career Skills: Effective Technical Communication",
      issuedBy: "LinkedIn",
      issueDate: "March 20, 2023",
      credentialUrl: "https://www.linkedin.com/learning/certificates/c3626dcf73838eb9e218c44db645b6c058b5f1f7e1541e97b82914a0f9f7356e",
      credentialId: "c3626dcf7383"
    }
  ],
  sideProjects: [
    {
      title: "Audit Master",
      tagline: "Audit, Capture, Share",
      description: "AI-Powered Audit Companion that Transform the way you audit with Audit Master Pro, the professional-grade mobile app designed to save time, improve accuracy, and simplify inspections. Harness the power of advanced AI to generate precise reports and streamline your workflow effortless",
      logo: "/site_audit_pro_logo.webp",
      appStoreUrl: "http://apps.apple.com/us/app/audit-master-site-check-pro/id6602890841",
      screenshots: Array.from({ length: 10 }, (_, i) => `/site_audit_pro/site_audit_ss_${i + 1}.png`)
    }
  ],
  projects: [
    {
      title: "Video Converter",
      icon: "video_converter.webp",
      platforms: ["android"],
      downloads: "10M+",
      features: [
        "Support for multiple video formats",
        "Hardware-accelerated encoding",
        "Audio extraction and conversion",
        "Custom output settings",
        "Format presets for different devices"
      ]
    }
  ],
  skills: {
    techIcons: [
      { icon: 'fab fa-swift', name: 'Swift' },
      { icon: 'fab fa-android', name: 'Android' },
      { icon: 'fab fa-apple', name: 'iOS' },
      { icon: 'devicon-kotlin-plain', name: 'Kotlin' },
      { icon: 'fab fa-git-alt', name: 'Git' },
      { icon: 'fab fa-github', name: 'GitHub' },
      { icon: 'fab fa-bitbucket', name: 'Bitbucket' },
      { icon: 'fas fa-sync-alt', name: 'CI/CD' },
      { icon: 'fab fa-jira', name: 'Jira' },
      { icon: 'fab fa-asana', name: 'Asana' }
    ]
  },
  contact: {
    email: {
      value: "cse.ariful@gmail.com",
      label: "Email"
    },
    location: {
      value: "Sylhet, Bangladesh",
      label: "Location"
    },
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/cse-ariful/",
        icon: "fab fa-linkedin",
        label: "LinkedIn"
      },
      {
        platform: "GitHub",
        url: "https://github.com/cse-ariful/",
        icon: "fab fa-github",
        label: "GitHub"
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/arifuljannatarif",
        icon: "fab fa-facebook",
        label: "Facebook"
      }
    ]
  }
}; 