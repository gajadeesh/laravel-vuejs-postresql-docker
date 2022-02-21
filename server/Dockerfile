FROM php:8.0-fpm-alpine



# Install composer (php package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies for the operating system software
RUN set -ex \
                && apk --no-cache add postgresql-dev nodejs yarn npm\
                && docker-php-ext-install pdo_pgsql pgsql

#Copy server to docker directory
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html

# # Assign permissions of the working directory to the www-data user
RUN chown -R www-data:www-data \
    /var/www/html/storage \
    /var/www/html/bootstrap/cache 
