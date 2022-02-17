FROM php:8.0-fpm-alpine

RUN apk --no-cache add postgresql-dev nodejs npm \
        && docker-php-ext-install \
            pdo \
            pdo_pgsql \
            pgsql 

WORKDIR /var/www/html

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer