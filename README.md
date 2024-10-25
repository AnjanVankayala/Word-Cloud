# Word-Cloud
![word-cloud-v1](https://github.com/user-attachments/assets/9f1c22a6-02fb-48b0-9bfb-b67730f96f81)
This project generates a dynamic word cloud using HTML, CSS, and JavaScript. Users can input words, and each word is displayed with a randomly generated font size inside the word cloud container. If the input is empty, an error message will be displayed.

## Features

- **Dynamic Word Cloud**: Words are displayed in varying font sizes based on user input.
- **Error Handling**: If the user attempts to add an empty word, an error message is shown.
- **User Input**: New words are added to the word cloud on button click.

## Instructions

Follow these steps to implement the word cloud functionality:

1. **HTML Structure**:
   - The word cloud container should contain:
     - A child `div` with the class name `row` and the id `wordsContainer`.
   - The user input should be:
     - An `input` element with the id `userInput`.
   - The error message should be:
     - A `p` element with the class name `error-msg` and the id `errorMsg`.
   - The button to add new words should be:
     - A `button` element with the class name `add-btn` and the id `addBtn`.

2. **Functionality**:
   - For each word in a predefined array, a `span` element is created with a random font size and appended to the `wordsContainer`.
   - When the **Add** button is clicked:
     - If the input is empty, an error message is displayed inside the `errorMsg` element.
     - If the input is not empty:
       - A new word is appended to the `wordsContainer` as a `span` element.
       - The word is displayed with a randomly generated font size.
