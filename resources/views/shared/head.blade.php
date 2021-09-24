<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link type="text/css" rel="stylesheet" href="{{ mix('css/webpack/app.min.css') }}">
    </link>
    <link src="{{ asset('css/global.css') }}">
    </link>

    @foreach ($css ?? [] as $file)
    <link href={{ asset($file) }} type="text/css" rel="stylesheet" />
    @endforeach

    <script src="{{ mix('js/webpack/app.min.js') }}"></script>
    <script src="{{ mix('js/webpack/components.js') }}"></script>
    <script src="{{ asset('js/global.js') }}"></script>

    @foreach ($js ?? [] as $file)
    <script src={{ asset($file) }}></script>
    @endforeach

    <title>{{ $title ?? "Unamed project" }}</title>
</head>