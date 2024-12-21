

<div align="center">
  <img src="https://s13.gifyu.com/images/SPu4w.gif" alt="Title GIF" width="800">
</div>

# Typewriter.js
A lightweight JavaScript library to create typewriter effects for web elements. `typewriter.js` is simple to use, customizable, and allows for looping text animations with dynamic typing and untyping speeds.

## Features
- Smooth typewriter effect for any HTML elements.
- Customizable typing speed, untyping speed, and pause durations.
- Looping functionality.
- Easy integration with HTML.

## Installation

Simply include the script in your project:

```html
<script src="path/to/typewriter.js"></script>
```

Make sure the script runs after the DOM is fully loaded.

## Usage

Use the `<typewriter>` tag in your HTML to define the elements for the typewriter effect. Each child element inside the `<typewriter>` tag will be animated sequentially.

### Example

```html
<typewriter pause="3" typing-speed="150" untyping-speed="100" loop="true">
    <span>Hello, World!</span>
    <span>Welcome to Typewriter.js!</span>
    <span>Enjoy smooth animations!</span>
</typewriter>

<script src="typewriter.js"></script>
```

### Attributes
- **`pause`** *(optional)*: Time in seconds to pause after typing a line. Default is `2` seconds.
- **`typing-speed`** *(optional)*: Speed of typing in milliseconds per character. Default is `100`.
- **`untyping-speed`** *(optional)*: Speed of untyping in milliseconds per character. Default is `100`.
- **`loop`** *(optional)*: Whether the typewriter animation should loop. Use `true` or `false`. Default is `false`.

### How It Works
- The script selects all `<typewriter>` tags in the document.
- Each child element within a `<typewriter>` tag is treated as a separate line to animate.
- The typing effect is applied character by character, followed by an untyping effect.
- If `loop` is enabled, the animation restarts after completing all lines.

### Customization Example
```html
<typewriter pause="4" typing-speed="80" untyping-speed="50" loop="false">
    <span>Custom pause duration.</span>
    <span>Faster typing and untyping.</span>
    <span>No looping!</span>
</typewriter>
```

## Contributing

Feel free to open issues or submit pull requests to enhance `typewriter.js`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
