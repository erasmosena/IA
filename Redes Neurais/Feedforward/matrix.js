class Matrix{
    constructor(rows,cols){
        this.rows = rows;
        this.cols  = cols;

        this.data  = [];
        for (let i = 0; i < rows; i++) {
            var arr = [];
            for (let j = 0; j < cols; j++) {
                arr.push( Math.floor(Math.random()* 10 ));
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

    static soma(matrizA ,matrizB){
        if( matrizA.rows != matrizB.rows || matrizA.cols != matrizB.cols ){
            throw Error("Matriz A não tem o mesmo número de colunas e linhas que a Matriz b");
        }
        
        var matrix = new Matrix(matrizA.rows, matrizA.cols);
        console.log(matrizA.data);
        console.log(matrizB.data);
        matrix.map((elm,i,j)=>{
            return matrizA.data[i][j]+matrizB.data[i][j]
        })
        console.log(matrix.data);
        return matrix;
    }

    static produtoInterno(matrizA ,matrizB){
        var matrix = new Matrix(matrizA.rows, matrizB.cols);
        console.log(matrizA.data)
        console.log(matrizB.data)
        matrix.map((elm,i,j)=>{
            let sum = 0 ; 
            for( let k = 0 ; k < matrizB.rows; k++){                
                
                console.log( `matrizA.data[${i}][${k}] * matrizB.data[${k}][${j}] = ${matrizA.data[i][k]} * ${matrizB.data[k][j]}`);                
                let elm1 = matrizA.data[i][k];
                let elm2 = matrizB.data[k][j];
                sum+= elm1* elm2;
            }
            return sum;
            
        })
        console.log(matrix);
        return matrix;
    }
}