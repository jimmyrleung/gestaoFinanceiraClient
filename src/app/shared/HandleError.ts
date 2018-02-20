export class HandleRequestError {
    jsonError;

    constructor(jsonError) {
        this.jsonError = jsonError;
    }

    getRequestError() {
        if (this.jsonError.errorList && this.jsonError.errorList.length > 0) return this.jsonError.errorList[0].message;
        else if (this.jsonError.message) return this.jsonError.message;
        else return "Erro de comunicação com o servidor. Tente novamente mais tarde."
    }

    // Busca uma lista de erros retornada pelo servidor
    getRequestErrorList() {
        if (this.jsonError.errorList) return this.jsonError.errorList;
        else return [{ message: "Erro de comunicação com o servidor. Tente novamente mais tarde." }];
    }
}