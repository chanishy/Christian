<script>
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var nav = document.querySelector('.vertical-nav');
        var homeSection = document.getElementById('home').offsetTop;
        var resumeSection = document.getElementById('resume').offsetTop + document.getElementById('resume').offsetHeight;

        if (window.pageYOffset >= homeSection && window.pageYOffset <= resumeSection) {
            nav.style.display = 'flex'; // Or 'block', depending on your specific styling
        } else {
            nav.style.display = 'none';
        }
    })
});
</script>
