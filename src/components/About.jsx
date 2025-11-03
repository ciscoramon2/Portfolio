import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'PHP', icon: Code, color: 'text-purple-600' },
    { name: 'Laravel', icon: Server, color: 'text-red-600' },
    { name: 'WordPress', icon: Globe, color: 'text-blue-600' },
    { name: 'Shopify', icon: Smartphone, color: 'text-green-600' },
    { name: 'SQL', icon: Database, color: 'text-orange-600' },
    { name: 'APIs', icon: Zap, color: 'text-yellow-600' },
    { name: 'HTML', icon: Code, color: 'text-orange-500' },
    { name: 'CSS', icon: Code, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Background
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Backend PHP Developer with extensive experience in building robust, scalable web applications. 
              My expertise spans across modern PHP frameworks, content management systems, and e-commerce platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in Laravel development, I specialize in creating efficient APIs, implementing complex business logic, 
              and optimizing database performance. I also have significant experience with WordPress custom development and Shopify app creation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm committed to writing clean, maintainable code and staying updated with the latest industry trends and best practices. 
              My goal is to deliver high-quality solutions that meet both technical requirements and business objectives.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <skill.icon className={`h-8 w-8 ${skill.color} mb-2`} />
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

