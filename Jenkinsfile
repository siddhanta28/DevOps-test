pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Build steps go here'
            }
        }
    }


        stage('Test') {
            steps {
                echo 'Test steps go here'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment steps go here'
            }
        }
    }
}
