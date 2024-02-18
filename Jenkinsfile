pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the GitHub repository
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image using Dockerfile in the repository
                    docker.build('node-test')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    docker.image('node-test').run('-p 5001:5001 -d')
                }
            }
        }
    }
}
