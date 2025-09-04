import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

type Language = 'en' | 'hi' | 'mr' | 'gu' | 'ta' | 'od';

const LanguageSelection = () => {
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState<Language>('en');

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr' as Language, name: 'Marathi', nativeName: 'मराठी' },
    { code: 'gu' as Language, name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'od' as Language, name: 'Odia', nativeName: 'ଓଡିଆ' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setSelectedLang(langCode);
    setLanguage(langCode);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background/95 backdrop-blur shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Choose Your Language</CardTitle>
          <p className="text-muted-foreground">भाषा चुनें / Choose Language</p>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={selectedLang === lang.code ? "default" : "outline"}
              className="w-full h-14 text-left justify-between group"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <div className="flex flex-col items-start">
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm opacity-70">{lang.nativeName}</span>
              </div>
              {selectedLang === lang.code && (
                <Check className="h-5 w-5" />
              )}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelection;