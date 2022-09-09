<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('shared.head', [
'js' => ['js/auth/forgotPassword.js'],
'css' => ['css/auth/forgotPassword.css']
])

<body id="forgotPassword-page">
    <div class="row" style="height: 100%;">
        <div class="col-8"></div>
        <div class="col-4 d-flex flex-column justify-content-center align-items-center sided-form">
            <div class="row">
                <b>Enviaremos o código de recuperação para o seu e-mail cadastrado.</b>
            </div>
            <div class="row">
                <form method="POST" id="forgot-form" onsubmit="send(event)" novalidate>
                    <div class="form-group">
                        <label for="email">E-Mail *</label>
                        <input type="email" class="form-control" id="email" placeholder="meu@email.com" required>
                        @include('components.form.validation', ['invalidMessage' => "E-mail é obrigatório"])
                    </div>
                    <div class="d-grid gap-2 col-12 mx-auto button-position">
                        <button id="send-button" type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="login"><small>Voltar para o login</small></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('components.toast.default-toast');
</body>

</html>