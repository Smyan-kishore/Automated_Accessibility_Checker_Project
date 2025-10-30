// Function to add high contrast to the page
const enableHighContrast = () => {
    document.body.style.backgroundColor = "#000"; // Black background
    document.body.style.color = "#FFF"; // White text
    document.querySelectorAll("*").forEach((element) => {
      element.style.backgroundColor = "#000"; // Black background for elements
      element.style.color = "#FFF"; // White text for elements
    });
  };
  
  // Function to increase text size
  const increaseTextSize = () => {
    document.querySelectorAll("*").forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.fontSize) {
        const currentSize = parseFloat(computedStyle.fontSize);
        element.style.fontSize = `${currentSize * 1.2}px`; // Increase by 20%
      }
    });
  };
  
  // Function to check for alt text in images
  const checkAltText = () => {
    const images = document.querySelectorAll("img");
    let missingAltCount = 0;
  
    images.forEach((img) => {
      if (!img.alt || img.alt.trim() === "") {
        missingAltCount++;
      }
    });
  
    if (missingAltCount > 0) {
      alert(
        `Some images (${missingAltCount}) are missing alt text. Use premium options to dynamically generate alt text.`
      );
    } else {
      console.log("All images have alt text.");
    }
  };
  
  // Function to check for captions in audio and video elements
  const checkMediaCaptions = () => {
    const videos = document.querySelectorAll("video");
    const audios = document.querySelectorAll("audio");
    let missingCaptionsCount = 0;
  
    videos.forEach((video) => {
      const hasCaptions = video.querySelector("track[kind='subtitles'], track[kind='captions']");
      if (!hasCaptions) {
        missingCaptionsCount++;
      }
    });
  
    audios.forEach((audio) => {
      const hasTranscript = audio.getAttribute("data-transcript"); // Assuming custom attributes for transcripts
      if (!hasTranscript) {
        missingCaptionsCount++;
      }
    });
  
    if (missingCaptionsCount > 0) {
      alert(
        `Some multimedia elements (${missingCaptionsCount}) are missing captions/transcriptions. Use premium options to add them dynamically.`
      );
    } else {
      console.log("All multimedia elements have captions/transcriptions.");
    }
  };
  
  // Main function to enable all features for blind users
  const enableBlindMode = () => {
    enableHighContrast();
    increaseTextSize();
    checkAltText();
    checkMediaCaptions();
    console.log("Blind mode features enabled: High contrast, larger text, and alt/caption checks performed.");
  };
  
  // Call the function to activate blind mode
  enableBlindMode();
  