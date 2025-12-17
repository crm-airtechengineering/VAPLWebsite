// Update the import path below to the correct location of your UI components, for example:
import { Card, CardHeader, CardTitle, CardContent, Button } from './ui';
// If your UI components are located elsewhere, adjust the path accordingly.
import { Briefcase, TrendingUp, Heart, Coffee } from 'lucide-react';

export function Career() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career progression paths.',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options for better balance.',
    },
    {
      icon: Coffee,
      title: 'Great Culture',
      description: 'Collaborative environment with team events and engaging workplace.',
    },
    {
      icon: Briefcase,
      title: 'Competitive Benefits',
      description: 'Comprehensive benefits package including health insurance and more.',
    },
  ];

  const openings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  return (
    <section id="career" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of something amazing. We're always looking for talented individuals 
            who are passionate about making a difference.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <Card key={index}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span>📂 {job.department}</span>
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}