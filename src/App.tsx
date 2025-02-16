import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Star, Briefcase, Award, Globe, Database, Server, Layout, Cpu, Coffee } from 'lucide-react';
import myCode from "./my_code.jpeg";
import startup from "./startup.jpeg";


function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: " E-Commerce Platform",
      description: "Scalable e-commerce solution handling 100K+ daily transactions. Implemented secure payment processing, real-time inventory management, and advanced analytics dashboard with performance optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
      link: "https://e-commerce-23os.vercel.app/",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Collaborative Task Management",
      description: "Real-time project management platform with team collaboration features, Kanban boards, and automated workflow processes. Supports file sharing and integration with popular productivity tools.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      link: "https://github.com/ronymostafa2005/task-manager",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Analytics Dashboard Suite",
      description: "Comprehensive analytics platform with real-time data visualization, custom reporting tools, and predictive analytics using machine learning algorithms. Processes millions of data points efficiently.",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      link: "https://github.com/ronymostafa2005/analytics-dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },

    {
      title: " Dashboard rony 2",
      description: "Comprehensive analytics platform with real-time data visualization, custom reporting tools, and predictive analytics using machine learning algorithms. Processes millions of data points efficiently.",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      link: "https://dashboard-2-gamma.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
    , {
      title: " My code ",
      description: "My Code Company offers various services such as website development, mobile applications, advertising, and more..",
      technologies: ["React", "D3.js", "MUI", "TensorFlow"],
      link: "https://my-code-agency.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR0Ec7SLRhP6niWyi3eI7bNJWDIqUYhSWmGAeNVTk7Hy-XWocwkyR13UelQ_aem_BvcA3awAZeDUtcn1cTd25Q",
      image: myCode

    } ,
     {
      title: " Startup packing ",
      description: "A company that sells and produces all the products you need for packaging any sweets..",
      technologies: ["React", "D3.js", "MUI", "TensorFlow"],
      link: "https://newstartup-qlxo.vercel.app/",
      image: startup

    }

  ];

  const technologies = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Native", "TypeScript"]
    },
    {
      category: "UI Frameworks & Design",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Material-UI", "Bootstrap", "Tailwind CSS", "Responsive Design", "UI/UX Best Practices"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      category: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "AWS S3", ]
    }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Proven track record in full-stack development with expertise in modern web technologies"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "20+ Enterprise Projects",
      description: "Successfully delivered complex solutions for various industry sectors"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Led development teams and architected scalable solutions"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Pioneered adoption of cutting-edge technologies and best practices"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl animate-fadeIn">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 animate-slideIn">
                Rawan Mostafa
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-purple-100 animate-slideIn delay-200">
              Full Stack Software Engineer
            </h2>
            <p className="text-xl mb-12 text-gray-100 max-w-2xl leading-relaxed animate-slideIn delay-300">
              Crafting exceptional digital experiences through innovative solutions and cutting-edge technologies. Specialized in building scalable, enterprise-level applications with a focus on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-6 animate-slideIn delay-400">
              <a href="https://github.com/ronymostafa2005" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <Github className="mr-2" /> GitHub Portfolio
              </a>
              <a href="https://www.linkedin.com/in/rawan-mostafa-547038302" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="mr-2" /> Professional Network
              </a>
              <a href="mailto:mrere0013@gmail.com" 
                className="flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Mail className="mr-2" /> Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </header>

      {/* Achievements Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} 
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Technical Expertise
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg">
            Mastering a comprehensive tech stack to deliver robust, scalable, and innovative solutions
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <div key={tech.category} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tech.skills.map((skill) => (
                    <div key={skill} 
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg group hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                      <Code2 className="w-5 h-5 text-purple-600 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg">
            Showcasing innovative solutions and technical excellence through real-world applications
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={project.title} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                  >
                    View Project Details 
                    <ExternalLink className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Coffee className="w-16 h-16 mx-auto mb-8 text-purple-600 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always excited to collaborate on challenging projects and explore innovative solutions. Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:mrere0013@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Start a Conversation <Mail className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rawan-mostafa-547038302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-purple-200 w-full sm:w-auto justify-center"
            >
              Connect on LinkedIn <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Rawan Mostafa</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Software Engineer specializing in creating exceptional digital experiences through innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-purple-400 transition">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/ronymostafa2005" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rawan-mostafa-547038302" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mrere0013@gmail.com" 
                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Rawan Mostafa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;