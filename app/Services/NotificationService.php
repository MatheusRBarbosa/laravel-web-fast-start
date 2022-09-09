<?php

namespace App\Services;

use App\Mail\ForgotPasswordEmail;
use Illuminate\Support\Facades\Mail;

class NotificationService
{
    public function __construct()
    {
        //
    }

    /**
     * 
     */
    public function sendForgotEmail($user)
    {
        $template = new ForgotPasswordEmail($user);
        $this->sendEmail($user->email, $template);
    }

    /**
     * 
     */
    private function sendEmail($recipient, $template)
    {
        $mailTo = Mail::to($recipient);
        $mailTo->send($template);
    }
}
