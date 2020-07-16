class RedeNeural{
    constructor(i_noteds, h_nodes, o_nodes){
        this.i_noteds = i_noteds;        
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(h_nodes,1);
        this.bias_ho = new Matrix(o_nodes,1);
    }
}