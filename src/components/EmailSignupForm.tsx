import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const EmailSignupForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("בהצלחה! בדקו את תיבת הדואר שלכם.", {
      description: "שלחנו לכם את המדריך לארוחות בריאות!"
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2" dir="rtl">
      <Input
        type="email"
        placeholder="הכניסו את כתובת המייל שלכם"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 text-lg text-right"
      />
      <Button 
        type="submit" 
        className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "שולח..." : "קבלו את המדריך החינמי"}
      </Button>
    </form>
  );
};