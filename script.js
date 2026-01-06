document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.padding = '0.5rem 5%';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 5%';
        }
    });

    // Form Submission
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple Validation & Mock Submission
        const name = document.getElementById('name').value;
        const course = document.getElementById('course').value;
        const dept = document.getElementById('dept').value;

        if (name && course && dept) {
            // Mock API call simulation
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = '처리중...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`환영합니다, ${name}님!\n${dept} 소속으로 [${course}] 코스 신청이 완료되었습니다.`);
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1000);
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
