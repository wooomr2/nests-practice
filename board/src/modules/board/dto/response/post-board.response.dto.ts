import { BadRequestException, UnauthorizedException } from '@nestjs/common'
import { ResponseDto } from 'common/classes'
import { ResCode, ResMessage } from 'common/enums'

export class PostBoardResponseDto extends ResponseDto {
  constructor() {
    super(ResCode.SUCCESS, ResMessage.SUCCESS)
  }

  static success() {
    return new PostBoardResponseDto()
  }

  static noExistBoard() {
    return new BadRequestException(ResCode.NO_EXIST_BOARD, ResMessage.NO_EXIST_BOARD)
  }

  static noExistUser() {
    return new UnauthorizedException(ResCode.NO_EXIST_USER, ResMessage.NO_EXIST_USER)
  }
}
