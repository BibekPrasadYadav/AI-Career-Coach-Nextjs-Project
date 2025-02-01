import React from "react";

const HowItWorkSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground">
            Four Simple steps to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features?.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-colors duration-300"
            >
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                  {feature?.icon}{" "}
                  <h3 className="text-xl font-bold mb-2">{feature?.title}</h3>{" "}
                  <p className="text-muted-foreground">
                    {feature?.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
