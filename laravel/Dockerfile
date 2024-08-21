FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk --no-cache add \
    bash \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    zlib-dev \
    libzip-dev \
    git \
    unzip \
    oniguruma-dev \
    icu-dev \
    g++ \
    make \
    autoconf \
    bash

# Install PHP extensions and configure gd
RUN apk add --no-cache \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    libwebp-dev \
    && docker-php-ext-configure gd \
        --with-freetype \
        --with-jpeg \
        --with-webp \
    && docker-php-ext-install gd mysqli pdo pdo_mysql zip intl bcmath

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application code
COPY . /var/www

# Install Composer dependencies
RUN composer install --no-interaction --optimize-autoloader
# Expose port
EXPOSE 9000

# Start PHP-FPM server
CMD ["php-fpm"]
