import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
//import FoodImage from '../assets/foods.jpg';

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  buttonText = 'Case Study'
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-blue-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      title: 'Food & Beverage',
      description: 'We provide state-of-the-art HVAC solutions for food processing facilities, ensuring optimal temperature and humidity control for food safety and quality.',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY1MTc5Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Chemical & Fertilizer',
      description: 'Specialized cooling and ventilation systems designed for chemical plants, providing safe and efficient climate control in hazardous environments.',
      imageUrl: 'https://images.unsplash.com/photo-1571322270931-4202f63500a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjUxNzkzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Case Study'
    },
    {
      title: 'Data Centers',
      description: 'Mission-critical precision cooling solutions ensuring optimal temperature and humidity for server rooms and data center operations with 99.9% uptime.',
      imageUrl: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjUxNTEzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Case Study'
    },
    {
      title: 'Pharmaceuticals',
      description: 'GMP-compliant HVAC systems with precise environmental control for pharmaceutical manufacturing, R&D labs, and cleanroom facilities.',
      imageUrl: 'https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY1MjMyNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Case Study'
    },
    {
      title: 'Solar & Renewable',
      description: 'Energy-efficient HVAC solutions for renewable energy facilities, solar panel manufacturing, and green building projects with sustainable design.',
      imageUrl: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZXxlbnwxfHx8fDE3NjUyMTUxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Learn More'
    },
    {
      title: 'Steel',
      description: 'Heavy-duty industrial cooling and ventilation systems for steel manufacturing plants, foundries, and metal processing facilities.',
      imageUrl: 'https://images.unsplash.com/photo-1761414500570-0b835cdcf3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjUyNTU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Learn More'
    },
    {
      title: 'Automotive',
      description: 'Customized HVAC solutions for automotive manufacturing, assembly lines, paint booths, and testing facilities with stringent environmental controls.',
      imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZmFjdG9yeSUyMGFzc2VtYmx5fGVufDF8fHx8MTc2NTI1NTQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Case Study'
    },
    {
      title: 'Paper & Packaging',
      description: 'Industrial HVAC systems for paper mills and packaging facilities, ensuring optimal humidity control for production quality and efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1763924996486-aa3aeacaf15e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMHBhY2thZ2luZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc2NTI1NTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Case Study'
    },
    {
      title: 'Office Industries',
      description: 'Commercial HVAC systems for modern office buildings, corporate campuses, and commercial spaces with focus on comfort and energy efficiency.',
      imageUrl: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjUxODU1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      buttonText: 'Learn More'
    }
  ];

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#4A3F35] mb-4 md:text-4xl text-3xl font-bold">
            Delivering Excellence Through Expertise
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto md:text-lg ">
            Customized HVAC systems built to address the unique needs of various industries through advanced engineering and proven performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              imageUrl={industry.imageUrl}
              buttonText={industry.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
