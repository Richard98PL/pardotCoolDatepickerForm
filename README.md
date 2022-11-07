# pardotCoolDatepickerForm

In Form Settings mark date field as a text field and add CSS class called 'datepicker'

In layout template we need the tag of manually addedd css classes in the form settings:  %%form-field-css-classes%%

Then we just simply use Jquery (ps script must be after <body> since it is generated first)

<link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" /><script src="https://code.jquery.com/jquery-1.12.4.js"></script><script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js">

<body>
...
</body>
  
<script>
            $(".datepicker input").datepicker({
            	minDate: 0,
            	maxDate: "+1M",
            	dateFormat: "yy-mm-dd",
            	showAnim: "blind",
            	firstDay: 1,
            	showButtonPanel : true,
                beforeShowDay: $.datepicker.noWeekends
            });
            
             $(".datepicker input").attr('readonly', true);
            
        </script>

  
  ![image](https://user-images.githubusercontent.com/41301282/200298286-59a2c324-e5d3-4711-99e0-a12f7767e232.png)
