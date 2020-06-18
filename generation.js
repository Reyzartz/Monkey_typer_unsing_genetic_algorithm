class Phrase{
    
    constructor(len){
        this.length=len
        this.val=[]
        this.fitness=0;
    }
    create=()=>{
        this.val=[]
        for(let i=0;i<this.length;i++){
            this.val.push(char(floor(random(32,127))))
        }
    }
    reproduce = (phraseA,phraseB)=>{
        for(let i=0;i<this.length;i++){
            if(random()<=mutation){
                this.val[i] = char(floor(random(32,127)))
            }
            else{
                if(random(1)>0.5)
                    this.val[i] = phraseA[i]
                else{
                    this.val[i] = phraseB[i]
            }
            }
            
        }
    }
    check_fitness=(phra,len)=>{
        this.fitness =0 ;
        for(let i=0;i<len;i++){
            if(phra[i]===this.val[i])
                this.fitness++;
        }
    }
    show=()=>{
        text(this.val.join(''),0,0);
    }
}