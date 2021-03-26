# alert4html
A javascript library that enables you to insert HTML directly into your browser alerts, whilst also simulating Chrome alerts.

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

![image](https://user-images.githubusercontent.com/65585002/112697280-9b16d680-8e5d-11eb-80f8-729fbf0ad38c.png)

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
![image](https://user-images.githubusercontent.com/65585002/112697334-b2ee5a80-8e5d-11eb-8b83-1d4d99a989b7.png)


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
![image](https://user-images.githubusercontent.com/65585002/112697386-cac5de80-8e5d-11eb-81c7-c2777d5a34cc.png)
