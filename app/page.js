import CardSection from "@/components/card-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import StaticSection from "@/components/static-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <CardSection />
      <StaticSection />
    </div>
  );
}
