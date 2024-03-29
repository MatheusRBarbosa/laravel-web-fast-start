<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('shared.head', [
'js' => ['js/auth/changePassword.js'],
'css' => ['css/auth/changePassword.css']
])

<body id="newPassword-page">
    <div class="sided-form">
        <div class="sided-content">
            <div class="row">
                <h2 class="text-center">Troque sua senha</h2>
            </div>
            <div class="row">
                <form method="POST" id="newPassword-form" onsubmit="sendPassword(event)" novalidate>
                    <div class="form-group">
                        <label for="name">E-mail *</label>
                        <input type="email" class="form-control" id="email" placeholder="meu@email.com" required>
                        @include('components.form.validation', ['invalidMessage' => "E-mail é obrigatório"])
                    </div>
                    <div class="form-group">
                        <label for="name">Código *</label>
                        <input type="text" maxlength="4" minlength="4" class="form-control" id="code" aria-describedby="nameHelp" placeholder="123456" required>
                        @include('components.form.validation', ['invalidMessage' => "Código de 4 digitos é obrigatório"])
                    </div>
                    <div class="form-group">
                        <label for="password">Senha *</label>
                        <input type="password" class="form-control" id="password" placeholder="******" minlength="6" required>
                        @include('components.form.validation', ['invalidMessage' => "Senha precisa de 6 caracteres"])
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">Confirmar senha *</label>
                        <input type="password" class="form-control" id="password-confirm" placeholder="******" minlength="6" required>
                        @include('components.form.validation', ['invalidMessage' => "Confirmação de senha precisa de 6 caracteres"])
                    </div>
                    <div class="d-flex flex-column button-position">
                        <button id="newPassword-button" type="submit" class="btn btn-primary">Confirmar</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="forgot-password"><small>Voltar e gerar novo código</small></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('components.toast.default-toast');
</body>

</html>