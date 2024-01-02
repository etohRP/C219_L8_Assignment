$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#5e544e', '#4d4139'], 
        anchors: ['about-me', 'contact'], 
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: true
    });
});