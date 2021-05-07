type Color = 'Black' | 'White'
type File2 = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game { 
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            //Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),
            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8)
        ]
    }
}
abstract class Piece {     // 사용자가 Piece 클래스를 직접 인스턴스화 할 수 없도록 막음 (abstract) 추상 클래스를 구현할 때는 추상 메서드도 구현해야한다. 
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File2,
        rank: Rank
        ) { 
            this.position = new Position(file, rank)
        }
    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position) : boolean
}
class Position { 
    constructor(
        private file: File2,
        private rank: Rank
    ){ }
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

class King extends Piece { 
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Queen extends Piece { }
class Bishop extends Piece { }
class Knight extends Piece { }
class Rook extends Piece { }
class Pawn extends Piece { }