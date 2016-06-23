function generateMadlib() {
  
  // This is the starting story
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! We teach students ADJ ways to code.";
  
  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);

  inputValue = document.getElementById("adjective").value;
  story = story.replace("ADJ", inputValue);

  // inputValue = document.getElementById("verb2").value;
  // story = story.replace("VERB2", inputValue);

  // inputValue = document.getElementById("verb3").value;
  // story = story.replace("VERB3", inputValue);

  // inputValue = document.getElementById("sngl_noun").value;
  // story = story.replace("SNGL_NOUN", inputValue);

  // inputValue = document.getElementById("pronoun").value;
  // story = story.replace("PRONOUN", inputValue);

  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}