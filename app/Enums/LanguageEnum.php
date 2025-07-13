<?php

namespace App\Enums;

enum LanguageEnum: int
{
    case ENGLISH = 1;
    case POLISH = 2;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
