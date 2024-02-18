pipeline {
    agent any

    stages {
        stage ('install docker'){
            steps{
                script{
                    sh 'apt install docker -y'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t node-test .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    sh 'docker run -dp 5001:5001 node-test'
                }
            }
        }
    }
}
