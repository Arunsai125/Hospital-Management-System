#!/bin/bash

# Exit on error
set -e

echo "Creating backend and frontend directories..."
mkdir -p backend frontend

echo "Adding .gitkeep files..."
touch backend/.gitkeep frontend/.gitkeep

echo "Initializing React app in frontend (this may take a minute)..."
npx create-react-app frontend

echo "Adding .gitignore..."
cat <<EOL > .gitignore
# Java
/target/
*.class
*.jar
*.war
*.ear

# Maven
/logs/
/.mvn/
!/.mvn/wrapper/maven-wrapper.jar

# Spring Boot
spring.log

# React
node_modules/
build/
dist/
.env

# OS
.DS_Store
Thumbs.db

# IDEs
.idea/
*.iml
*.ipr
*.iws
.vscode/
EOL

echo "Adding and committing to git..."
git add .
git commit -m "chore: project structure, .gitignore, and frontend initialization"

echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://start.spring.io/"
echo "   - Project: Maven"
echo "   - Language: Java"
echo "   - Group: com.hms"
echo "   - Artifact: backend"
echo "   - Dependencies: Spring Web, Spring Security, Spring Data JPA, MySQL Driver, Lombok"
echo "2. Download and unzip the project, then move its contents into the backend folder."
echo "3. Run:"
echo "   git add backend"
echo "   git commit -m 'feat(backend): initialize Spring Boot project with Maven'"
echo ""
echo "Let me know when you're done and ready for the next feature branch!"
