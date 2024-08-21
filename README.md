# Thiio DevOps Challenge


Create a enviroment implementing docker compose with 4 services.

-   Laravel Application
-   Nginx
-   MySQL
-   random http docker image ()

**Laravel image**: must implement a alpine docker image, needs to connect to mysql, the root path must retrieve some register from the database to assert database connection. This image must communicate implementing  _**php-fpm**_  with nginx. Optional: The start script must automatic create the migrations and seed if this is not ready and then start the fpm server

**Nginx**: All the request from the domain devops.test must be attended by the laravel service, except the path  _**/thiio**_  this must proxy to the random http docker image service.

**Optional**: if the request arrive with other domain this must be redirected to  _**devops.test**_

**Random HTTP Docker Image (Optional)**: This service must implement a docker compose profile with the name of your prefence. Its importante that  _**docker compose up**_  can start without this random http service, but when you execute  _**docker compose --profile random up**_  now the path  _**/thiio**_  must response the questions


## Usage

This Project has two **NGINX** configuration files. the **default.conf** and **random.conf**.  We can specify which config file we are going to use in **.env**

    NGINX_CONF_FILE=default.conf
    #NGINX_CONF_FILE=random.conf
  
 If you choose to run the containers without the random service, follow these steps

1. Clone this repository:

    ```bash
    git clone https://github.com/JGuille/thiio.git
    ```

2. Navigate to the directory:

    ```bash
    cd thiio
    ```
  
3. Start containers:

    ```bash
    docker-compose up --build
    ```

4. Setup DB:

    ```bash
    docker-compose run laravel php artisan migrate
    ```
5. Run tests:

    ```bash
    docker-compose run laravel php artisan test  
    ```
6. Go to http://devops.test
##
 If you choose to run the containers with the random service, follow these steps

1. Clone this repository:

    ```bash
    git clone https://github.com/JGuille/thiio.git
    ```

2. Navigate to the directory:

    ```bash
    cd thiio
    ```
 3. Modify the **.env** file to look like this:

    ```bash
    #NGINX_CONF_FILE=default.conf
    NGINX_CONF_FILE=random.conf
    ```
  
4. Start the containers:

    ```bash
    docker-compose --profile random up --build
    ```

5. Setup DB:

    ```bash
    docker-compose run laravel php artisan migrate
    ```
6. Run tests:

    ```bash
    docker-compose run laravel php artisan test  
    ```
7. Go to http://devops.test and http://devops.test/thiio