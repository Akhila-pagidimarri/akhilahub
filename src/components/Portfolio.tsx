import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Restaurant Management System",
      description: "Developed a Java-based system using SQL Server and NetBeans to digitize restaurant operations, enabling online menu browse, order placement (online/cash payments), table management, and feedback collection. Replaced manual processes with an automated solution, improving order accuracy, inventory control, and sales reporting while integrating cashback/offers.",
      technologies: ["Java", "SQL Server", "NetBeans"],
      icon: "🍽️"
    },
    {
      title: "Graphical Password Authentication",
      description: "Developed a web-based authentication system combining image-based (graphical) and text-based passwords for enhanced security. Users authenticate by selecting specific image areas and entering text components, improving resistance to brute-force attacks.",
      technologies: ["Web Technologies", "Authentication", "Security"],
      icon: "🔐"
    }
  ];

  return (
    <section className="py-20 bg-background px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Portfolio
        </h2>
        
        <p className="font-inter text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Showcasing practical applications of my skills through innovative projects
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-lg p-8 shadow-soft hover:shadow-vintage transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-3xl shadow-soft">
                    {project.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                
                <p className="font-inter text-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-foreground mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="vintage" size="sm" className="font-inter">
                    View Details
                  </Button>
                  <Button variant="outline-vintage" size="sm" className="font-inter">
                    GitHub Repository
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-6">
            More exciting projects coming soon! Follow my journey as I continue learning and building.
          </p>
          <Button variant="outline-vintage" className="font-inter">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;