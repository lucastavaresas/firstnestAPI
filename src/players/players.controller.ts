import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { player } from './interfaces/player.interface';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly PlayerService: PlayersService) {}
  @Post()
  async createPlayers(@Body() player: player) {
    const created = await this.PlayerService.createPlayer(player);
    return JSON.stringify({
      created,
    });
  }
  @Get()
  async listPlayers() {
    const foundPlayers = await this.PlayerService.list();
    return JSON.stringify({ foundPlayers });
  }
  @Get(':_id')
  async findOnePlayer(@Param() params): Promise<string> {
    const foundPlayer = await this.PlayerService.listOne(params._id);
    return JSON.stringify({ foundPlayer });
  }
  @Delete(':_id')
  async delPlayer(@Param() params): Promise<string> {
    const deletedPlayer = await this.PlayerService.del(params._id);
    return JSON.stringify({ deletedPlayer });
  }
  @Put(':_id')
  async updatePlayer(@Param() params, @Body() body): Promise<string> {
    const updatedPlayer = await this.PlayerService.updateOne(params._id, body);
    return JSON.stringify({ updatedPlayer });
  }
}
