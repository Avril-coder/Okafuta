import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Changed import from 'next/link'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-600">
          A Better Way To Collect Payments
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Streamline your transactions, manage your finances, and grow your business with our intuitive platform.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup"> {/* Removed passHref */}
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg transition duration-300 ease-in-out">
              Get Started
            </Button>
          </Link>
          <Link to="/login"> {/* Removed passHref */}
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-full shadow-lg transition duration-300 ease-in-out">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      {/* Background shapes for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};