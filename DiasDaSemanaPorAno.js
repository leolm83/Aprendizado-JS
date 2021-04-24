/*contando dias da semana em um intervalo de datas*/
mes=04
ano=1999
datas=[]
countDomigo=0
countSegunda=0
countTerca=0
countQuarta=0
countQuinta=0
countSexta=0
countSabado=0
for(dia=0;dia<10;dia++){
    datas.push(new Date(ano,mes,dia))
    console.log(datas[datas.length-1])
    countDay(datas[datas.length-1].getDay())
}

function countDay(diaDaSemana){
    if(diaDaSemana==0){
        this.countDomigo+=1
    }
        if(diaDaSemana==1){
        this.countSegunda+=1
    }
        if(diaDaSemana==2){
        this.countTerca+=1
    }
        if(diaDaSemana==3){
        this.countQuarta+=1
    }
        if(diaDaSemana==4){
        this.countQuinta+=1
    }
        if(diaDaSemana==5){
        this.countSexta+=1
    }
        if(diaDaSemana==6){
        this.countSabado+=1
    }
       
}

console.log(
    "\nDOMINGOS : "+countDomigo+
    "\nSEGUNDAS : "+countSegunda+
    "\nTERCAS   : "+countTerca+
"\nQUARTAS  : "+countQuarta+
"\nQUINTAS  : "+countQuinta+
"\nSEXTA    : "+countSexta+
"\nSABADOS  : "+countSabado)
