pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'python app.py'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp app.py /var/www/html/app.py'
                sh 'python /var/www/html/app.py'
            }
        }
    }
}
