
    let array = ["أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص",
                "ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي",
                "أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص",
                "ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"]
    let txt1 =  document.getElementById('txt1');
    let txt2 =  document.getElementById('txt2');
    let counter = document.getElementById('counter');
    let num_trans =+counter.value;
    let txt ;
    let native_array = ["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص",
                        "ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي",]
    let numer ;
    let num_array = [];
    let btn =  document.getElementById('trans').onclick =function()
    {
        txt = txt1.value;
        if(parseInt(num_trans)<1 ||parseInt(num_trans>27))
        {
            console.log(num_trans);
            txt2.value = "مقدار الإزاحة يجيب أن يكون بين 1 و 27";
        }
        else
        {
    for(let i = 0 ; i <txt.length; i++)
        {
            for(let j = 0 ; j < native_array.length; j++)
                {
                    if(txt[i] === native_array[j])
                        {
                            numer = j+num_trans;
                            if(numer>27)
                            {
                            numer=numer-28;
                            num_array.push(array[numer]);
                            }
                            else
                            num_array.push(array[numer]);
                        }
                }
                if (txt[i] === " ")
                {
                    num_array.push(" ");
                }
            }
        txt2.innerText= num_array.join("");
        num_array = [];
    }
}




