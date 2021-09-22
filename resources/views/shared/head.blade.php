<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link type="text/css" rel="stylesheet" href="{{ mix('css/app.min.css') }}">
    <script src="{{ asset('css/global.css') }}"></script>

    @foreach ($css ?? [] as $file)
    <link href={{ asset($file) }} rel="stylesheet" />
    @endforeach

    <script src="{{ mix('js/app.min.js') }}"></script>
    <script src="{{ asset('js/global.js') }}"></script>

    @foreach ($js ?? [] as $file)
    <script src={{ asset($file) }}></script>
    @endforeach

    <title>{{ $title ?? "Unamed project" }}</title>
</head>