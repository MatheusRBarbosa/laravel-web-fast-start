<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('shared.head', [
'js' => ['js/auth/forgotPassword.js'],
'css' => ['css/auth/forgotPassword.css']
])

<body id="forgot-page">
    <div class="sided-form">
        <div class="sided-content">
            <div class="row">
                <b>Enviaremos o código de recuperação para o seu e-mail cadastrado.</b>
            </div>
            <div class="row">
                <form method="POST" id="forgot-form" onsubmit="send(event)" novalidate>
                    <div class="form-group">
                        <label for="email">E-mail *</label>
                        <input type="email" class="form-control" id="email" placeholder="meu@email.com" required>
                        @include('components.form.validation', ['invalidMessage' => "E-mail é obrigatório"])
                    </div>
                    <div class="d-flex flex-column">
                        <button id="send-button" type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="login"><small>Voltar para o login</small></a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="change-password"><small>Já tenho o código</small></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('components.toast.default-toast');
</body>

</html>