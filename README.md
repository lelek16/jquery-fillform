#jquery-fillform
Auto fill form, base on input types

##Getting Started

### 1. Include js on your site.
```html
<script src="js/jquery.fillForm.js"></script>
```
### 2. Initialize
```html
<script>
   $('form').fillForm(); 
</script>
```


### 3. Options
#### all
`all` fill all input, or only required (base on required attribute) - true/false
#### custom
`custom` define your own values for input type
#### onStart
`onStart` before start
#### onChange
`onChange` before change every value
#### onEnd
`onEnd` after all
#### autoSubmit
`onEnd` auto submit form after fill

##License
MIT