class CobrasEscadas
{
    constructor()
    {
        this.jogadorAtual = 1;
        this.jogadores = 
        [
            {'posicaoAtual': 0},
            {'posicaoAtual': 0}
        ];

        this.tabuleiro = [];

        for (var cont = 0; cont < 100; cont = cont + 1)
        {
            this.tabuleiro[cont] = 0;
        }

        //Escadas
        this.tabuleiro[1] = 36;
        this.tabuleiro[6] = 7;
        this.tabuleiro[7] = 23;
        this.tabuleiro[14] = 11;
        this.tabuleiro[20] = 21;
        this.tabuleiro[27] = 56;
        this.tabuleiro[35] = 8;
        this.tabuleiro[50] = 16;
        this.tabuleiro[70] = 20;
        this.tabuleiro[77] = 20;
        this.tabuleiro[87] = 7;

        //Cobras
        this.tabuleiro[15] = -10;
        this.tabuleiro[45] = -21;
        this.tabuleiro[48] = -38;
        this.tabuleiro[61] = -43;
        this.tabuleiro[63] = -4;
        this.tabuleiro[73] = -21;
        this.tabuleiro[88] = -21;
        this.tabuleiro[91] = -4;
        this.tabuleiro[94] = -20;
        this.tabuleiro[98] = -19;
    }

    jogar(dado1, dado2)
    {
        if (this.jogadores[this.jogadorAtual - 1].posicaoAtual < 100)
        {
            this.jogadores[this.jogadorAtual - 1].posicaoAtual += (dado1 + dado2);
        }
        
        if (this.jogadores[this.jogadorAtual - 1].posicaoAtual > 100)
        {
            this.jogadores[this.jogadorAtual - 1].posicaoAtual = 100 - (this.jogadores[this.jogadorAtual - 1].posicaoAtual - 100);
            console.log(this.jogadores[this.jogadorAtual - 1].posicaoAtual);
            this.jogadores[this.jogadorAtual - 1].posicaoAtual += this.tabuleiro[this.jogadores[this.jogadorAtual - 1].posicaoAtual - 1];
        }
        else
        {
            this.jogadores[this.jogadorAtual - 1].posicaoAtual += this.tabuleiro[this.jogadores[this.jogadorAtual - 1].posicaoAtual - 1];
        }

        if (dado1 == dado2)
        {
            this.jogadorAtual = this.jogadorAtual;
        }
        else
        {
            this.jogadorAtual = (this.jogadorAtual == 1) ? 2 : 1;
        }

        if (this.jogadores[0].posicaoAtual >= 100)
        {
            return 'Jogador 1 venceu!';
        }
        else if (this.jogadores[1].posicaoAtual >= 100)
        {
            return 'Jogador 2 venceu!';
        }
        else
        {
            return '';
        }
    }
}