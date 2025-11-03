import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Laravel Platform",
      description: "A full-featured e-commerce platform built with Laravel, featuring user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "WordPress Custom Theme",
      description: "A responsive WordPress theme for a corporate website with custom post types, ACF integration, and SEO optimization.",
      image: "/api/placeholder/400/250",
      technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Shopify App Development",
      description: "A Shopify app that helps merchants manage inventory and automate order processing with advanced analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["Shopify", "PHP", "React", "GraphQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "REST API with Laravel",
      description: "A comprehensive REST API built with Laravel for a mobile application, featuring JWT authentication and rate limiting.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "JWT", "MySQL", "Postman"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Content Management System",
      description: "A custom CMS built from scratch with PHP, featuring role-based access control and content versioning.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 6,
      title: "WordPress Plugin Development",
      description: "A WordPress plugin for social media integration with custom widgets and shortcode support.",
      image: "/api/placeholder/400/250",
      technologies: ["WordPress", "PHP", "jQuery", "CSS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio & Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in backend development, 
            WordPress customization, and e-commerce solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

