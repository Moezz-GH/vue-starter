import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import 'flowbite'
import "preline/preline"

const app = createApp(App)

app.use(router)

app.mount('#app')

// Initialize mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  const navbarMenu = document.getElementById('navbar-sticky');
  
  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('hidden');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (!navbarMenu.classList.contains('hidden')) {
          navbarMenu.classList.add('hidden');
        }
      }
    });
  });
});