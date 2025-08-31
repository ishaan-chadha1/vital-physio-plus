# Docker Deployment Guide

## Prerequisites
- Docker installed and running on your system
- No environment variables required (all API dependencies have been removed)

## Quick Start

### Option 1: Using Docker Compose (Recommended)
```bash
# Build and run the container
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop the container
docker-compose down
```

### Option 2: Using Docker Commands
```bash
# Build the image
docker build -t vital-physio-plus .

# Run the container
docker run -p 3000:3000 vital-physio-plus

# Run in detached mode
docker run -d -p 3000:3000 --name vital-physio-container vital-physio-plus
```

## Access the Application
Once running, the application will be available at:
- **Local**: http://localhost:3000

## Container Details
- **Base Image**: Node.js 18 Alpine
- **Port**: 3000
- **Environment**: Production-optimized
- **Size**: ~200MB (optimized with multi-stage build)

## Troubleshooting

### Build Issues

**Problem**: Build fails with "Cannot find module 'tailwindcss'"
**Solution**: This is resolved in the updated Dockerfile that installs all dependencies including devDependencies during build.

**Problem**: Build fails with "Module not found" errors
**Solution**: Ensure all dependencies are installed and try rebuilding:
```bash
docker build --no-cache -t vital-physio-plus .
```

**Problem**: Environment variable format warnings
**Solution**: The Dockerfile has been updated to use the modern `ENV KEY=value` format.

### Container Issues

**Container fails to start**
- Ensure Docker daemon is running
- Check if port 3000 is available
- Review build logs: `docker logs vital-physio-container`

**Build takes too long**
- The build includes all dependencies and may take 5-10 minutes on first build
- Subsequent builds will be faster due to Docker layer caching

### Memory Issues
If you encounter memory issues during build, you can:
```bash
# Increase Docker memory limit to 4GB or more
# Build with reduced parallelism
docker build --build-arg NODE_OPTIONS="--max-old-space-size=4096" -t vital-physio-plus .
```

## Deployment to Cloud Platforms

### Deploy to Railway
```bash
# Push to your Git repository
git add .
git commit -m "Add Docker configuration"
git push

# Deploy using Railway CLI
railway login
railway link
railway up
```

### Deploy to DigitalOcean App Platform
1. Connect your GitHub repository
2. Select "Docker" as the build method
3. Set port to 3000
4. Deploy

### Deploy to AWS ECS/Fargate
1. Push image to ECR:
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin [account-id].dkr.ecr.us-east-1.amazonaws.com
docker build -t vital-physio-plus .
docker tag vital-physio-plus:latest [account-id].dkr.ecr.us-east-1.amazonaws.com/vital-physio-plus:latest
docker push [account-id].dkr.ecr.us-east-1.amazonaws.com/vital-physio-plus:latest
```

## Environment Variables
**None required!** All API dependencies have been removed from this project.

## File Structure
```
├── Dockerfile              # Optimized multi-stage production build
├── docker-compose.yml      # Compose configuration
├── .dockerignore           # Files to ignore during build
└── DOCKER.md              # This documentation
```

## Development
For local development, you can still use:
```bash
npm run dev
```

The Docker setup is optimized for production deployment.
