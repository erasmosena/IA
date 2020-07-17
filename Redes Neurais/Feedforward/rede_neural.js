class RedeNeural{
    constructor(i_noteds, h_nodes, o_nodes){
        this.i_noteds = i_noteds;        
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes,1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.o_nodes,1);
        this.bias_ho.randomize();

        this.weigths_ih = new Matrix(this.h_nodes,this.i_nodes);
        this.weigths_ih.randomize();

        this.weigths_ho = new Matrix(this.o_nodes,this.h_nodes);
        this.weigths_ho.randomize();
    }

    feedforward(input_arr){
        let input = Util.arrayToMatriz(input_arr);        
        let hidden = Util.produtoInterno(this.weigths_ih,input);
        hidden = Util.soma(hidden,this.bias_ih);

        
        let output = Util.produtoInterno(this.weigths_ho,hidden);
        output.print();

    }
}