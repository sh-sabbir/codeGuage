![alt text](codeGuage_preview.gif "codeGauge in action!")

# codeGauge
Basic gauge component made with CSS style rules & made dynamic with jquery. No SVG or canvas used in this component.

<br>
<br>
<br>

## Available options

|   option	        | default value |   details	  	|
|---	            |---	        |---		    |
|part_1_size  	    |   50	        |Defines the size of Part 1 in percentage|
|part_2_size   	    |   20	        |Defines the size of Part 2 in percentage|
|part_3_size   	    |   10	        |Defines the size of Part 3 in percentage|
|part_4_size   	    |   20	        |Defines the size of Part 4 in percentage|
|part_1_color   	| #FD5E53	    |Defines the color of Part 1|
|part_2_color   	| #B0EACD	    |Defines the color of Part 2|
|part_3_color   	| #21BF72	    |Defines the color of Part 3|
|part_4_color   	| #B0EACD	    |Defines the color of Part 4|
|marker_position   	|  30 	        |Set marker position between 0 - 100|
|marker_color   	| #101010       |Set marker color  	 	    |

<br>
<br>
<br>

## How to use
codeGauge needs `jQuery` to work.

Include codeGauge.min.css & codeGauge.min.js to your page:

```html
<!-- Css -->
<link rel="stylesheet" href="codeGauge.min.css">

<!-- Javascripts -->
<script src="path_to_your_jquery"></script>
<script src="codeGauge.min.js"></script>
```
Add some markup:
```html
<div id="demoGauge"></div>
```

Instantiate codeGauge like bellow:
```html
<script type="text/javascript">
    jQuery( document ).ready(function($) {
        var myGauge = $("#demoGauge").codeGuage({
            part_1_size: 70,
            part_2_size: 10,
            part_3_size: 10,
            part_4_size: 10,
            part_1_color: '#FD5E53',
            part_2_color: '#B0EACD',
            part_3_color: '#21BF72',
            part_4_color: '#B0EACD',
            marker_position: 70,
            marker_color: '#101010',
        });

        //Chnge the marker position if needed
        //myGauge.setPosition(60);
    });
</script>
```
