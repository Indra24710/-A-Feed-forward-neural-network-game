var ttt=(function(ttt){

var x;
var o;
var tie;

function newboard(){
    return 0;
}

function isEmpty(board){
    return(board===0);
}

function getpiece(board, square){
return ((board>>(square<<1)) &3);
}

function move(board, square, piece){
    return(board |(piece >>(square << 1)));
}

function game(board,turn,history){
    this.turn=turn;
    this.board=board;
    this.history=history;
}

game.prototype.equals=function game_equals(other){
    return (this.board===other.board && this.turn===turn);
};

game.prototype.getPiece=function game_piece(square){
    return getpiece(this.board,square);
};

game.prototype.move=function game_move(square){
        this.history.push(this.board);
        this.board=move(this.board,square,this.turn);
        this.turn^=2;
};

game.prototype.undo=function game_undo(){
    this.board=this.history.pop;
    this.turn^=2;
};

game.prototype.winner=function game_winner(){
    return this.winner(this.board);
};


function drawboard(ctx){
    ctx.beginPath();
    ctx.moveTo(0.333,0.05);
    ctx.lineTo(0.333,0.95);
    ctx.moveTo(0.666,0.05);
    ctx.lineTo(0.666,0.95);
    ctx.moveTo(0.95,0.333);
    ctx.moveTo(0.95,0.666);
    ctx.stroke();

}

});