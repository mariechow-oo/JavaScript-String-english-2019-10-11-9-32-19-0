<!DOCTYPE html>
<html>

<head>

</head>

<body>
  <!-- <script type="javascript" src="./test.js"> -->
  <script>
    // Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
    var name = 'hello';
    name.toUpperCase();


    // Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
    var sentence = 'good afternoon, mr mike.';
    sentence = sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    // Complete the following procedure to extract the amount of money variable, output: 20.
    var money = '￥20';
    money = money.replace("￥", "");

  </script>
  test page
</body>

</html>
