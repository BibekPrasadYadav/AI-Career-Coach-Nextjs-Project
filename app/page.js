import CardSection from "@/components/card-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import HowItWorkSection from "@/components/how-it-works-section";
import StaticSection from "@/components/static-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import UsersFeedback from "@/components/users-feedback";
import { features } from "@/data/features";
import Image from "next/image";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <CardSection />
      <StaticSection />
      <HowItWorkSection />
      <UsersFeedback />
      <FAQ />
      <CTASection />
    </div>
  );
}
