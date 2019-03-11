export CF_HOME

echo "=> Hostname : $(hostname) , IP : $(hostname -i)<="

echo "Listing of files"
find . -type f
if [ "${BRANCH_NAME}" == "uiChanges" ];then appname="${appname}-staging";fi

${CF_BIN} logout && touch Staticfile

${CF_BIN} login -a $BM_API -u $BM_USER -p $BM_PASS -o $BM_ORG -s $BM_ENV
${CF_BIN} delete ${appname} -f -r || true
${CF_BIN} push ${appname} -m 64M -s cflinuxfs2
