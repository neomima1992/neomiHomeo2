import { Check } from 'lucide-react';

const features = [
  "מתכונים בריאים של 30 דקות לאנשים עסוקים",
  "רשימות קניות וטיפים להכנה מראש",
  "מידע תזונתי לכל ארוחה",
  "מדריך למרכיבים חסכוניים"
];

export const FeaturePoints = () => {
  return (
    <div className="grid gap-4 text-right">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 flex-row-reverse">
          <Check className="h-5 w-5 text-primary flex-shrink-0" />
          <span className="text-lg">{feature}</span>
        </div>
      ))}
    </div>
  );
};