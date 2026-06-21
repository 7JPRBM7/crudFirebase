import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FlashCardsService, FlashCard } from '../services/flash-cards';
import { addIcons } from 'ionicons';
import { trashOutline, createOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  dicaDoDia: any = null;
  cards: FlashCard[] = [];
  
  // variáveis para o formulário
  novaPergunta: string = '';
  novaResposta: string = '';
  cardEmEdicao: FlashCard | null = null;

  constructor(private flashCardsService: FlashCardsService) {
    addIcons({ trashOutline, createOutline });
  }

  ngOnInit() {
    // puxa a dica da API REST assim que a tela abre
    this.flashCardsService.buscarDicaExterna().subscribe(dica => {
      this.dicaDoDia = dica;
    });

    // escuta o Firebase em tempo real
    this.flashCardsService.listarCards().subscribe(dados => {
      this.cards = dados;
    });
  }

  // função para o CREATE e UPDATE do Firebase
  salvarCard() {
    if (!this.novaPergunta || !this.novaResposta) return;

    if (this.cardEmEdicao) {
      // se já existe, atualiza
      this.flashCardsService.atualizarCard({
        id: this.cardEmEdicao.id,
        pergunta: this.novaPergunta,
        resposta: this.novaResposta
      });
      this.cardEmEdicao = null;
    } else {
      // se não, cria um novo
      this.flashCardsService.adicionarCard({
        pergunta: this.novaPergunta,
        resposta: this.novaResposta
      });
    }
    
    // limpa os campos após salvar
    this.novaPergunta = '';
    this.novaResposta = '';
  }

  // joga os dados do card pro formulário para editar
  editarCard(card: FlashCard) {
    this.cardEmEdicao = card;
    this.novaPergunta = card.pergunta;
    this.novaResposta = card.resposta;
  }

  // função para o DELETE do Firebase
  excluirCard(id: string | undefined) {
    if (id) {
      this.flashCardsService.deletarCard(id);
    }
  }
}