# Lundberg Portfolio Website

A modern, interactive portfolio website for Lundberg, showcasing projects and skills.

## Requirements

### Node.js Version

This project requires **Node.js 20.x** or later.

To check your Node.js version:

```bash
node --version
```

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

## Installation

```bash
# Clone the repository (replace with your actual repository URL)
git clone <YOUR_GIT_REPOSITORY_URL>
cd lundberg

# Install dependencies with legacy peer deps flag
# This flag is needed to resolve potential dependency conflicts
npm install --legacy-peer-deps
```

## Development

```bash
# Start the development server
npm run dev
```

This will start the Vite development server, typically at [http://localhost:8080](http://localhost:8080) (as per your `vite.config.ts`).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to production server (runs `deploy.sh`)
- `npm run deploy:production` - Deploy to production server (also runs `deploy.sh`)

## Production Deployment

### Automated Deployment

This project includes an automated deployment script for easy production deployment:

#### Deployment Script

```bash
npm run deploy 
# or
npm run deploy:production
```

This runs the `deploy.sh` script which:
- 🚀 Installs dependencies (if not already up-to-date)
- 🔨 Builds the project for production
- 📂 Deploys to `/var/www/lundberg.ai/`
- 🔧 Sets proper file ownership and permissions
- 🔄 Reloads nginx
- ✅ Provides deployment status feedback

### Prerequisites for Automated Deployment

Before using the deployment script, ensure:

1.  **Server Setup:**
    *   Nginx is installed and configured.
    *   The web directory `/var/www/lundberg.ai/` exists.
    *   The user running the script has `sudo` privileges for the necessary commands.

2.  **Nginx Configuration Example:**
    ```nginx
    server {
        listen 80;
        server_name lundberg.ai www.lundberg.ai; # Adjust if you don't use www
        root /var/www/lundberg.ai;
        index index.html;
        
        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    ```
    *Remember to set up SSL (HTTPS) for a production site. This example is for HTTP.*

3.  **Permissions:**
    *   The deployment user has `sudo` access for file operations in `/var/www/lundberg.ai/` and for reloading nginx.
    *   The web directory `/var/www/lundberg.ai/` should be writable by the deployment process (handled by `sudo` in the script).

### Manual Deployment Options

#### Building for Production

```bash
# Build the project
npm run build
```

This creates a `dist` folder in your project root with optimized static files ready for deployment.

#### Option 1: Using a Static File Server (e.g., `serve`)

A simple way to serve your static files:

```bash
# Install serve globally (if you haven't already)
npm install -g serve

# Serve the dist folder
serve -s dist -l 3000 # Serve on port 3000
```

#### Option 2: Docker Deployment

Create a `Dockerfile` in your project root:
```dockerfile
# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the build output to Nginx's web root directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
```

Build and run the Docker image:
```bash
# Build the image
docker build -t lundberg-portfolio .

# Run the container
docker run -p 80:80 lundberg-portfolio
```

### Popular Hosting Platforms

-   **Vercel:** Connect your Git repository. Set build command to `npm run build` and the output directory to `dist`.
-   **Netlify:** Connect your Git repository. Set build command to `npm run build` and the publish directory to `dist`.
-   **GitHub Pages:** Configure your repository to deploy from the `dist` folder (e.g., using a GitHub Action or by pushing the `dist` contents to a `gh-pages` branch).
-   **AWS S3 + CloudFront:** Upload the contents of the `dist/` folder to an S3 bucket configured for static website hosting, and optionally serve it through CloudFront for CDN benefits.

## Project Structure

A simplified overview of the project structure:
```
lundberg/
├── public/               # Static assets (e.g., favicon.ico)
├── src/
│   ├── components/       # Reusable UI components (including shadcn/ui)
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Page components for different routes
│   ├── lib/              # Utility functions, etc.
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main application component with routing
│   ├── main.tsx          # Entry point of the React application
│   └── index.css         # Global styles and Tailwind imports
├── deploy.sh             # Automated deployment script
├── index.html            # Main HTML file
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and dependencies
```

## Features

-   ✨ **Modern Tech Stack:** Vite + React + TypeScript
-   🎨 **Styling:** Tailwind CSS with shadcn-ui components for a consistent and modern UI.
-   📱 **Responsive Design:** Adapts to various screen sizes.
-   🚀 **Performance Optimized:** Vite provides fast builds and optimized output.
-   🔧 **Developer Experience:** Fast Hot Module Replacement (HMR), TypeScript support.
-   🔩 **Automated Deployment:** Includes a `deploy.sh` script for server deployment.

## Browser Support

This project aims to support the latest stable versions of major browsers:
-   Chrome
-   Firefox
-   Safari
-   Edge

## Troubleshooting

### Deployment Issues

If the `deploy.sh` script fails:

1.  **Check Script Permissions:** Ensure `deploy.sh` is executable (`chmod +x deploy.sh`).
2.  **Sudo Privileges:** Verify the user running the script has the necessary `sudo` rights without requiring a password for the commands in the script, or can enter a password when prompted.
3.  **Directory Permissions:**
    Ensure `/var/www/lundberg.ai/` exists and that the `www-data` user (or your Nginx user) will have read access after deployment. The script attempts to set ownership to `www-data:www-data`.
    If you encounter permission issues accessing the site *after* deployment, you might need to adjust permissions on `/var/www/lundberg.ai/` or its parent directories.
4.  **Nginx Status & Configuration:**
    ```bash
    sudo systemctl status nginx
    sudo nginx -t # Test Nginx configuration
    ```
    Check Nginx error logs (usually in `/var/log/nginx/error.log`).
5.  **Build Output:**
    Verify the build was successful and the `dist/` folder contains files:
    ```bash
    npm run build
    ls -la dist/
    ```

## Contact

For questions or support, contact: [viktor@lundberg.ai](mailto:viktor@lundberg.ai)

## License

Private project - All rights reserved.
