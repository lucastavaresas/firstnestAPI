import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { player } from './interfaces/player.interface';
import { PlayerDocument } from './player.model';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('players') private readonly playerModel: Model<PlayerDocument>,
  ) {}
  private readonly logger = new Logger(PlayersService.name);
  async createPlayer(player: player) {
    const newplayer = new this.playerModel();
    newplayer.name = player.name;
    newplayer.email = player.email;
    newplayer.password = player.password;
    await newplayer.save();
    return newplayer;
  }
  async list() {
    const foundPlayers = await this.playerModel.find({});
    return foundPlayers;
  }
  async listOne(_id: string) {
    const foundPlayer = await this.playerModel.findById(_id);
    return foundPlayer;
  }
  async del(_id: string) {
    const deletedPlayer = await this.playerModel.findByIdAndDelete(_id);
    return deletedPlayer;
  }
  async updateOne(_id: string, body: object) {
    const foundPlayer = await this.playerModel.findByIdAndUpdate(_id, body);
    return foundPlayer;
  }
}
