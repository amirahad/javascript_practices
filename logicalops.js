let isvarified = true
isloggedin = true
haspaymentToken = true
isGuest = true

if(isvarified && isloggedin && haspaymentToken){
    console.log('Greeting user')
    console.log('Access to paid course')
}else if(isvarified || isGuest){
    console.log('Allow free courses')
}else{
    console.log('Please contact admin')
}