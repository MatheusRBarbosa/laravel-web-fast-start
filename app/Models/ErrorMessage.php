<?php

namespace App\Models;

class ErrorMessage
{
    // Default (0xxx)
    const UserNotFound = [
        'code'      => 0001,
        'error'     => 'Usuário não encontrado',
        'message'   => 'Usuário não foi encontrado.',
    ];

    // Login (1xxx)
    const LoginInvalidCredentials = [
        'code'      => 1000,
        'error'     => 'Credenciais Inválidas!',
        'message'   => 'As credenciais que você digitou são inválidas. Veja se digitou tudo corretamente e tente novamente.'
    ];

    const LoginRefreshFail = [
        'code'      => 1001,
        'error'     => 'Falha ao atualizar o token',
        'message'   => 'Tente novamente mais tarde.'
    ];

    // Permissions (2xxx)
    const NoPermission = [
        'code'      => 2000,
        'error'     => 'Sem permissão!',
        'message'   => 'Você não tem acesso a essa funcionalidade.'
    ];

    // Validation code (3xxx)
    const CodeInvalid = [
        'code'      => 3000,
        'error'     => 'Código inválido',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];

    const CodeExpired = [
        'code'      => 3001,
        'error'     => 'Código expirado',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];

    const CodeAlreadyInUse = [
        'code'      => 3002,
        'error'     => 'Código já utilizado',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];

    // Validations (4xxx)
    const BadCpf = [
        'code'      => 4000,
        'error'     => 'CPF não é válido.',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];

    const CpfAlreadyInUse = [
        'code'      => 4001,
        'error'     => 'CPF já cadastrado.',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];

    const EmailNotFound = [
        'code'      => 4002,
        'error'     => 'E-mail não encontrado!',
        'message'   => 'Não encontramos este e-mail cadastrado conosco, por favor digite um e-mail válido.'
    ];

    const EmailAlreadyInUse = [
        'code'      => 4003,
        'error'     => 'E-mail já cadastrado',
        'message'   => 'Verifique se os dados foram digitados corretamente e tente novamente.'
    ];
}
