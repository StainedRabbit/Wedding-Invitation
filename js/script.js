document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.getElementById('landingPage');
    const invitationPage = document.getElementById('invitationPage');
    const seal = document.querySelector('.seal-wrapper');
    const music = document.getElementById('bgMusic');
    const audioControl = document.getElementById('audioControl');
    const photos = document.querySelectorAll('.photo');

    let isPlaying = false;

    // 🔥 Photo animation function
    function animatePhotos() {
        photos.forEach((photo) => {
            photo.style.transform = "none"; // reset

            setTimeout(() => {
                photo.style.transform =
                    `translateX(${photo.classList.contains('photo-1') ? '-77%' : 
                        photo.classList.contains('photo-2') ? '-15%' : '-50%'}) 
                    translateY(${photo.classList.contains('photo-1') ? '100px' : 
                        photo.classList.contains('photo-2') ? '80px' : '290px'}) 
                    rotate(${photo.classList.contains('photo-1') ? '-8deg' : 
                        photo.classList.contains('photo-2') ? '5deg' : '-12deg'})`;
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


