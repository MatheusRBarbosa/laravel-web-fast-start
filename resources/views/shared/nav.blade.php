<head>
    <link type="text/css" rel="stylesheet" href="{{ asset('css/shared/navbar.css') }}">
    </link>
    <script src="{{ asset('js/shared/navbar.js') }}"></script>
</head>
<nav class="navbar navbar-light fixed-top">
    <div>
        <div class="nav-principal-options">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/"><b>Unamed Project</b></a>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offset-body-options">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" href="/"><i class="bi bi-back"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/link""><i class=" bi bi-alarm-fill"></i>Link</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</nav>