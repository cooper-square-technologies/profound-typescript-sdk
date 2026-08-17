// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Answers, type AnswersQuery, type AnswersV2Query, type AnswerCreateV1PromptsPostResponse, type AnswerQueryV2V2PromptsPostResponse, type AnswerCreateV1PromptsPostParams, type AnswerQueryV2V2PromptsPostParams, type AnswerStreamV2V2PromptsStreamPostParams } from "./answers";

export class Prompts extends APIResource {
  answers: Answers = new Answers(this._client);

}

Prompts.Answers = Answers;

export declare namespace Prompts {
  export {
    Answers as Answers,
    type AnswersQuery as AnswersQuery,
    type AnswersV2Query as AnswersV2Query,
    type AnswerCreateV1PromptsPostResponse as AnswerCreateV1PromptsPostResponse,
    type AnswerQueryV2V2PromptsPostResponse as AnswerQueryV2V2PromptsPostResponse,
    type AnswerCreateV1PromptsPostParams as AnswerCreateV1PromptsPostParams,
    type AnswerQueryV2V2PromptsPostParams as AnswerQueryV2V2PromptsPostParams,
    type AnswerStreamV2V2PromptsStreamPostParams as AnswerStreamV2V2PromptsStreamPostParams,
  };
}
export { Prompts as PromptResource };
