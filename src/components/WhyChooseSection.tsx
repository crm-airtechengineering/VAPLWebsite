import React from 'react';
import { Card, CardContent } from './ui/card'
import { 
  Settings, 
  Award, 
  Target, 
  TrendingUp, 
  Hammer, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 rounded-full bg-[#766b68] flex items-center justify-center mb-4">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Settings size={28} />,
      title: 'Customized Tailored Solutions',
      description: 'Unique custom solutions to meet the unique process requirements of each facility, ensuring optimal performance, energy efficiency, and reliability in any industrial environment.'
    },
    {
      icon: <Award size={28} />,
      title: 'Domain Expertise',
      description: 'With 37+ years in industrial HVAC, AHU, we bring deep technical knowledge and proven experience across industries, from pharmaceuticals to large-scale cooling applications.'
    },
    {
      icon: <Target size={28} />,
      title: 'Industry-Focused Approach',
      description: 'Customized solutions built for industries to address critical parameters such as temperature, humidity, air quality and cleanliness for any process.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Structured ERP-Driven Execution',
      description: 'ERP-based project management system ensures real-time tracking, milestone optimization, strict quality control and on-time delivery at every stage.'
    },
    {
      icon: <Hammer size={28} />,
      title: 'Design & Build Capability',
      description: 'Aqua Chill offers complete in-house design and turnkey execution, eliminating coordination gaps, ensuring with seamless project delivery under one roof.'
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Approved by Leading Consultants',
      description: 'Trusted and recommended by top MEP and HVAC consultants, architects, and engineers for quality of quality, safety, and technical compliance.'
    },
    // {
    //   icon: <ShieldCheck size={28} />,
    //   title: 'Standards Compliant & Certifications',
    //   description: 'Proudly adhere to global standards including ASHRAE, ISHRAE, and ISO certifications, maintaining high energy auditors ensuring sustainable and compliant every time.'
    // }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#4A3F35] mb-4 text-3xl md:text-4xl font-bold">
            Why Choose Vakharia Airtech?
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg font-semibold mx-auto">
            Discover what sets us apart as the preferred HVAC solutions provider across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
