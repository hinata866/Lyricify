document.getElementById('lyrics-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('song-title').value;
    const lyrics = document.getElementById('song-lyrics').value;
    
    if (title && lyrics) {
        const lyricsDisplay = document.getElementById('lyrics-display');
        const lyricsEntry = document.createElement('div');
        lyricsEntry.classList.add('lyrics-entry');
        
        const lyricsTitle = document.createElement('h2');
        lyricsTitle.textContent = title;
        
        const lyricsText = document.createElement('p');
        lyricsText.textContent = lyrics;
        
        lyricsEntry.appendChild(lyricsTitle);
        lyricsEntry.appendChild(lyricsText);
        lyricsDisplay.appendChild(lyricsEntry);
        
        document.getElementById('lyrics-form').reset();
    }
});
