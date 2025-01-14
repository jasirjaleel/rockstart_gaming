import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/contact-data";

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 mt-0.5 text-primary" />
          <span>{contactInfo.address}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-primary" />
          <span>{contactInfo.phone}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary" />
          <span>{contactInfo.email}</span>
        </div>
      </CardContent>
    </Card>
  );
}