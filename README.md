
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/35add36b-0df6-475f-9565-197c0ad512bc

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/35add36b-0df6-475f-9565-197c0ad512bc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

**Requirements:**
- Node.js 20 or higher - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies with legacy peer deps flag.
npm install --legacy-peer-deps

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

**Option 1: Using Lovable (Recommended)**

Simply open [Lovable](https://lovable.dev/projects/35add36b-0df6-475f-9565-197c0ad512bc) and click on Share -> Publish.

**Option 2: Production Build for Server Deployment**

To build and deploy this project on your own server:

```sh
# Step 1: Install dependencies
npm install --legacy-peer-deps

# Step 2: Build the project for production
npm run build

# Step 3: Preview the production build locally (optional)
npm run preview

# Step 4: Deploy the 'dist' folder to your server
# The built files will be in the 'dist' directory
# Upload this directory to your web server or hosting platform
```

**Server Requirements:**
- Node.js 20 or higher
- A web server (nginx, Apache, or any static file server)
- HTTPS recommended for production

**Static Hosting Options:**
- Vercel: `vercel --prod`
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Upload `dist` contents to your gh-pages branch
- Any CDN or static hosting service

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
