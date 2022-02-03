class Block{
    constructor(timestamp,data,previousHash){
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
    }

    calculateHash(){
        
    }
}

const block = new Block("2020-01-01",{amount: 5},"NFT");