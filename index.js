function generatePassword(len){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890";
    let password = '';
    
    for(var i = 0;i<len;i++){
        const randomIndex = Math.floor(Math.random()*charset.length);
        password += charset.charAt(randomIndex);
    }
    return  password
}
module.export = generatePassword;