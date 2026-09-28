function openPage(url,callback){
      console.log('app url : '+ url);
      let br = callback('Amazon Login Page');
      console.log('browser is ' + br);
      return true;

}

let flag = openPage('https://www.amazon.com', (title) =>{
      console.log('getting the page title.....' + title);
      return 'chrome';
});

console.log(flag);