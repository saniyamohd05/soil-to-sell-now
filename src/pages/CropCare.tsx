import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Brain, Sprout, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const CropCare = () => {
  const [cropData, setCropData] = useState({
    crop: '',
    soilType: '',
    district: '',
    state: ''
  });
  
  const [recommendations, setRecommendations] = useState<any>(null);
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleGetRecommendations = () => {
    // Mock recommendations based on input
    setRecommendations({
      fertilizers: ['DAP (50 kg/acre)', 'Urea (25 kg/acre)', 'Potash (15 kg/acre)'],
      irrigation: 'Drip irrigation recommended. Water every 3-4 days.',
      pestControl: ['Neem oil spray weekly', 'Yellow sticky traps for insects'],
      bestPractices: ['Plant during monsoon', 'Maintain 30cm row spacing', 'Regular soil testing']
    });
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { type: 'user' as const, message: currentMessage },
      { type: 'bot' as const, message: `Based on your question about "${currentMessage}", I recommend consulting with local agriculture experts. For ${cropData.crop || 'your crop'} in ${cropData.district || 'your area'}, consider soil testing first.` }
    ];
    
    setChatMessages(newMessages);
    setCurrentMessage('');
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
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">CropCareAI</h1>
              <p className="text-sm text-muted-foreground">Smart Crop Recommendations</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="h-5 w-5 text-primary" />
                Crop Information / फसल की जानकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Name / फसल का नाम</Label>
                <Select value={cropData.crop} onValueChange={(value) => setCropData({...cropData, crop: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop / फसल चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat / गेहूं</SelectItem>
                    <SelectItem value="rice">Rice / चावल</SelectItem>
                    <SelectItem value="cotton">Cotton / कपास</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane / गन्ना</SelectItem>
                    <SelectItem value="tomato">Tomato / टमाटर</SelectItem>
                    <SelectItem value="onion">Onion / प्याज</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type / मिट्टी का प्रकार</Label>
                <Select value={cropData.soilType} onValueChange={(value) => setCropData({...cropData, soilType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type / मिट्टी चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clayey">Clayey / चिकनी मिट्टी</SelectItem>
                    <SelectItem value="sandy">Sandy / बलुई मिट्टी</SelectItem>
                    <SelectItem value="loamy">Loamy / दोमट मिट्टी</SelectItem>
                    <SelectItem value="black">Black Soil / काली मिट्टी</SelectItem>
                    <SelectItem value="red">Red Soil / लाल मिट्टी</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="district">District / जिला</Label>
                  <Input
                    value={cropData.district}
                    onChange={(e) => setCropData({...cropData, district: e.target.value})}
                    placeholder="Enter district / जिला दर्ज करें"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / राज्य</Label>
                  <Input
                    value={cropData.state}
                    onChange={(e) => setCropData({...cropData, state: e.target.value})}
                    placeholder="Enter state / राज्य दर्ज करें"
                  />
                </div>
              </div>

              <Button 
                onClick={handleGetRecommendations} 
                className="w-full" 
                variant="hero"
                disabled={!cropData.crop || !cropData.soilType}
              >
                Get Recommendations / सुझाव पाएं
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          {recommendations && (
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🌱 Fertilizers / उर्वरक</h4>
                  <ul className="space-y-1">
                    {recommendations.fertilizers.map((item: string, index: number) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💧 Irrigation / सिंचाई</h4>
                  <p className="text-muted-foreground">{recommendations.irrigation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🐛 Pest Control / कीट नियंत्रण</h4>
                  <ul className="space-y-1">
                    {recommendations.pestControl.map((item: string, index: number) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✅ Best Practices / बेहतर तरीके</h4>
                  <ul className="space-y-1">
                    {recommendations.bestPractices.map((item: string, index: number) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* AI Chatbot Section */}
        <Card className="mt-8 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Ask AI Assistant / AI से पूछें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="h-40 overflow-y-auto space-y-2 p-4 bg-muted/20 rounded-lg">
                {chatMessages.length === 0 ? (
                  <p className="text-muted-foreground text-center">
                    Ask me anything about farming! / खेती के बारे में कुछ भी पूछें!
                  </p>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div key={index} className={`p-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-primary/10 ml-auto max-w-[80%]' 
                        : 'bg-secondary/10 mr-auto max-w-[80%]'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  ))
                )}
              </div>
              
              {/* Chat Input */}
              <div className="flex gap-2">
                <Textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Ask about crops, soil, weather... / फसल, मिट्टी, मौसम के बारे में पूछें..."
                  className="resize-none"
                  rows={2}
                />
                <Button onClick={handleSendMessage} variant="hero">
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropCare;