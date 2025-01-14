"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/lib/pricing-data";

interface PricingCardProps extends PricingTier {
  className?: string;
}

export function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  popular, 
  className 
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col",
      popular && "border-primary shadow-lg",
      className
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          {popular && <Badge>Most Popular</Badge>}
        </div>
        <div className="flex items-baseline mt-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="ml-1 text-muted-foreground">/{duration}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
}