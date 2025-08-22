import { WinnersShowcase } from "@/components/winners-showcase"

const eventsData = [
  {
    id: 1,
    name: "VORTEX.AI 2022",
    subtitle: "INAUGURAL EDITION",
    color: "blue",
    animationType: "pinning",
    winners: [
      {
        id: 1,
        rank: "1ST PLACE",
        name: "TEAM ALPHA CODERS",
        members: ["RAJESH KUMAR", "SNEHA PATEL", "ARJUN SINGH"],
        description: "AI-powered smart city management system with IoT integration.",
        stats: { accuracy: "96.5%", efficiency: "89%", coverage: "25K+" },
        avatar: "AC",
        color: "gold",
        photo: "/winners/placeholder.png",
        technologies: ["Python", "TensorFlow", "IoT", "React"],
      },
      {
        id: 2,
        rank: "2ND PLACE",
        name: "TEAM BETA INNOVATORS",
        members: ["PRIYA SHARMA", "VIKRAM RAO", "ANITA GUPTA"],
        description: "Machine learning based crop disease detection system.",
        stats: { accuracy: "94.2%", farms: "500+", detection: "0.5s" },
        avatar: "BI",
        color: "silver",
        photo: "/winners/placeholder.png",
        technologies: ["OpenCV", "Python", "ML", "Flutter"],
      },
      {
        id: 3,
        rank: "3RD PLACE",
        name: "TEAM GAMMA TECH",
        members: ["ROHIT MEHTA", "KAVYA JAIN", "ADITYA KUMAR"],
        description: "Blockchain-based supply chain transparency platform.",
        stats: { transactions: "10K+", nodes: "150", uptime: "99.9%" },
        avatar: "GT",
        color: "bronze",
        photo: "/winners/placeholder.png",
        technologies: ["Blockchain", "Node.js", "React", "MongoDB"],
      },
      {
        id: 4,
        rank: "SPECIAL MENTION",
        name: "TEAM DELTA FORCE",
        members: ["ISHITA VERMA", "KARAN PATEL", "NEHA SINGH"],
        description: "AI-powered educational content recommendation engine.",
        stats: { users: "5K+", accuracy: "92%", content: "1M+" },
        avatar: "DF",
        color: "purple",
        photo: "/winners/placeholder.png",
        technologies: ["AI/ML", "Python", "Django", "PostgreSQL"],
      },
      {
        id: 5,
        rank: "INNOVATION AWARD",
        name: "TEAM EPSILON LABS",
        members: ["RAHUL GUPTA", "POOJA SINGH", "AMIT SHARMA"],
        description: "Voice-controlled smart home automation system.",
        stats: { devices: "50+", response: "0.3s", accuracy: "95%" },
        avatar: "EL",
        color: "green",
        photo: "/winners/placeholder.png",
        technologies: ["NLP", "IoT", "Python", "Arduino"],
      },
      {
        id: 6,
        rank: "BEST UI/UX",
        name: "TEAM ZETA DESIGN",
        members: ["SANYA AGARWAL", "ROHAN KUMAR", "DIVYA PATEL"],
        description: "Mental health support app with AI chatbot integration.",
        stats: { users: "2K+", sessions: "15K+", rating: "4.8★" },
        avatar: "ZD",
        color: "pink",
        photo: "/winners/placeholder.png",
        technologies: ["React Native", "AI", "Firebase", "Node.js"],
      },
    ],
  },
  {
    id: 2,
    name: "VORTEX.AI 2023",
    subtitle: "EVOLUTION EDITION",
    color: "orange",
    animationType: "stacked",
    winners: [
      {
        id: 7,
        rank: "1ST PLACE",
        name: "TEAM NEURAL NEXUS",
        members: ["ARJUN SHARMA", "PRIYA PATEL", "ROHIT KUMAR"],
        description: "Revolutionary AI-powered healthcare diagnostic system.",
        stats: { accuracy: "98.7%", processing: "0.3s", datasets: "50K+" },
        avatar: "NN",
        color: "gold",
        photo: "/winners/placeholder.png",
        technologies: ["TensorFlow", "OpenCV", "Python", "React"],
      },
      {
        id: 8,
        rank: "2ND PLACE",
        name: "TEAM QUANTUM CODERS",
        members: ["SNEHA GUPTA", "VIKRAM SINGH", "ANITA RAO"],
        description: "Intelligent traffic management system with IoT sensors.",
        stats: { efficiency: "85%", coverage: "10K km²", reduction: "40%" },
        avatar: "QC",
        color: "silver",
        photo: "/winners/placeholder.png",
        technologies: ["IoT", "Machine Learning", "Python", "AWS"],
      },
      {
        id: 9,
        rank: "3RD PLACE",
        name: "TEAM CYBER PHOENIX",
        members: ["RAHUL MEHTA", "KAVYA SHARMA", "ADITYA JAIN"],
        description: "Advanced cybersecurity framework with AI threat detection.",
        stats: { detection: "99.2%", response: "1.2s", threats: "1M+" },
        avatar: "CP",
        color: "bronze",
        photo: "/winners/placeholder.png",
        technologies: ["AI/ML", "Python", "Elasticsearch", "Docker"],
      },
      {
        id: 10,
        rank: "SPECIAL MENTION",
        name: "TEAM DATA DYNAMOS",
        members: ["ISHITA VERMA", "KARAN PATEL", "NEHA SINGH"],
        description: "Sustainable agriculture platform with satellite imagery.",
        stats: { yield: "+35%", water: "-25%", farmers: "5K+" },
        avatar: "DD",
        color: "purple",
        photo: "/winners/placeholder.png",
        technologies: ["Satellite API", "ML", "Python", "Django"],
      },
      {
        id: 11,
        rank: "INNOVATION AWARD",
        name: "TEAM TECH TITANS",
        members: ["HARSH PATEL", "RIYA SHARMA", "NIKHIL GUPTA"],
        description: "AR/VR based immersive learning platform for education.",
        stats: { students: "3K+", courses: "100+", engagement: "95%" },
        avatar: "TT",
        color: "cyan",
        photo: "/winners/placeholder.png",
        technologies: ["Unity", "AR/VR", "C#", "Firebase"],
      },
      {
        id: 12,
        rank: "BEST PRESENTATION",
        name: "TEAM CODE MASTERS",
        members: ["SAKSHI JAIN", "VARUN KUMAR", "MEGHA SINGH"],
        description: "Real-time language translation app with voice recognition.",
        stats: { languages: "25+", accuracy: "96%", users: "8K+" },
        avatar: "CM",
        color: "teal",
        photo: "/winners/placeholder.png",
        technologies: ["NLP", "Speech API", "React Native", "Python"],
      },
    ],
  },
  {
    id: 3,
    name: "VORTEX.AI 2024",
    subtitle: "FUTURE EDITION",
    color: "red",
    animationType: "horizontal",
    winners: [
      {
        id: 13,
        rank: "1ST PLACE",
        name: "TEAM FUTURE FORGE",
        members: ["AARAV SINGH", "DIYA PATEL", "KARTHIK RAO"],
        description: "Quantum-inspired AI algorithms for complex optimization.",
        stats: { performance: "99.5%", speed: "10x", problems: "1000+" },
        avatar: "FF",
        color: "gold",
        photo: "/winners/placeholder.png",
        technologies: ["Quantum Computing", "AI", "Python", "Qiskit"],
      },
      {
        id: 14,
        rank: "2ND PLACE",
        name: "TEAM NEXT GEN",
        members: ["ANANYA SHARMA", "ROHAN GUPTA", "SHREYA JAIN"],
        description: "Brain-computer interface for assistive technology.",
        stats: { accuracy: "97%", latency: "50ms", users: "200+" },
        avatar: "NG",
        color: "silver",
        photo: "/winners/placeholder.png",
        technologies: ["BCI", "ML", "Python", "TensorFlow"],
      },
      {
        id: 15,
        rank: "3RD PLACE",
        name: "TEAM INNOVATE X",
        members: ["ARYAN PATEL", "NISHA KUMAR", "DEEPAK SINGH"],
        description: "Autonomous drone swarm for disaster management.",
        stats: { drones: "50+", coverage: "100km²", response: "5min" },
        avatar: "IX",
        color: "bronze",
        photo: "/winners/placeholder.png",
        technologies: ["Robotics", "AI", "Computer Vision", "ROS"],
      },
      {
        id: 16,
        rank: "SPECIAL MENTION",
        name: "TEAM VISIONARY",
        members: ["TANVI AGARWAL", "YASH MEHTA", "PRACHI SINGH"],
        description: "AI-powered climate change prediction and mitigation system.",
        stats: { accuracy: "94%", models: "20+", data: "1TB+" },
        avatar: "VS",
        color: "purple",
        photo: "/winners/placeholder.png",
        technologies: ["Climate AI", "Python", "TensorFlow", "GIS"],
      },
      {
        id: 17,
        rank: "INNOVATION AWARD",
        name: "TEAM BREAKTHROUGH",
        members: ["ADITYA SHARMA", "RITU PATEL", "MOHIT KUMAR"],
        description: "Holographic display technology with gesture control.",
        stats: { resolution: "4K", fps: "60", gestures: "100+" },
        avatar: "BT",
        color: "indigo",
        photo: "/winners/placeholder.png",
        technologies: ["Holography", "Computer Vision", "C++", "OpenGL"],
      },
      {
        id: 18,
        rank: "PEOPLE'S CHOICE",
        name: "TEAM COMMUNITY",
        members: ["SIMRAN KAUR", "ABHISHEK RAO", "NEETU SHARMA"],
        description: "Social impact platform connecting volunteers with NGOs.",
        stats: { volunteers: "10K+", ngos: "500+", projects: "2K+" },
        avatar: "CO",
        color: "emerald",
        photo: "/winners/placeholder.png",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      },
    ],
  },
];

export default function Vortex2024Page() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-orange-500 text-orange-500 text-sm font-mono mb-4">
              VORTEX.AI 2024
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-orange-400">VORTEX.AI 2024</h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xl text-gray-300 font-rajdhani mb-8">
                Our flagship event series featuring workshops, competitions, and guest lectures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-orange transition-all duration-300">
                <h3 className="text-2xl font-orbitron text-orange-400 mb-4">WORKSHOPS</h3>
                <p className="text-gray-300 font-rajdhani">
                  Hands-on learning sessions covering cutting-edge AI/ML technologies and practical implementations.
                </p>
              </div>

              <div className="border border-amber-500/30 p-8 bg-black/60 backdrop-blur-sm transition-all duration-300">
                <h3 className="text-2xl font-orbitron text-amber-400 mb-4">COMPETITIONS</h3>
                <p className="text-gray-300 font-rajdhani">
                  Challenging hackathons and coding competitions to test and enhance your AI skills.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm hover:glow-orange transition-all duration-300">
                <h3 className="text-2xl font-orbitron text-orange-400 mb-4">EVENT STATUS</h3>
                <p className="text-gray-300 mb-4 font-rajdhani">
                  VORTEX.AI 2024 featured industry experts, technical workshops, and networking opportunities.
                </p>
                <div className="font-mono text-orange-500 text-sm">{"> EVENT COMPLETED SUCCESSFULLY"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winners Section with Stacked Pinning */}
      <WinnersShowcase eventsData={eventsData} />

      {/* Additional Content Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-white">EVENT HIGHLIGHTS</h2>
            <p className="text-xl text-gray-300 font-rajdhani mb-12">
              Celebrating innovation, creativity, and technical excellence in AI/ML
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">200+</h4>
                <p className="text-gray-300 font-rajdhani">Participants</p>
              </div>
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">48 HRS</h4>
                <p className="text-gray-300 font-rajdhani">Hackathon Duration</p>
              </div>
              <div className="border border-orange-500/30 p-8 bg-black/60 backdrop-blur-sm">
                <h4 className="text-2xl font-orbitron text-orange-400 mb-4">₹50K</h4>
                <p className="text-gray-300 font-rajdhani">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
