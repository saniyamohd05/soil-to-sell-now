import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: 'primary' | 'secondary';
}

const FeatureCard = ({ title, description, icon: Icon, href, color }: FeatureCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="pb-4">
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-${color} shadow-soft`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground mt-2 leading-relaxed">{description}</p>
        </div>
        <Button 
          asChild
          variant="outline"
          className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
        >
          <Link to={href} className="gap-2">
            शुरू करें / Start
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;