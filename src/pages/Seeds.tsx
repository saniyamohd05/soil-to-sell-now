import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wheat, Search, Phone, MessageCircle, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Seeds = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const seedSuppliers = [
    {
      id: 1,
      crop: 'Wheat / गेहूं',
      variety: 'HD-3086 (High Yield)',
      supplier: 'Punjab Seeds Co.',
      location: 'Ludhiana, Punjab',
      price: '₹45/kg',
      certification: 'Govt. Certified',
      germination: '92%',
      phone: '+91-9876543210',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      crop: 'Rice / चावल',
      variety: 'IR-64 (Disease Resistant)',
      supplier: 'Haryana Agri Seeds',
      location: 'Karnal, Haryana',
      price: '₹85/kg',
      certification: 'Govt. Certified',
      germination: '89%',
      phone: '+91-9876543211',
      rating: 4.6,
      inStock: true
    },
    {
      id: 3,
      crop: 'Cotton / कपास',
      variety: 'Bt Cotton Hybrid',
      supplier: 'Gujarat Cotton Corp',
      location: 'Ahmedabad, Gujarat',
      price: '₹3200/packet',
      certification: 'Govt. Certified',
      germination: '85%',
      phone: '+91-9876543212',
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      crop: 'Tomato / टमाटर',
      variety: 'Pusa Ruby (Hybrid)',
      supplier: 'Delhi Seeds Hub',
      location: 'New Delhi',
      price: '₹1200/100g',
      certification: 'Govt. Certified',
      germination: '94%',
      phone: '+91-9876543213',
      rating: 4.9,
      inStock: true
    }
  ];

  const filteredSeeds = seedSuppliers.filter(seed =>
    seed.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seed.variety.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const qualityChecklist = [
    'Government Certification Available',
    'Germination Rate > 80%',
    'Proper Packaging & Labeling',
    'Manufacturing Date Within 6 Months',
    'Supplier License Verification'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Wheat className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">Seed Access & Quality</h1>
              <p className="text-sm text-muted-foreground">Certified Seeds from Trusted Suppliers</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <Card className="mb-8 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-secondary" />
              Search Seeds / बीज खोजें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by crop name or variety / फसल या किस्म से खोजें"
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seeds Listing */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Available Seeds ({filteredSeeds.length})</h2>
            
            {filteredSeeds.map((seed) => (
              <Card key={seed.id} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground">{seed.crop}</CardTitle>
                      <p className="text-muted-foreground">{seed.variety}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">{seed.price}</p>
                      {seed.inStock ? (
                        <Badge className="bg-primary text-primary-foreground">In Stock</Badge>
                      ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Supplier</p>
                      <p className="font-semibold">{seed.supplier}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-semibold">{seed.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Certification</p>
                      <div className="flex items-center gap-1">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">{seed.certification}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Germination Rate</p>
                      <p className="font-semibold text-primary">{seed.germination}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(seed.rating) 
                            ? 'fill-secondary text-secondary' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">{seed.rating} rating</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      disabled={!seed.inStock}
                    >
                      <Phone className="h-4 w-4" />
                      Call / कॉल करें
                    </Button>
                    <Button 
                      variant="earth" 
                      className="flex-1"
                      disabled={!seed.inStock}
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Check Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Quality Check Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Always verify these before buying seeds:
                </p>
                <div className="space-y-3">
                  {qualityChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-earth text-white shadow-card">
              <CardHeader>
                <CardTitle>💡 Quick Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-sm">
                  Always buy seeds from certified suppliers. Check for proper packaging and verify germination rates before purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seeds;