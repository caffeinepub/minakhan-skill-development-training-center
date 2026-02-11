import { useState } from 'react';
import SiteHeader from './SiteHeader';
import Section from './Section';
import ContactForm from './ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'Drawing',
    description: 'Learn artistic drawing techniques and develop your creative skills.',
    icon: '🎨'
  },
  {
    title: 'Tailoring',
    description: 'Master the art of garment design and professional tailoring.',
    icon: '✂️'
  },
  {
    title: 'Computer',
    description: 'Comprehensive computer training covering essential software and skills.',
    icon: '💻'
  },
  {
    title: 'Beautician',
    description: 'Professional beauty and cosmetology training for a rewarding career.',
    icon: '💄'
  },
  {
    title: 'Kids Computer',
    description: 'Fun and engaging computer courses designed specifically for children.',
    icon: '🖥️'
  },
  {
    title: 'Spoken English',
    description: 'Improve your English speaking skills with confidence and fluency.',
    icon: '🗣️'
  }
];

const galleryImages = [
  {
    src: '/assets/uploaded/Screenshot_2026-02-11-22-30-30-93_a23b203fd3aafc6dcb84e438dda678b6.jpg',
    alt: 'Training Center Poster'
  },
  {
    src: '/assets/uploaded/FB_IMG_1767544089711.jpg',
    alt: 'Training Center Team Photo'
  },
  {
    src: '/assets/generated/gallery-1.dim_800x600.png',
    alt: 'Training Session 1'
  },
  {
    src: '/assets/generated/gallery-2.dim_800x600.png',
    alt: 'Training Session 2'
  },
  {
    src: '/assets/generated/gallery-3.dim_800x600.png',
    alt: 'Training Session 3'
  }
];

export default function TrainingCenterPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1600x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-background/90" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/generated/training-center-logo-malancha.dim_512x512.png"
                alt="MALANCHA TAILORING TRAINING-CENTER Logo"
                className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-foreground drop-shadow-md">
              MALANCHA TAILORING TRAINING-CENTER
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Computer Training Center
            </p>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
              Empowering individuals with practical skills for a brighter future. Join our comprehensive training
              programs and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-background/90 hover:bg-background"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <Section id="courses" title="Our Training Programs" className="bg-background">
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose from our diverse range of professional training courses designed to equip you with in-demand skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="text-5xl mb-4">{course.icon}</div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Our Gallery" className="bg-muted/30">
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a look at our training center and see our students in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone Numbers</p>
                    <a href="tel:7001154146" className="text-muted-foreground hover:text-primary transition-colors">
                      7001154146
                    </a>
                    <span className="text-muted-foreground"> / </span>
                    <a href="tel:8240214166" className="text-muted-foreground hover:text-primary transition-colors">
                      8240214166
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Malancha Market, Harihata, Kormothitho Building, 2nd Floor
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Admission Ongoing</p>
                    <p className="text-muted-foreground">Contact us today to enroll in our training programs!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <ContactForm onSuccess={handleFormSuccess} showSuccess={showSuccess} />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">MALANCHA TAILORING TRAINING-CENTER</h4>
              <p className="text-primary-foreground/80">
                Empowering individuals with practical skills for a brighter future.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>7001154146</li>
                <li>8240214166</li>
                <li>Malancha Market, Harihata, Kormothitho Building, 2nd Floor</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>
              © {new Date().getFullYear()} MALANCHA TAILORING TRAINING-CENTER. Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'training-center'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
