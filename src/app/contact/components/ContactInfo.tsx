import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: number;
  icon: string;
  title: string;
  primary: string;
  secondary?: string;
  action: string;
  actionLink: string;
}

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: 'PhoneIcon',
      title: 'Call Us',
      primary: '+91 1234567890',
      secondary: '+91 0987654321',
      action: 'Call Now',
      actionLink: 'tel:+911234567890',
    },
    {
      id: 2,
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      primary: 'support@boseworkshop.com',
      secondary: 'info@boseworkshop.com',
      action: 'Send Email',
      actionLink: 'mailto:support@boseworkshop.com',
    },
    {
      id: 3,
      icon: 'ChatBubbleLeftIcon',
      title: 'Live Chat',
      primary: 'Chat with our experts',
      secondary: 'Average response: 2 minutes',
      action: 'Start Chat',
      actionLink: '#',
    },
    {
      id: 4,
      icon: 'MapPinIcon',
      title: 'Visit Us',
      primary: 'C-12/5, Sector-85',
      secondary: 'Noida, Uttar Pradesh 201301',
      action: 'Get Directions',
      actionLink: 'https://maps.google.com/?q=28.5355,77.3910',
    },
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication channel. We&apos;re available through phone, email,
            live chat, or in-person visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Icon name={method.icon} size={24} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-foreground mb-1">{method.primary}</p>
              {method.secondary && (
                <p className="text-sm text-muted-foreground mb-4">{method.secondary}</p>
              )}
              <a
                href={method.actionLink}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300"
              >
                {method.action}
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-12 bg-action/10 border-2 border-action rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-action rounded-full animate-pulse-scale">
                <Icon
                  name="ExclamationTriangleIcon"
                  size={24}
                  variant="solid"
                  className="text-action-foreground"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  Emergency Service Available 24/7
                </h3>
                <p className="text-muted-foreground">
                  Breakdown? Accident? We&apos;re here to help anytime, anywhere in Noida NCR.
                </p>
              </div>
            </div>
            <a
              href="tel:+911234567890"
              className="px-6 py-3 bg-action text-action-foreground rounded hover:bg-action/90 transition-all duration-300 whitespace-nowrap font-semibold"
            >
              Call Emergency: +91 1234567890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
