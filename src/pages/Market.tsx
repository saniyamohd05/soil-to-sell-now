import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, TrendingUp, MapPin, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Market = () => {
  const [selectedCrop, setSelectedCrop] = useState('');
  
  const priceData = [
    { date: '15 Nov', price: 2150 },
    { date: '16 Nov', price: 2180 },
    { date: '17 Nov', price: 2200 },
    { date: '18 Nov', price: 2175 },
    { date: '19 Nov', price: 2250 },
    { date: '20 Nov', price: 2280 },
    { date: '21 Nov', price: 2320 }
  ];

  const mandiPrices = [
    {
      crop: 'Wheat / गेहूं',
      mandi: 'Ludhiana Mandi, Punjab',
      price: '₹2,320',
      change: '+4.2%',
      changeType: 'increase',
      distance: '25 km',
      suggestion: 'Best price in region - Sell now!'
    },
    {
      crop: 'Wheat / गेहूं',
      mandi: 'Karnal Mandi, Haryana',
      price: '₹2,180',
      change: '-1.8%',
      changeType: 'decrease',
      distance: '45 km',
      suggestion: 'Price lower than average'
    },
    {
      crop: 'Rice / चावल',
      mandi: 'Amritsar Mandi, Punjab',
      price: '₹3,850',
      change: '+2.1%',
      changeType: 'increase',
      distance: '35 km',
      suggestion: 'Good selling opportunity'
    },
    {
      crop: 'Cotton / कपास',
      mandi: 'Sirsa Mandi, Haryana',
      price: '₹6,750',
      change: '+5.8%',
      changeType: 'increase',
      distance: '55 km',
      suggestion: '15% higher than average - Excellent!'
    }
  ];

  const filteredPrices = selectedCrop 
    ? mandiPrices.filter(item => item.crop.toLowerCase().includes(selectedCrop.toLowerCase()))
    : mandiPrices;

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
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">MarketLink</h1>
              <p className="text-sm text-muted-foreground">Real-time Mandi Prices</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <Card className="mb-8 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Select Crop / फसल चुनें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All crops / सभी फसलें" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All crops / सभी फसलें</SelectItem>
                <SelectItem value="wheat">Wheat / गेहूं</SelectItem>
                <SelectItem value="rice">Rice / चावल</SelectItem>
                <SelectItem value="cotton">Cotton / कपास</SelectItem>
                <SelectItem value="sugarcane">Sugarcane / गन्ना</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Trends Chart */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Price Trend (Last 7 Days) / पिछले 7 दिनों का भाव
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`₹${value}`, 'Price']}
                        labelStyle={{ color: '#000' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Mandi Prices List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Today's Mandi Prices / आज के मंडी भाव ({filteredPrices.length})
              </h2>
              
              {filteredPrices.map((item, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-foreground">{item.crop}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {item.mandi}
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-3xl font-bold text-primary">{item.price}</p>
                        <p className="text-sm text-muted-foreground">per quintal / क्विंटल</p>
                      </div>
                      
                      <div className="text-center">
                        <p className={`text-lg font-semibold ${
                          item.changeType === 'increase' ? 'text-primary' : 'text-destructive'
                        }`}>
                          {item.change}
                        </p>
                        <p className="text-sm text-muted-foreground">{item.distance} away</p>
                      </div>
                      
                      <div className="text-center">
                        <Button 
                          variant={item.changeType === 'increase' ? 'hero' : 'secondary'}
                          size="sm"
                          className="w-full"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className={`mt-4 p-3 rounded-lg ${
                      item.changeType === 'increase' ? 'bg-primary/10' : 'bg-muted/50'
                    }`}>
                      <p className={`text-sm font-medium ${
                        item.changeType === 'increase' ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        💡 {item.suggestion}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Market Insights */}
            <Card className="bg-gradient-primary text-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Market Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Today's Best Price</span>
                    <span className="font-bold">₹6,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Price</span>
                    <span className="font-bold">₹3,325</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Increase</span>
                    <span className="font-bold">+3.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-earth text-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Selling Tips / बेचने की सलाह
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-white/90">
                  <p>• Check multiple mandis before selling</p>
                  <p>• Sell when price trend is increasing</p>
                  <p>• Consider transport costs in profit calculation</p>
                  <p>• Early morning arrivals get better rates</p>
                </div>
              </CardContent>
            </Card>

            {/* Weather Alert */}
            <Card className="bg-secondary/10 border-secondary/30 shadow-card">
              <CardHeader>
                <CardTitle className="text-secondary">Weather Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">
                  Rain expected in next 2 days. Harvest and transport crops to avoid damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;