const About = () => {
  return <section className="py-20 bg-gradient-warm px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-inter text-lg text-foreground leading-relaxed">
              I am a third-year B.Tech. student in Computer Science & Engineering at 
              Bhoj Reddy Engineering College for Women, Hyderabad, with a keen interest 
              in Data Analytics.
            </p>
            
            <p className="font-inter text-lg text-foreground leading-relaxed">
              I am proficient in Python and SQL, and thrive on extracting meaningful 
              insights through data-driven experimentation and problem-solving. I have 
              applied skills to real‑world projects—like building a Java‑based Restaurant 
              Management System and a graphical password authentication tool—demonstrating 
              both technical competence and creative thinking.
            </p>
            
            <p className="font-inter text-lg text-foreground leading-relaxed">
              I actively participate in workshops (such as R programming hackathons), 
              lead volunteer initiatives, and enjoy collaborative tech projects. Passionate, 
              analytical, and always learning, I am eager to contribute to data-driven 
              innovations and grow in the dynamic field of analytics.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter font-semibold text-foreground">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    Bhoj Reddy Engineering College for Women, Hyderabad
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    November 2022 – August 2026
                  </p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold text-foreground">
                    Intermediate (TSBIE)
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    Sri Chaitanya Junior Kalasala, Hyderabad
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">2020-2022</p>
                </div>
                
                <div>
                  <h4 className="font-inter font-semibold text-foreground">
                    SSC
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    Sri Chaitanya Techno School, Hyderabad
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">2019-2020</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Core Skills
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-foreground">Python Programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-foreground">SQL Database Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-foreground">Excel & Data Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-inter text-foreground">Data Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="font-inter text-muted-foreground">Learning: Prompt Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;