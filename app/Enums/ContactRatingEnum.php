<?php

namespace App\Enums;

enum ContactRatingEnum: int
{
    case GOOD = 1;
    case AVERAGE = 2;
    case POOR = 3;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
