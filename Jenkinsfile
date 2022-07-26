pipeline {
  agent any
  stages {
    stage('hello') {
      steps {
        sh 'echo "Hello Worlddd"'
      }
    }
    stage('Pull Main') {
      steps {
        sh 'git pull'
      }
    }
  }
}