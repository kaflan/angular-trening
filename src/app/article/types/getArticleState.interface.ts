import { ArticleInterface } from "src/app/shared/types/article.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"

export interface GetArticleStateInterface {
    isLoading: boolean,
    error: string | null
    data: ArticleInterface | null
    isSubmitting: boolean
    validationErrors: BackendErrorsInterface | null
  }
  