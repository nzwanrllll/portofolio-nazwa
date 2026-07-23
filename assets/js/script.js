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

    // 4. Skills
    
   

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