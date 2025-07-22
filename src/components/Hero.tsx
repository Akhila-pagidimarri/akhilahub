import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-accent shadow-vintage overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center text-6xl font-playfair text-primary">
              AP
            </div>
          </div>
        </div>
        
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Akhila Pagidimarri
        </h1>
        
        <p className="font-playfair text-xl md:text-2xl text-muted-foreground mb-4">
          Aspiring Data Analyst
        </p>
        
        <p className="font-inter text-lg text-muted-foreground mb-2">
          Computer Science & Engineering Student
        </p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="font-inter text-lg text-foreground leading-relaxed">
            Passionate about extracting meaningful insights through data-driven experimentation 
            and problem-solving. Proficient in Python and SQL, with a keen eye for analytics 
            and innovation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="vintage" size="lg" className="font-inter">
            View Portfolio
          </Button>
          <Button variant="outline-vintage" size="lg" className="font-inter">
            Connect with Me
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🐍</span>
            </div>
            <p className="font-inter text-sm font-medium text-foreground">Python</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🗄️</span>
            </div>
            <p className="font-inter text-sm font-medium text-foreground">SQL</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <p className="font-inter text-sm font-medium text-foreground">Excel</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <p className="font-inter text-sm font-medium text-foreground">Analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;