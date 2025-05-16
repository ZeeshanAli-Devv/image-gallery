tailwind.config = {
  darkMode: 'class',
};

// Change Main Image
const changePic = (el) => {
    const pic = document.getElementById("mainpic");
    pic.src = el.src;
};

// Toggle Dark Mode

const toggleButton =()=> {
    
    const toggle = document.getElementById('theme-toggle');
    const y = document.documentElement;
    
    if (y.classList.contains('dark')){

        y.classList.remove('dark');
        
        toggle.textContent = '🌙';        // Light mode pe ayega
    } 
    else {
        
        y.classList.add('dark');
        toggle.textContent = '☀️';        // Dark mode pe ayega
    }
};