"use strict";
/**
 *チェスのゲーム
 *
 * @class Game
 */
class Game {
    constructor() {
        this.piece = Game.makePieces();
    }
    static makePieces() {
        return [
            new King('White', 'E', 1),
            new King('Black', 'E', 8)
        ];
    }
}
/**
 *チェスの駒
 *
 * @class Piece
 */
class Piece {
    constructor(color, filePiece, rank) {
        this.color = color;
        this.position = new Position(filePiece, rank);
    }
    // アクセス修飾子を指定しなければ、デフォルトの「public」になる
    moveTo(position) {
        this.position = this.position;
    }
}
/**
 *駒の座標
 *
 * @class Position
 */
class Position {
    constructor(
    // private アクセス修飾子は、そのパラメータを自動的にthisに割り当て、その可視性をprivateに設定する
    // Positionのインスタンス内のコードからは、それを読み書きできるが、
    // Positionのインスタンス外のコードからは読み書きができない.
    filePiece, rank) {
        this.filePiece = filePiece;
        this.rank = rank;
    }
    /**
     *距離を計算するメソッド
     *
     * @param {Position} position
     * @returns
     * @memberof Position
     */
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.filePiece.charCodeAt(0) - this.filePiece.charCodeAt(0))
        };
    }
}
class King extends Piece {
    constructor() {
        super(...arguments);
        this.canMoveTo = (position) => {
            let distance = this.position.distanceFrom(position);
            return distance.rank < 2 && distance.file < 2;
        };
    }
}
// class Queen extends Piece { }
// class Bishop extends Piece { }
// class Knight extends Piece { }
// class Rook extends Piece { }
// class Pawn extends Piece { }
