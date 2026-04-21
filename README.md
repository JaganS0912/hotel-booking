# Log Pattern Analyzer — Hotel Booking System

A diagnostic tool built to resolve performance issues in the Online Hotel Booking System caused by excessive logging. This application analyzes log file content and identifies repetitive word patterns with their frequency counts.

## Live Demo

**[https://jagans0912.github.io/hotel-booking/](https://jagans0912.github.io/hotel-booking/)**

## Features

- Paste any log file content into the input box
- Analyzes all word patterns and counts occurrences
- Results displayed in **descending order** by frequency
- Visual frequency bars for quick identification of hot patterns
- Sample log data included for quick demo

## Architecture

```
┌─────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Developer   │────▶│  GitHub Actions   │────▶│  GitHub Pages    │
│  git push    │     │  CI/CD Pipeline   │     │  (Live UI URL)   │
└─────────────┘     └──────┬───────────┘     └──────────────────┘
                           │
                    ┌──────▼───────────┐
                    │  Docker Build     │
                    │  & Container Test │
                    └──────────────────┘
```

## CI/CD Pipeline (GitHub Actions)

The fully automated build and deploy flow:

1. **Build Docker Image** — Builds the app using a custom `Dockerfile` (nginx:alpine)
2. **Container Verification** — Runs the container and verifies it responds on port 80
3. **Deploy to GitHub Pages** — Publishes the static UI for live access

## Run Locally with Docker

```bash
# Build the container
docker build -t log-pattern-analyzer .

# Run it
docker run -d -p 8080:80 log-pattern-analyzer

# Open http://localhost:8080
```

## Tech Stack

| Component       | Technology          |
|----------------|---------------------|
| Frontend       | HTML5, CSS3, JavaScript |
| Containerization | Docker (nginx:alpine) |
| CI/CD          | GitHub Actions      |
| Hosting        | GitHub Pages        |
| Version Control | Git + GitHub       |
