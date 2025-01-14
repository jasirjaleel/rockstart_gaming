import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessHours } from "@/lib/contact-data";

export function BusinessHours() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Hours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {businessHours.map(({ day, hours }) => (
            <div key={day} className="flex justify-between">
              <span className="font-medium">{day}</span>
              <span className="text-muted-foreground">{hours}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}