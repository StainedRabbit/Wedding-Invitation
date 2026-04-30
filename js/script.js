document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.getElementById('landingPage');
    const invitationPage = document.getElementById('invitationPage');
    const seal = document.querySelector('.seal-wrapper');
    const music = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
    const photos = document.querySelectorAll('.photo');

    let isPlaying = false;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    function animatePhotos() {
        photos.forEach((photo) => {
            photo.style.transform = "none";

            setTimeout(() => {

                let x, y, rotate;

                if (isMobile) {
                    if (photo.classList.contains('photo-1')) {
                        x = '-82%';
                        y = '-136px';
                        rotate = '-8deg';
                    } else if (photo.classList.contains('photo-2')) {
                        x = '-20%';
                        y = '-150px';
                        rotate = '5deg';
                    } else {
                        x = '-50%';
                        y = '-60px';
                        rotate = '-12deg';
                    }

                } else {
                    // 💻 DESKTOP (your original values)
                    if (photo.classList.contains('photo-1')) {
                        x = '-77%';
                        y = '70px';
                        rotate = '-8deg';
                    } else if (photo.classList.contains('photo-2')) {
                        x = '-15%';
                        y = '70px';
                        rotate = '5deg';
                    } else {
                        x = '-50%';
                        y = '250px';
                        rotate = '-12deg';
                    }
                }

                photo.style.transform = `
                    translateX(${x})
                    translateY(${y})
                    rotate(${rotate})
                `;
            }, 50);
        });
    }

    function openInvitation(userClicked = false) {
        landingPage.classList.add('hidden');
        invitationPage.classList.remove('hidden');
        window.location.hash = 'invitation';

        // Show audio control
        if (audioControl) audioControl.style.display = 'flex';

        // Play music only if user clicked
        if (music && userClicked) {
            music.play().catch(err => console.log("Music blocked:", err));
            isPlaying = true;
            audioControl.textContent = "🔊";
        }

        // 🔥 Trigger photo animation after page shows
        setTimeout(animatePhotos, 300);
    }

    // Refresh support (#invitation)
    if (window.location.hash === '#invitation') {
        openInvitation(false);
    }

    // Seal click
    if (seal) {
        seal.addEventListener('click', function(e) {
            e.stopPropagation();
            openInvitation(true);
        });
    }

    // Audio toggle
    if (audioControl) {
        audioControl.addEventListener('click', function() {
            if (!isPlaying) {
                music.play().catch(err => console.log("Play blocked:", err));
                audioControl.textContent = "🔊";
                isPlaying = true;
            } else {
                music.pause();
                audioControl.textContent = "🔇";
                isPlaying = false;
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    const bgVideo = document.querySelector('.bg-video');
    const heroSection = document.querySelector('.opened-envelope-container'); // your first section
    
    if (!heroSection) return;
    console.log("Hero section found:", heroSection);
    const observer = new IntersectionObserver(
        
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bgVideo.classList.remove('scrolled');
                } else {
                    bgVideo.classList.add('scrolled');
                }
            });
        },
        { threshold: 0.6 }
    );

    observer.observe(heroSection);
});


