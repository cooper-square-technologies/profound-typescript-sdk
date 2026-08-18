// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as AnswersAPI from './answers';
import {
  Answers,
  type AnswersQuery,
  type AnswersV2Query,
  type AnswerCreateV1PostResponse,
  type AnswerQueryV2V2PostResponse,
  type AnswerStreamV2V2StreamPostResponse,
  type AnswerCreateV1PostParams,
  type AnswerQueryV2V2PostParams,
  type AnswerStreamV2V2StreamPostParams,
} from './answers';

export class Prompts extends APIResource {
  answers: AnswersAPI.Answers = new AnswersAPI.Answers(this._client);
}

Prompts.Answers = Answers;

export declare namespace Prompts {
  export {
    Answers as Answers,
    type AnswersQuery as AnswersQuery,
    type AnswersV2Query as AnswersV2Query,
    type AnswerCreateV1PostResponse as AnswerCreateV1PostResponse,
    type AnswerQueryV2V2PostResponse as AnswerQueryV2V2PostResponse,
    type AnswerStreamV2V2StreamPostResponse as AnswerStreamV2V2StreamPostResponse,
    type AnswerCreateV1PostParams as AnswerCreateV1PostParams,
    type AnswerQueryV2V2PostParams as AnswerQueryV2V2PostParams,
    type AnswerStreamV2V2StreamPostParams as AnswerStreamV2V2StreamPostParams,
  };
}
