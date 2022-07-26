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
        sh 'git pull origin master'
      }
    }
    stage('Pull Request') {
      steps {
        sh 'git remote add upstream https://github.com/christopher1704/presentacion3-front.git',
      }
      steps {
        sh 'git fetch upstream'
      }
      steps {
        sh 'git merge upstream/dev'
      }
      steps {
        sh 'git push'
      }
      steps {
        sh 'git remote rm upstream'
      }
    }
  }
}