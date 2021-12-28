# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

#builds navigation

A navigation bar (or navigation system) is a section of a graphical user interface intended to aid visitors in accessing information. giving the associated navigation list item a your-active-class. You feed it a list of elements and a function that returns navbar list items, and it returns a nav element populated with navigation items. You can dress this up with CSS to make it look how you like.

##How to build

To start using it, include the **css** and **js** files in **Html**.
Just add a link to the css file in your <head>:
```html
  <link href="css/styles.css" rel="stylesheet">
```

And load any from Google Fonts .
Then, before your closing <body> tag add:
```html
<script src="js/app.js"></script>
```
##How to build Nav in JavaScript functions

####createNavItem  
you need create elements for 'li' and 'a' , then add all section to nav, set href attribute.
```js
 newaElement.setAttribute('href', '#' + section.id);
```
 after then add menu__link and link__active .
____
####initNavBar
 create fragment because you need empty DocumentFragment for add createNavItem.
```js
    const navfragment = document.createDocumentFragment();
```
____
####scrollHandler
add Event Listener to this nav:
```js
getNavlist.addEventListener('click', function (e) {});
```
in this Event Listener you need get  the 'herf':
```js
  const targetSection =  document.querySelector(targetLink.getAttribute('href'));
```
Because i need it Scroll to target section using scrollIntoView method:
```js
        targetSection.scrollIntoView({ behavior: "smooth" });
```
____
####toggleActiveState
Add Event Listener to listen when the page scroll.
check if current section on screen or not by using isInViewport function if is in on screen, active the class to nav links while scrolling.