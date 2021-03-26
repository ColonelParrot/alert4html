# alert4html
A javascript library that enables you to insert HTML directly into your browser alerts.

### Easy to use, customize and expand with

Traditional alert using `alert('<h1>Header!</h1>')`:

![image](https://user-images.githubusercontent.com/65585002/112689284-736d4180-8e50-11eb-8702-fb7d5a962f7b.png)

With alert4html:

![image](https://user-images.githubusercontent.com/65585002/112689358-8b44c580-8e50-11eb-9995-940821b2bd76.png)

## Import

```
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/alert4html@main/src/script.min.js"></script>
```

## Documentation

Create a simple alert with HTML support:

```
new HTMLAlert('Alert!','<h1>Header!</h1>')
```

Customize the number of buttons, and the type of each button:

```
buttons = {
  "button1": {
    type: "proceed",
    content: "Yes"
  },
  "button2": {
    type: "cancel",
    content: "No"
  }
}
new HTMLAlert('Wait!', '<i>Are you sure?</i>', buttons);
```

Create a multiple choice alert (with a callback):

```
buttons = {
  "cheese": {
    type: "proceed",
    content: "cheese"
  },
  "pepperoni": {
    type: "proceed",
    content: "pepperoni"
  },
  "other": {
    type: "proceed",
    content: "other"
  },
  "idk": {
    type: "cancel",
    content: "I don't know"
  },

}
callback = function(content, type){
	console.log("You chose "+content);
	alert.destroy();
}
alert = new HTMLAlert('Poll!', "<b>What's your favorite pizza topping?</b>", buttons, callback);
```
