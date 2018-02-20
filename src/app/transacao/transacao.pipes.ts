import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorDescricao'
})
export class FiltroPorDescricao implements PipeTransform {

    // Recebe a listagem a ser filtrada e o que foi digitado
    transform(listagem, digitado: string) {
        return listagem.filter(item => item.descricao.toLowerCase().includes(digitado.toLowerCase()));
    }
}