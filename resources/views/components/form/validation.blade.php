@if (isset($invalidMessage) && !empty($invalidMessage))
<div class="invalid-feedback">
    {{$invalidMessage}}
</div>
@endif

@if (isset($validMessage) && !empty($validMessage))
<div class="valid-feedback">
    {{$validMessage}}
</div>
@endif