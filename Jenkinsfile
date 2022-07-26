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
        sh '''
        git remote add upstream https://github.com/christopher1704/presentacion3-front.git'        
        git fetch upstream
        git merge upstream/dev
        git push
        git remote rm upstream
        '''
    }
  }
}
}