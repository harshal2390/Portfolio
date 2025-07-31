import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SplitApp",
    description:
      "A group expense tracking application with features like splitting bills, payment history, and summaries.",
    image: "/projects/split.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/harshal2390/SplitApp",
  },
  {
    id: 2,
    title: "Prescripto",
    description:
      "Online appointment booking platform for doctors and patients with a secure database and Payment system.",
    image: "/projects/prescripto.png",
    tags: ["React", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/harshal2390/Prescripto",
  },
  {
    id: 3,
    title: "Wanderlust",
    description:
      "Travel booking platform inspired by Airbnb with property listings, reviews, and booking options.",
    image: "/projects/wanderlust.png",
    tags: ["Node.js", "Express", "MongoDB"],
    demoUrl: "https://wanderlust-6aaz.onrender.com",
    githubUrl: "https://github.com/harshal2390/Wanderlust",
  },
  {
    id: 4,
    title: "CO2 Emission Prediction",
    description:
      "Machine learning project to predict CO2 emissions based on vehicle specifications using regression models.",
    image: "/projects/co2.png",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    demoUrl: "https://co2-emission-prediction-4.streamlit.app",
    githubUrl: "https://github.com/harshal2390/CO2-Emission-Prediction",
  },
  {
    id: 5,
    title: "CBIR System",
    description: "Implemented a CBIR system using pre-traained ResNet50 Model",
    image: "/projects/CBIR.png",
    tags: ["Python", "CNN", "openCV"],
    demoUrl: "#",
    githubUrl: "https://github.com/harshal2390/Content-Based-Image-Retrieval",
  },
  {
    id: 6,
    title: "MediPredictor",
    description:
      "A multiple disease prediction app built using ML models and deployed with Streamlit.",
    image: "/projects/medi.png",
    tags: ["Python", "Streamlit", "Scikit-learn"],
    demoUrl: "https://medipredictor.streamlit.app",
    githubUrl: "https://github.com/harshal2390/MediPredictor",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/harshal2390"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
