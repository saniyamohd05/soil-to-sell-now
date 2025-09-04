import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Truck, MapPin, Users, Calculator, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transport = () => {
  const [transportData, setTransportData] = useState({
    from: '',
    to: '',
    crop: '',
    weight: '',
    date: ''
  });
  
  const [matches, setMatches] = useState<any[]>([]);
  const [showMatches, setShowMatches] = useState(false);

  const transportMatches = [
    {
      id: 1,
      farmerName: 'Rajesh Kumar',
      location: 'Village Rampur',
      crop: 'Wheat',
      weight: '15 quintals',
      route: 'Ludhiana → Delhi',
      sharedCost: '₹2,100',
      soloCost: '₹4,200',
      savings: '₹2,100',
      phone: '+91-9876543210',
      distance: '5 km away',
      departure: 'Tomorrow 6 AM'
    },
    {
      id: 2,
      farmerName: 'Suresh Patel',
      location: 'Village Kishan Nagar',
      crop: 'Cotton',
      weight: '20 quintals',
      route: 'Ludhiana → Mumbai',
      sharedCost: '₹3,500',
      soloCost: '₹7,800',
      savings: '₹4,300',
      phone: '+91-9876543211',
      distance: '8 km away',
      departure: 'Day after tomorrow 5 AM'
    },
    {
      id: 3,
      farmerName: 'Harinder Singh',
      location: 'Village Green Fields',
      crop: 'Rice',
      weight: '12 quintals',
      route: 'Amritsar → Delhi',
      sharedCost: '₹1,800',
      soloCost: '₹3,600',
      savings: '₹1,800',
      phone: '+91-9876543212',
      distance: '3 km away',
      departure: 'Today 8 PM'
    }
  ];

  const handleFindMatches = () => {
    setMatches(transportMatches);
    setShowMatches(true);
  };

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
            <Truck className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">SmartHaul Transport</h1>
              <p className="text-sm text-muted-foreground">Save Money with Shared Transport</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transport Request Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                Transport Request / परिवहन की मांग
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from">From / कहाँ से</Label>
                  <Input
                    value={transportData.from}
                    onChange={(e) => setTransportData({...transportData, from: e.target.value})}
                    placeholder="Pickup location / पिकअप स्थान"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">To / कहाँ तक</Label>
                  <Input
                    value={transportData.to}
                    onChange={(e) => setTransportData({...transportData, to: e.target.value})}
                    placeholder="Destination / गंतव्य"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop">Crop Type / फसल का प्रकार</Label>
                <Select value={transportData.crop} onValueChange={(value) => setTransportData({...transportData, crop: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop / फसल चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat / गेहूं</SelectItem>
                    <SelectItem value="rice">Rice / चावल</SelectItem>
                    <SelectItem value="cotton">Cotton / कपास</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane / गन्ना</SelectItem>
                    <SelectItem value="vegetables">Vegetables / सब्जियाँ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (Quintals) / वजन</Label>
                  <Input
                    value={transportData.weight}
                    onChange={(e) => setTransportData({...transportData, weight: e.target.value})}
                    placeholder="Enter weight / वजन दर्ज करें"
                    type="number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Transport Date / तारीख</Label>
                  <Input
                    value={transportData.date}
                    onChange={(e) => setTransportData({...transportData, date: e.target.value})}
                    type="date"
                  />
                </div>
              </div>

              <Button 
                onClick={handleFindMatches} 
                className="w-full" 
                variant="hero"
                disabled={!transportData.from || !transportData.to || !transportData.crop}
              >
                <Users className="h-4 w-4" />
                Find Transport Partners / साझेदार खोजें
              </Button>
            </CardContent>
          </Card>

          {/* Cost Calculator */}
          <Card className="bg-gradient-earth text-white shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Cost Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span>Solo Transport Cost:</span>
                  <span className="font-bold">₹4,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Shared Transport Cost:</span>
                  <span className="font-bold">₹2,250</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex justify-between text-lg">
                  <span>You Save:</span>
                  <span className="font-bold text-yellow-300">₹2,250</span>
                </div>
              </div>
              
              <div className="text-sm text-white/90 space-y-2">
                <p>✅ 50% cost reduction with SmartHaul</p>
                <p>✅ Secure and verified farmer partners</p>
                <p>✅ Shared fuel and driver costs</p>
                <p>✅ GPS tracking for safety</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transport Matches */}
        {showMatches && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Available Transport Partners ({matches.length})
              </h2>
              <Badge className="bg-primary text-primary-foreground">
                Total Savings: ₹8,200
              </Badge>
            </div>
            
            {matches.map((match) => (
              <Card key={match.id} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Farmer Info */}
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{match.farmerName}</h3>
                      <p className="text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {match.location}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{match.distance}</p>
                    </div>
                    
                    {/* Cargo Info */}
                    <div>
                      <p className="text-sm text-muted-foreground">Cargo Details</p>
                      <p className="font-semibold text-foreground">{match.crop}</p>
                      <p className="text-sm text-muted-foreground">{match.weight}</p>
                      <p className="text-sm font-medium text-primary">{match.route}</p>
                    </div>
                    
                    {/* Cost Details */}
                    <div>
                      <p className="text-sm text-muted-foreground">Cost Comparison</p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Shared:</span>
                          <span className="font-bold text-primary">{match.sharedCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm line-through text-muted-foreground">Solo:</span>
                          <span className="text-sm line-through text-muted-foreground">{match.soloCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Savings:</span>
                          <span className="font-bold text-secondary">{match.savings}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Departure: {match.departure}</p>
                      <Button variant="hero" size="sm" className="w-full">
                        <Phone className="h-4 w-4" />
                        Contact / संपर्क करें
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* How It Works */}
        <Card className="mt-8 bg-gradient-primary text-white shadow-card">
          <CardHeader>
            <CardTitle>How SmartHaul Works / SmartHaul कैसे काम करता है</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Enter Details</h4>
                <p className="text-white/90">Add your pickup, destination, and crop details</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Find Partners</h4>
                <p className="text-white/90">Get matched with nearby farmers going same route</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Save Money</h4>
                <p className="text-white/90">Split transport costs and save 50-70%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transport;