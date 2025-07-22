import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-accent px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Let's Connect
        </h2>
        
        <p className="font-inter text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always excited to discuss data analytics, collaborate on projects, 
          or explore new opportunities in the field.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-inter font-medium text-foreground">Email</p>
                    <p className="font-inter text-muted-foreground">
                      pagidimarriakhila20@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <p className="font-inter font-medium text-foreground">LinkedIn</p>
                    <p className="font-inter text-muted-foreground">
                      Connect with me professionally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-inter font-medium text-foreground">Location</p>
                    <p className="font-inter text-muted-foreground">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <p className="font-inter font-medium text-foreground">Response Time</p>
                    <p className="font-inter text-muted-foreground">
                      Typically reply within 24–48 hours (Mon–Sat)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-lg p-8 shadow-vintage">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="font-inter"
                    />
                  </div>
                  
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="font-inter"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="What would you like to discuss?"
                    className="font-inter"
                  />
                </div>
                
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    className="font-inter"
                  />
                </div>
                
                <Button variant="vintage" size="lg" className="w-full font-inter">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="font-inter text-muted-foreground">
            © 2024 Akhila Pagidimarri. Crafted with passion for data and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;