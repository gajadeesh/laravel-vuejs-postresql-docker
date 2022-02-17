FROM php:8.0-fpm-alpine

# Copy composer.lock and composer.json into the working directory
# COPY composer.lock composer.json /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Install dependencies for the operating system software
RUN apk --no-cache add \
    && docker-php-ext-install \
     build-essential libpng-dev zip vim git curl \
         pdo_mysql \
         gd \

# Install composer (php package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy existing application directory contents to the working directory
# COPY . /var/www/html/server

# # Assign permissions of the working directory to the www-data user
# RUN chown -R www-data:www-data \
#     /var/www/html/server/storage \
#     /var/www/html/server/bootstrap/cache

# # Expose port 9000 and start php-fpm server (for FastCGI Process Manager)
# EXPOSE 9000
# CMD ["php-fpm"]