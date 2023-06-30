function replaceWithHashtag(text, userString) {
    var hashtag = "#" + userString;
    var twitterSearchLink = "https://twitter.com/search?q=" + encodeURIComponent(hashtag);
    var replacedText = text.replace(new RegExp("\\b" + userString + "\\b", "gi"), '<a href="' + twitterSearchLink + '">' + hashtag + '</a>');
    return replacedText;
  }
  
  var text = "You should never use yolo for any reason...";
  var userString = "yolo";
  
  var replacedText = replaceWithHashtag(text, userString);
  console.log(replacedText);
  