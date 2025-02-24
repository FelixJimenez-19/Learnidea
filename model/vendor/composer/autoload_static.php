<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit01e67ca03f5382040edb2a71747dbdf8
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit01e67ca03f5382040edb2a71747dbdf8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit01e67ca03f5382040edb2a71747dbdf8::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
