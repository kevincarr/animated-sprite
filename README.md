# animated-sprite

This is a JavaScript (with jQuery) file that uses a background image of a div to create an animation and an optional rollover effect.

## Requirements

The functions in the spriteControl.js uses jQuery.

## Using these functions

### Adding the spriteControl.js to a webpage.

Put the spriteControl.js file into the website's js folder.

Include this in the html page:

```javascript
<script src="js/spriteControl.js" />
```

### Creating a class for the animated div

```javascript
.spriteAnimation{
    width:40px; /* This is the width of the div */
    height:40px; /* This is the height of the div */
    max-height:200px; /* This is the height of the div's background image */
    background:url('../img/spriteAnimation.png'); /* This is the div's background image */
}
```
### Initializing the div

```javascript
kcSpriteInit(ANIMATED_DIV, IS_BUTTON, ANIMATION_SPEED);
```

#### Examples:

Animation with rollover
```javascript
kcSpriteInit($("#myDivAnimatedA"), true, 600);
```

Fast animation with rollover
```javascript
kcSpriteInit($("#myDivAnimatedB"), true, 100); 
```

Animation without the rollover
```javascript
kcSpriteInit($("#myDivAnimatedC"), false, 200);
```
