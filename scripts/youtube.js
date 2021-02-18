$(document).ready(function () {

    $("#video-icon").click(function (e) { 
        $('.main').empty();
        $('.main').append(` <h1 id="youtube-title"><i class="fab fa-youtube"></i>Youtube Playback Function </h1>
            <input type="text" name="youtube-input" id="youtube-search-bar" placeholder="Enter a youtube">
            <div class="video-container">
                <iframe width="860" height="615" src="https://www.youtube.com/embed/Oa9QeMHNOm4" frameborder="0" allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`);
        
    });

    $('#file-icon').click(function (e) { 
        e.preventDefault();
        console.log('hello');
        $('.main').empty();
        $('.main').append(`<iframe src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true" 
            frameborder="1" width="100%" height="100%"></iframe>`);
    });
});