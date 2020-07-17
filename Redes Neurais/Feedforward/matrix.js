class Matrix{
    constructor(rows,cols){
        this.rows = rows;
        this.cols  = cols;

        this.data  = [];
        for (let i = 0; i < rows; i++) {
            var arr = [];
            for (let j = 0; j < cols; j++) {
                arr.push(0);
            }    
            this.data.push(arr);
        }
    }

    map(func){
        this.data = this.data.map((arr,i)=>{
            return arr.map((num,j) =>{
                return func(num, i , j);
            })
        })
        return this;
    }

    
    randomize(){
        this.map((ele,i,j)=>{
            return Math.random() *2 -1
        })
    }


    print(){
        console.table(this.data);
    }

    
}