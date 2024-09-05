
export class AppError extends Error{
    constructor(errMessage,statusCode){
        super(errMessage)
        this.statusCode=statusCode
    }
}