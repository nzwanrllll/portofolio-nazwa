document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Gunakan 'flex' alih-alih hilangkan 'hidden' biasa agar tata letaknya tidak rusak
    menuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // 2. Custom Cursor (Smooth Follow)
    const cursor = document.getElementById('custom-cursor');
    // Memastikan cursor tidak memblokir interaksi
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
        });
    }

    // 2. Surprise Surprise (Gift) after 3 seconds
    setTimeout(() => {
        const surprise = document.getElementById('profile-surprise');
        if(surprise) surprise.style.opacity = '1';
    }, 3000);

    // 3. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    // 4. Skills Cube Initialization
    const cube = document.getElementById('interactive-cube');
    const skillIcons = [
        { icon: 'fa-laravel', color: '#FF2D20', name: 'LARAVEL' },
        { icon: 'fa-php', color: '#777BB4', name: 'PHP' },
        { icon: 'fa-js', color: '#F7DF1E', name: 'JS' },
        { icon: 'fa-html5', color: '#E34F26', name: 'HTML' },
        { icon: 'fa-css3-alt', color: '#1572B6', name: 'CSS' },
        { icon: 'fa-github', color: '#181717', name: 'GITHUB' }
    ];

    const faceClasses = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    skillIcons.forEach((skill, i) => {
        const face = document.createElement('div');
        face.className = `cube__face cube__face--${faceClasses[i]}`;
        // Perbaikan kontras warna untuk Github di dark mode
        const iconColor = skill.name === 'GITHUB' ? 'var(--tw-text-opacity)' : skill.color;
        face.innerHTML = `<i class="fab ${skill.icon} text-6xl mb-2" style="color:${skill.color}"></i><span class="text-xs font-bold tracking-widest">${skill.name}</span>`;
        cube.appendChild(face);
    });

    let rx = -20, ry = 20;
    cube.addEventListener('click', () => {
        rx += 90; ry += 90;
        cube.style.transform = `translateZ(-100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    // 5. Toggle Projects (Show More / Show Less)
    const toggleProjBtn = document.getElementById('toggle-projects');
    const extraProjects = document.querySelectorAll('.extra-project');
    let projOpen = false;

    toggleProjBtn.addEventListener('click', () => {
        projOpen = !projOpen;
        extraProjects.forEach(p => p.classList.toggle('hidden'));
        toggleProjBtn.textContent = projOpen ? 'LIHAT LEBIH SEDIKIT' : 'LIHAT LEBIH BANYAK';
    });

    // 6. Toggle Certificates (Show More / Show Less)
    const toggleCertBtn = document.getElementById('toggle-certs');
    const extraCerts = document.querySelectorAll('.extra-cert');
    let certOpen = false;

    toggleCertBtn.addEventListener('click', () => {
        certOpen = !certOpen;
        extraCerts.forEach(c => c.classList.toggle('hidden'));
        toggleCertBtn.textContent = certOpen ? 'LIHAT LEBIH SEDIKIT' : 'LIHAT SEMUA SERTIFIKAT';
    });
});



// MUSIC CONTROL
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});