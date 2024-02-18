pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Your Docker-related commands here
                    sh 'docker build -t node-test .'
                }
            }
        }
    }
}
