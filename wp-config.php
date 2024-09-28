<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'v {&[6jIy_Yx=?Oy3h;m#O`[Wpnfcg-B4schR&:9K~1QYxHIdHh{9w/qF)dZ1+8[' );
define( 'SECURE_AUTH_KEY',   'LzthAM5g#N],Iy5 9[7sE@u[Y%]xD{ZCAPz+_<OK3JT2dt zu`@/9z&qF0HOb{ZG' );
define( 'LOGGED_IN_KEY',     'CV1Wj <W]-8Lkt%v$=UI|5P6<LDk5XCV8aP6@.;WWwY:r/DL`]PtR0F@,I@>w7F)' );
define( 'NONCE_KEY',         '_59ct;.$</a8,BP.%0uKfrl{D{KL.4l;MHC}6`_t/I@Zc$50}gDmwj?YUs,c>J^P' );
define( 'AUTH_SALT',         'Kj7+U8sTILao{WBg)d,=*]o}h_v(Fttmd (,Fv6Ho/*0gcT.xmaPjBkbB29,h-s[' );
define( 'SECURE_AUTH_SALT',  'Zuh[LK<m}l2E*<biwIiDm6(HDCG>` gDH#R|;AubZ`Oo&Sj~o>_y@~,^!L_QU+_D' );
define( 'LOGGED_IN_SALT',    '7f_|MvD<H V&n@{6,TLd7*0/A0@<iC+p/Qll!$TlVe~5}>PbwQ/3O<eP4-w<#XT~' );
define( 'NONCE_SALT',        '$=!K %3(M].cD*GnPM(fK/Y1_F2]mcq+>M6p+oP~zd@[y``!ckM9@ju@pCz~8s[6' );
define( 'WP_CACHE_KEY_SALT', 'cHhLa9Bo!A8Cd7+Ok&esN64eE-PlqCqNy~O#XInCnhW_hpTxt8Ns:TrjPdyMp,V4' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
