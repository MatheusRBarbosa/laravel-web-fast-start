<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('shared.head', [
'js' => ['js/user/signup.js'],
'css' => ['css/user/signup.css']
])

<body id="signup-page">
    <div class="row" style="height: 100%;">
        <div class="col-8"></div>
        <div class="col-4 d-flex flex-column justify-content-center align-items-center sided-form">
            <div class="row">
                <h1>Create your account now</h1>
            </div>
            <div class="row">
                <form method="POST" id="signup-form" onsubmit="signup(event)" novalidate>
                    <div class="form-group">
                        <label for="name">Full name</label>
                        <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="your name" required>
                        @include('components.form.validation', ['invalidMessage' => "Name is required"])
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="your@email.com" required>
                        @include('components.form.validation', ['invalidMessage' => "Invalid email"])
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="******" minlength="6" required>
                        @include('components.form.validation', ['invalidMessage' => "Password needs at least 6 characters"])
                    </div>
                    <div class="form-group">
                        <label for="password-confirm">Password confirmation</label>
                        <input type="password" class="form-control" id="password-confirm" placeholder="******" minlength="6" required>
                        @include('components.form.validation', ['invalidMessage' => "Password confirmation needs at least 6 characters"])
                    </div>
                    <div class="d-grid gap-2 col-12 mx-auto button-position">
                        <button id="signup-button" type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="login"><small>Already has account? Login!</small></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('components.toast.default-toast');
</body>

</html>