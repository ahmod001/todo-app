# Todo App

<img src="https://github.com/user-attachments/assets/2f9ef13f-4c4a-4c2d-b176-8ff71a47ae4e" alt="App Preview" width="100%">

A simple and fully dynamic Todo application where users can create and manage their tasks seamlessly. Built with modern web technologies.

## Technologies Used

- **Laravel 10**
- **React 18**
- **TanStack React Query**
- **Inertia.js**
- **Axios**

## Features

- Create, update, and delete Todos.
- Dynamic and real-time interaction between front-end and back-end.
- Responsive design for better usability.
- Modern tech stack for a smooth user experience.

## Installation and Setup

Follow the steps below to get the application running on your local machine:

### Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js and npm/yarn
- MySQL or any other supported database

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd todo-app
   ```

2. **Install PHP dependencies**

   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure the environment**

   Copy the `.env.example` file to `.env` and update the database credentials and other configuration variables.

   ```bash
   cp .env.example .env
   ```

5. **Generate application key**

   ```bash
   php artisan key:generate
   ```

6. **Run migrations**

   ```bash
   php artisan migrate
   ```

7. **Build assets**

   ```bash
   npm run dev
   # or for production
   npm run build
   ```

8. **Start the development server**

   ```bash
   php artisan serve
   ```

9. **Access the application**

   Open your browser and navigate to `http://localhost:8000`.

## Usage

- Navigate to the Todo section to add your tasks.
- Edit or delete tasks directly from the UI.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. For major changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉
