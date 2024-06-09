/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bet as PrismaBet } from "@prisma/client";

export class BetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BetCountArgs, "select">): Promise<number> {
    return this.prisma.bet.count(args);
  }

  async bets<T extends Prisma.BetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BetFindManyArgs>
  ): Promise<PrismaBet[]> {
    return this.prisma.bet.findMany<Prisma.BetFindManyArgs>(args);
  }
  async bet<T extends Prisma.BetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BetFindUniqueArgs>
  ): Promise<PrismaBet | null> {
    return this.prisma.bet.findUnique(args);
  }
  async createBet<T extends Prisma.BetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BetCreateArgs>
  ): Promise<PrismaBet> {
    return this.prisma.bet.create<T>(args);
  }
  async updateBet<T extends Prisma.BetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BetUpdateArgs>
  ): Promise<PrismaBet> {
    return this.prisma.bet.update<T>(args);
  }
  async deleteBet<T extends Prisma.BetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BetDeleteArgs>
  ): Promise<PrismaBet> {
    return this.prisma.bet.delete(args);
  }
}
