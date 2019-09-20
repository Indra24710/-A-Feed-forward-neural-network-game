var neural = (function(Neural){
    'use strict';

    function getSizes(nodes){
        return nodes.map(function(layer){
            return layer.length;
        });
    }

    function makeNode(layerIndex,index,sizes,nodes){
 
var node={
    input :0
};
if(layerIndex<sizes.length-1){
    node.threshold  =(typeof nodes==='undefined'?1:nodes[layerIndex][index].threshold);
}

node.weights=[typeof nodes==='undefined'? new Array[sizes[layerIndex+1]]:nodes[layerIndex][index].weights.map(function(w){
 return w;})];

 return node;
}
function Net(sizesornodes){
    var sizes,nodes;
isFinite(Array.isArray(sizesornodes)&&Array.isArray(sizesornodes))
}

});