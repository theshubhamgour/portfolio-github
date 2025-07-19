import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Server,
  GitBranch,
  Zap,
  Shield,
  Cloud,
  Terminal,
  Database,
  Settings,
  CheckCircle,
  Calendar,
  Building
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: 'Release Management', level: 95, icon: <GitBranch className="w-5 h-5" /> },
    { name: 'CI/CD Pipelines', level: 90, icon: <Zap className="w-5 h-5" /> },
    { name: 'Docker & Containerization', level: 85, icon: <Server className="w-5 h-5" /> },
    { name: 'Jenkins', level: 88, icon: <Settings className="w-5 h-5" /> },
    { name: 'Git/GitHub', level: 92, icon: <Code className="w-5 h-5" /> },
    { name: 'Shell Scripting', level: 87, icon: <Terminal className="w-5 h-5" /> },
    { name: 'Cloud Technologies', level: 80, icon: <Cloud className="w-5 h-5" /> },
    { name: 'Security Scanning', level: 82, icon: <Shield className="w-5 h-5" /> }
  ]

  const experiences = [
    {
      title: 'Release Engineer - II',
      company: 'Neewee',
      period: 'May 2025 - Present',
      location: 'Bengaluru, Karnataka, India',
      description: 'Managing version control systems (Git/GitHub) and branch strategies for multiple agile teams. Building and deploying applications using Jenkins, Docker, and GitHub Actions. Collaborating with DevOps and product teams to streamline release cycles and reduce deployment time.',
      achievements: [
        'Improved automation scripts (Bash/Shell) and maintained secure, repeatable build environments',
        'Leveraged ChatGPT-assisted development to refactor and optimize Python automation scripts',
        'Reduced deployment time through streamlined release processes'
      ]
    },
    {
      title: 'Release Engineer - I',
      company: 'Neewee',
      period: 'Apr 2024 - Jun 2025',
      location: 'Bengaluru, Karnataka, India',
      description: 'Managing daily software releases and ensuring seamless deployments. Configuring and optimizing GitHub repositories and workflows for version control and collaboration.',
      achievements: [
        'Built and optimized Docker images to enhance deployment efficiency',
        'Designed and integrated Jenkins pipelines with SonarQube for automated testing',
        'Developed and maintained Shell scripts to automate tasks and improve process efficiency',
        'Conducted security scans to ensure code quality and compliance'
      ]
    }
  ]

  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Designed and implemented comprehensive CI/CD pipelines using Jenkins and GitHub Actions for multiple projects.',
      technologies: ['Jenkins', 'Docker', 'GitHub Actions', 'SonarQube'],
      link: '#'
    },
    {
      title: 'Release Management System',
      description: 'Developed automated release management workflows that reduced deployment time by 40%.',
      technologies: ['Python', 'Bash', 'Git', 'Docker'],
      link: '#'
    },
    {
      title: 'DevOps Documentation Hub',
      description: 'Created comprehensive documentation and learning resources for DevOps practices.',
      technologies: ['Markdown', 'Git', 'Documentation'],
      link: 'https://theshubhamgour.hashnode.dev/'
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              Shubham Gour
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
<div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 overflow-hidden">
    <img
      src="https://avatars.githubusercontent.com/u/72512204?v=4"
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Shubham Gour
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
                AI-Augmented Release Engineer
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Transitioning from Release Management to DevOps with expertise in CI/CD pipelines, 
                containerization, and automation. Passionate about optimizing release processes and 
                bridging the gap between development and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
  href="https://drive.google.com/uc?export=download&id=1-nZ7nzspXE5q4SWrQryMbUcO_kKJCR34"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
    <Download className="w-5 h-5 mr-2" />
    Download CV
  </Button>
</a>

                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Release Management Professional
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                With a proven track record in Release Management, I'm on an exciting journey to transition 
                into the world of DevOps. I specialize in orchestrating the smooth deployment of software 
                and applications, and I'm now gearing up to bridge the gap between development and operations.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                My passion lies in optimizing release processes, automating deployments, and ensuring the 
                efficiency of IT operations. I'm actively enhancing my skill set in DevOps practices, 
                including cloud technologies, scripting, and CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Release Management</Badge>
                <Badge variant="secondary">DevOps</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Automation</Badge>
                <Badge variant="secondary">RHCSA Certified</Badge>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span>Neewee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Red Hat Certified System Administrator (RHCSA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>2+ years of experience in Release Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Expertise in Jenkins, Docker, and GitHub Actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Active contributor to DevOps community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Projects & Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            I'm keen to connect with professionals who share this enthusiasm and explore 
            opportunities for mutual growth and collaboration in the DevOps domain.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
<a
  href="https://www.linkedin.com/in/theshubhamgour/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
    <Linkedin className="w-5 h-5 mr-2" />
    LinkedIn
  </Button>
</a>

<a
  href="https://github.com/theshubhamgour"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg">
    <Github className="w-5 h-5 mr-2" />
    GitHub
  </Button>
</a>

<a href="mailto:shubhamgour3107@gmail.com">
  <Button variant="outline" size="lg">
    <Mail className="w-5 h-5 mr-2" />
    Email
  </Button>
</a>

<a
  href="https://theshubhamgour.hashnode.dev/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg">
    <ExternalLink className="w-5 h-5 mr-2" />
    Blog
  </Button>
</a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Shubham Gour. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and passion for DevOps.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

