import { Brain, Wheat, TrendingUp, Truck } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import LanguageToggle from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-agriculture.jpg';

const Dashboard = () => {
  const features = [
    {
      title: 'CropCareAI',
      description: 'AI-powered crop recommendations based on soil type and location. Get expert advice for better yield.',
      icon: Brain,
      href: '/crop-care',
      color: 'primary' as const,
    },
    {
      title: 'Seed Access & Quality',
      description: 'Find certified seeds from trusted suppliers. Quality checks and direct supplier contacts.',
      icon: Wheat,
      href: '/seeds',
      color: 'secondary' as const,
    },
    {
      title: 'MarketLink',
      description: 'Real-time crop prices from mandis. Price trends and best selling locations.',
      icon: TrendingUp,
      href: '/market',
      color: 'primary' as const,
    },
    {
      title: 'SmartHaul Transport',
      description: 'Share transport costs with nearby farmers. Save ₹500-700 per trip with smart logistics.',
      icon: Truck,
      href: '/transport',
      color: 'secondary' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">AgriSpectra</h1>
            <p className="text-sm text-muted-foreground">Smart Agriculture Solutions</p>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            खेती को बनाएं आसान
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Make Farming Simple with Smart Technology
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started / शुरू करें
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Agricultural Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything farmers need - from crop care to market access - in one simple platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 AgriSpectra. Empowering farmers with technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;