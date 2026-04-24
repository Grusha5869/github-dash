import localFont from 'next/font/local';

export const robotoVar = localFont({
    src: '../public/fonts/RobotoVariable.ttf',
    variable: '--font-roboto-flex',
    display: 'swap', // Оптимизирует загрузку
});