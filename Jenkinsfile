pipeline {

  options {
    disableConcurrentBuilds() 
  }

  agent {
      kubernetes {
         label "shared-lib-${UUID.randomUUID().toString()}"
         yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    jenkins: jenkins-pipeline
spec:
  containers:
  - name: jnlp
    image: registry-proxy.lbg.eu-gb.mybluemix.net/mm-mlp/jnlp-slave:3.23-1-alpine
  - name: cf-cli
    image: registry-proxy.lbg.eu-gb.mybluemix.net/cf-cli:6.41
    tty: true
    command:
    - cat
  - name: node10
    image: registry-proxy.lbg.eu-gb.mybluemix.net/node:10
    command:
    - cat
    tty: true
  securityContext:
    runAsUser: 0
"""
          }
  }

  environment {
    BM_API = 'api.lbg.eu-gb.bluemix.net'
    BM_ORG = 'POC15_PCA'
    BM_ENV = 'DEV'
    appname = 'devops-catalog'
    bluemixCredentialsID = "bluemix-global-deployer"
    CF_BIN = "cf"
  }

  stages{

    stage('yarn Build') {

      steps {
        container('node10'){
          sh "pwd; which yarn"
          sh "yarn ; yarn build"
          stash name: 'builder', includes: 'build/**'
          stash name: 'pipelines', includes: 'pipelines/**'
        }

      }

      post {

        success {
          echo 'yarn build stage is successful'
        }

        failure {
          echo 'There are failures in yarn build'
        }

      }

    }

    stage('app deploy') {

      when { anyOf { branch 'master'; branch 'uiChanges' } }

      steps {

        container('cf-cli'){

          withCredentials([
            usernamePassword(
              credentialsId: bluemixCredentialsID,
              passwordVariable: 'BM_PASS',
              usernameVariable: 'BM_USER'
            )
          ]){

              unstash 'builder'
              unstash 'pipelines'
              dir('build'){
              sh "${WORKSPACE}/pipelines/scripts/cf_deploy.sh"
            }

          }  

        }

      }

      post {

        success {
          echo 'App deploy step is success.'
        }

        failure {
          echo 'App deploy step is failed'
        }

      }

    }

  }

  post {

    always {
      deleteDir()
    }

    success {
      echo 'Build successful and result shall be notified in defined channels.'
    }

    unstable {
      echo 'The build is unstable.'
    }

    failure {
      echo 'Build failed , see above for errors.'
    }

    changed {
      echo '.'
    }

  }

}
