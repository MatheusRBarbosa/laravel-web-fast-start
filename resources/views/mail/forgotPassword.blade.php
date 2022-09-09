<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="pt-br" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <style type="text/css">
        html,
        body {
            border: 0 !important;
            margin: 0 !important;
            width: 100% !important;
        }

        h1 {
            font-weight: bold;
            color: #008489;
        }

        p {
            color: #008489;
            font-weight: 500;
            font-size: 18px;
        }

        .container {
            width: 95%;
            background-color: white;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            padding: 20px;
            text-align: center;
            border: 3px #008489 solid;
            border-radius: 5px;
        }

        .code {
            font-weight: bold;
            font-size: 26px;
            color: #008489;
        }

        .obs {
            font-weight: 300;
            font-size: 15px;
            color: #9fbbc9;
        }

        img {
            height: 3rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Projeto</h1>
        <!-- <img src="{{asset('images/logo.png')}}" alt=""> -->
        <p>Use este código para recuperar sua senha.</p>
        <label class="code">{{ $user->confirmation->code }}</label>
        <p class="obs">Esse e-mail é automático, por favor não responda.</p>
    </div>
</body>

</html>