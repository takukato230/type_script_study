/**
 *チェスのゲーム
 *
 * @class Game
 */
class Game {
  private piece = Game.makePieces()
  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8)
    ]
  }
}

// リテラル型としてそれぞれ列挙している
type Color = 'Black' | 'White'
type FilePiece = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


/**
 *チェスの駒
 *
 * @class Piece
 */
abstract class Piece {
  // protected アクセス修飾子
  // PieceインスタンスとPieceの全てのサブクラスのインスタンスからアクセスできる.
  protected position: Position
  constructor(
    private readonly color: Color,
    filePiece: FilePiece,
    rank: Rank
  ) {
    this.position = new Position(filePiece, rank)
  }
  // アクセス修飾子を指定しなければ、デフォルトの「public」になる
  moveTo(position: Position) {
    this.position = this.position
  }
  abstract canMoveTo(position: Position): boolean
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
    private filePiece: FilePiece,
    private rank: Rank
  ) { }
  /**
   *距離を計算するメソッド
   *
   * @param {Position} position
   * @returns
   * @memberof Position
   */
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.filePiece.charCodeAt(0) - this.filePiece.charCodeAt(0))
    }
  }
}

class King extends Piece {
  canMoveTo = (position: Position) => {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

// class Queen extends Piece { }

// class Bishop extends Piece { }

// class Knight extends Piece { }

// class Rook extends Piece { }

// class Pawn extends Piece { }