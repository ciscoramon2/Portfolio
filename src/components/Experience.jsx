import { GraduationCap, Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      id: 1,
      degree: "Ordinary National Diploma (OND)",
      institution: "Federal Polytechnic",
      field: "Computer Science",
      period: "2018 - 2020",
      status: "Completed"
    },
    {
      id: 2,
      degree: "Higher National Diploma (HND)",
      institution: "Federal Polytechnic",
      field: "Computer Science",
      period: "2021 - Present",
      status: "Ongoing"
    },
    {
      id: 3,
      degree: "Bachelor's Degree",
      institution: "University",
      field: "Computer Science",
      period: "2024 - Present",
      status: "Ongoing"
    }
  ]

  const experiences = [
    {
      id: 1,
      title: "Senior PHP Developer",
      company: "Tech Solutions Ltd",
      type: "Full-time",
      period: "2022 - Present",
      description: "Leading backend development projects using Laravel and PHP. Responsible for API development, database optimization, and mentoring junior developers."
    },
    {
      id: 2,
      title: "WordPress Developer",
      company: "Digital Agency",
      type: "Freelance",
      period: "2021 - 2022",
      description: "Developed custom WordPress themes and plugins for various clients. Specialized in e-commerce solutions and performance optimization."
    },
    {
      id: 3,
      title: "PHP Developer Intern",
      company: "StartupCo",
      type: "Internship",
      period: "2020 - 2021",
      description: "Gained hands-on experience in web development, working on various PHP projects and learning industry best practices."
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Self-employed",
      type: "Freelance",
      period: "2019 - Present",
      description: "Providing web development services to small businesses and startups. Specializing in PHP, WordPress, and Shopify development."
    }
  ]

  const TimelineItem = ({ item, type, isLast }) => (
    <div className="relative flex items-start mb-8">
      <div className="flex flex-col items-center mr-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          type === 'education' ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'
        }`}>
          {type === 'education' ? (
            <GraduationCap className={`h-6 w-6 ${
              type === 'education' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
            }`} />
          ) : (
            <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          )}
        </div>
        {!isLast && (
          <div className={`w-0.5 h-16 mt-2 ${
            type === 'education' ? 'bg-green-200 dark:bg-green-800' : 'bg-blue-200 dark:bg-blue-800'
          }`}></div>
        )}
      </div>
      
      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-2">
          <Calendar className="h-4 w-4 text-gray-500 mr-2" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
          {item.status && (
            <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
              item.status === 'Completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}>
              {item.status}
            </span>
          )}
          {item.type && (
            <span className="ml-auto px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {item.type}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {item.degree || item.title}
        </h3>
        
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          {item.institution || item.company}
          {item.field && ` - ${item.field}`}
        </p>
        
        {item.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
              Education
            </h3>
            <div>
              {education.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  type="education" 
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
              Work Experience
            </h3>
            <div>
              {experiences.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  type="experience" 
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

