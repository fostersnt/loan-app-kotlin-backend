<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>USER NAME: <span id="userName"></span></h1>
    @vite('resources/js/app.js')
</body>
</html>

<script type="module">
    console.log("HELLO WORLD");
    Echo.channel(`users`)
    .listen('.user.created', (e) => {
        console.log("GHANA");
        let userData = e.userData;
        let userName = userData.name;
        document.getElementById('userName').innerHTML = userName
        console.log(`USER DATA === ${e.userData}`);
    });
</script>
