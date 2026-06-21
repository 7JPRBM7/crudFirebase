import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// uma interface (um molde) para organizar o que é um Flash-card
export interface FlashCard {
  id?: string;
  pergunta: string;
  resposta: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlashCardsService {
  
  constructor(
    private http: HttpClient,      // ferramenta para consumir a API REST
    private firestore: Firestore   // ferramenta para falar com o Firebase
  ) {}

  // busca uma dica aleatória na internet (via GET)
  buscarDicaExterna(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  // 1. CREATE: adiciona um flash-card
  adicionarCard(card: FlashCard) {
    const cardsRef = collection(this.firestore, 'flashcards');
    return addDoc(cardsRef, card);
  }

  // 2. READ: traz todos os flash-cards salvos
  listarCards(): Observable<FlashCard[]> {
    const cardsRef = collection(this.firestore, 'flashcards');
    return collectionData(cardsRef, { idField: 'id' }) as Observable<FlashCard[]>;
  }

  // 3. UPDATE: modifica a pergunta ou resposta
  atualizarCard(card: FlashCard) {
    const cardDocRef = doc(this.firestore, `flashcards/${card.id}`);
    return updateDoc(cardDocRef, { pergunta: card.pergunta, resposta: card.resposta });
  }

  // 4. DELETE: apaga um flash-card
  deletarCard(id: string) {
    const cardDocRef = doc(this.firestore, `flashcards/${id}`);
    return deleteDoc(cardDocRef);
  }
}