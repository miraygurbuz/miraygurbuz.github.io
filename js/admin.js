function updateHashtags() {
    const hashtagInput = document.getElementById("hashtags").value;
    const hashtagList = document.getElementById("hashtag-list");

    const hashtags = hashtagInput.split(',').map(tag => tag.trim()).filter(tag => tag !== "");

    hashtagList.innerHTML = '';
    hashtags.forEach(tag => {
        const hashtagElement = document.createElement("span");
        hashtagElement.classList.add("hashtag");
        hashtagElement.textContent = `#${tag}`;
        hashtagList.appendChild(hashtagElement);
    });
}
