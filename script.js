// Emoji dictionary  
const emojiDict = {  
    smile: "😊",  
    heart: "❤️",  
    thumbs_up: "👍",  
    fire: "🔥",  
    sun: "☀️",  
    star: "⭐",  
    sad: "😢",  
    laugh: "😂",  
    wink: "😉",  
    rocket: "🚀"  
};  

// Function to get the emoji by name  
function getEmoji(name) {  
    return emojiDict[name] || "Emoji not found!";  
}  

// Event listener for button click  
document.getElementById('getEmojiBtn').addEventListener('click', function() {  
    const emojiName = document.getElementById('emojiInput').value.trim().toLowerCase();  
    const result = getEmoji(emojiName);  
    document.getElementById('result').textContent = result;  
});  
