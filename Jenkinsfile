pipeline {
    agent {
        docker {image 'node:16-alpine'}
    }

    stages {
        stage('node version') {
            steps {
                script {
                    // Build Docker image using Dockerfile in the repository
                    sh 'node --version'
                }
            }
        }

    }
}
