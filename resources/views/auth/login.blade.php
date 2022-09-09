<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('shared.head', [
'js' => ['js/auth/login.js'],
'css' => ['css/auth/login.css']
])

<body id="login-page" class="container">
    <div class="row justify-center card-position">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title text-center">Login</h5>
            </div>
            <div class="card-body">
                <form method="POST" id="login-form" onsubmit="login(event)" novalidate>
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
                    <!-- <div class="form-group form-check check-position">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <div class="d-grid gap-2 col-12 mx-auto button-position">
                        <button id="login-button" type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="signup"><small>Or create your account</small></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    @include('components.toast.default-toast');
</body>

</html>