import { Button } from '@/components/ui/button.jsx'
import { Download, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
            AA
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Abdulwassi Abdulrahman
        </h1>
        
        <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 animate-fade-in-delay-1">
          Backend PHP Developer | Laravel | WordPress | Shopify
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Crafting robust backend solutions and dynamic web applications with expertise in modern PHP frameworks and e-commerce platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

