import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'multiplataforma';
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.html',
  styleUrl: './proyects.css',
})
export class Proyects {
  activeFilter: string = 'todos';

  projects: Project[] = [
    {
      id: 1,
      title: 'Spring Backend',
      category: 'backend',
      description:
        'API Rest, Backend con Spring Boot, Spring JPA y Spring Security. Implementación de autenticación JWT y arquitectura de microservicios.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'E-commerce React',
      category: 'frontend',
      description:
        'Interfaz de usuario moderna para plataforma de comercio electrónico con carrito de compras, filtros y sistema de pagos integrado.',
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Redux', 'CSS3', 'API REST'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Plataforma Educativa',
      category: 'fullstack',
      description:
        'Sistema completo de gestión de cursos online con panel de administración, foros de discusión y sistema de evaluaciones automatizadas.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'App Móvil Multiplataforma',
      category: 'multiplataforma',
      description:
        'Aplicación móvil desarrollada con React Native para iOS y Android con sincronización en tiempo real.',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      tags: ['React Native', 'Firebase', 'JavaScript', 'Redux'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  filteredProjects = this.projects;

  filterProjects(category: string): void {
    this.activeFilter = category;

    if (category === 'todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        category === 'fullstack'
          ? project.category === 'fullstack'
          : category === 'frontend'
          ? project.category === 'frontend'
          : category === 'backend'
          ? project.category === 'backend'
          : project.category === 'multiplataforma'
      );
    }
  }

  getCategoryDisplayName(category: string): string {
    const names: { [key: string]: string } = {
      todos: 'Todos',
      fullstack: 'Full Stack',
      frontend: 'Front End',
      backend: 'Back End',
      multiplataforma: 'Multiplataforma',
    };
    return names[category] || category;
  }

  openExplanation(project: Project): void {
    // Aquí puedes implementar la lógica para abrir un modal o video
    alert(`Próximamente: Explicación detallada del proyecto "${project.title}"`);
    // En el futuro, esto puede abrir un modal con un video explicativo
  }
}
