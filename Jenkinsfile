pipeline {
    agent {
        docker {
            image 'node:16-alpine'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Your Docker-related commands here
                    sh 'node --version'
                }
            }
        }
    }
}
